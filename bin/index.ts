import fs from 'fs';
import path from 'path';
import TypeOf from '../utils/TypeOf';
import jsBeautify from 'js-beautify';
import {
  markdownData,
  Markdown,
  MarkdownMethodValue,
  MarkdownPropsValue,
  MarkdownClassValue,
} from '../data';
/**
 * @description 生成 markdown 文件路径
 */
const destFile = path.join(__dirname, '../markdown/README.md');
/**
 * @description 链接
 * @param id
 * @param target
 */
const link = (id: string, target: string, title?: string) => {
  if (TypeOf.isNotBlankStr(title)) {
    return `[${target}](#${id} "${title}")`;
  }
  return `[${target}](#${id})`;
};
/**
 * @description 增加 id
 * @param id
 * @param target
 */
const span = (id: string, target: string) => {
  return `<span id="${id}">${target}</span>`;
};
/**
 * @description 转义'<>'
 * @param key
 */
const escape = (key: string) => {
  return key.replace(/\</g, '&lt;').replace(/\</g, '&gt;');
};
/**
 * @description 查找链接属性
 * @param type
 * @returns
 */
const findTypeLink = (type: string) => {
  // 遍历获取匹配
  for (const key in reNewData) {
    const typeKey = key.replace('<T>', '');
    const keyRegExp = new RegExp(typeKey);
    // 匹配键
    if (TypeOf.strMatch(type, keyRegExp)) {
      const newType = escape(
        type.replace(
          reNewData[key].id,
          link(reNewData[key].id, reNewData[key].id, reNewData[key].description)
        )
      );
      return newType;
    }
    // 类型匹配
    const { mode, types } = <MarkdownClassValue>reNewData[key];
    if (mode === 'class' && TypeOf.isNotEmptyObj(types)) {
      let newType = type;
      for (const t in types) {
        const typeKey = t.replace('<T>', '');
        const typeRegExp = new RegExp(typeKey);
        if (TypeOf.strMatch(type, typeRegExp)) {
          newType = newType.replace(
            typeRegExp,
            link(t, typeKey, types[t].description)
          );
        }
      }
      return escape(newType);
    }
  }
  return escape(type);
};
const reNewData: Markdown = {};
for (const key in markdownData) {
  reNewData[key] = <MarkdownClassValue>markdownData[key];
  reNewData[key].mode = 'class';
  reNewData[key].id = key;
  // 属性
  const props = markdownData[key]['props'];
  // 方法
  const methods = markdownData[key]['methods'];
  for (const propName in props) {
    reNewData[`${key}.${propName}`] = <MarkdownPropsValue>props[propName];
    reNewData[`${key}.${propName}`].mode = 'props';
    reNewData[`${key}.${propName}`].id = `${key}_${propName}`;
  }
  for (const methodName in methods) {
    reNewData[`${key}.${methodName}`] = <MarkdownMethodValue>(
      methods[methodName]
    );
    reNewData[`${key}.${methodName}`].mode = 'methods';
    reNewData[`${key}.${methodName}`].id = `${key}_${methodName}`;
  }
}
/**
 * @description 处理 props 类型
 * @param markdownProp
 * @returns
 */
const handleProps = (markdownProp: MarkdownPropsValue) => {
  // 片段
  const clip = [];
  const { example, type } = markdownProp;
  // 示例
  if (
    TypeOf.objStructTypeMatch(example, {
      value: 'isNotBlankStr',
    })
  ) {
    const { value } = example;
    if (TypeOf.isNotEmptyObj(reNewData[type])) {
      clip.push(...handleClass(<MarkdownClassValue>reNewData[type]));
    }
    clip.push(`#### 示例`);
    const js = jsBeautify.js_beautify(value);
    const jsClip = [];
    jsClip.push(`\`\`\`javascript`);
    jsClip.push(js);
    jsClip.push(`\`\`\``);
    clip.push(jsClip.join('\n'));
  }
  return clip;
};
/**
 * @description 处理 methods 类型
 * @param markdownMethod
 */
const handleMethods = (markdownMethod: MarkdownMethodValue) => {
  // 片段
  const clip = [];
  const { params, returntype, example } = markdownMethod;
  // 参数说明
  if (TypeOf.isNotEmptyObj(params)) {
    clip.push(`#### 参数`);
    for (const paramName in params) {
      const { description, type, required, defaultValue } = params[paramName];
      // 链接类型
      const linkedType = findTypeLink(type);
      // 生成表格
      const blank = [];
      blank.push(`| 属性	| 类型	| 默认值	| 必填	| 说明 |`);
      blank.push(`| :---:	| :---:	| :---:	| :---:	| :---: |`);
      blank.push(
        `| ${paramName}	| ${linkedType}	| ${defaultValue}	| ${
          required ? '是' : '否'
        }	| ${description} |`
      );
      clip.push(blank.join('\n'));
    }
  }
  // 返回值
  if (TypeOf.objStructTypeMatch(returntype, { type: 'isNotBlankStr' })) {
    const { type, description } = returntype;
    clip.push(`#### 返回值`);
    // 链接类型
    const linkedType = findTypeLink(type);
    clip.push(`- ${linkedType} ${description}`);
  }
  if (
    TypeOf.objStructTypeMatch(example, {
      value: 'isNotBlankStr',
    })
  ) {
    const { description, value } = example;
    clip.push(`#### 示例`);
    if (TypeOf.isNotBlankStr(description)) {
      clip.push(`  ${description}`);
    }
    const js = jsBeautify.js_beautify(value);
    const jsClip = [];
    jsClip.push(`\`\`\`javascript`);
    jsClip.push(js);
    jsClip.push(`\`\`\``);
    clip.push(jsClip.join('\n'));
  }
  return clip;
};
/**
 * @description 处理 class 类型
 * @param markdownClass
 */
const handleClass = (markdownClass: MarkdownClassValue) => {
  const clip = [];
  // 标题
  const { id } = markdownClass;
  const { props, methods, example, types } = markdownClass;
  // 属性
  if (TypeOf.isNotEmptyObj(props)) {
    clip.push(`#### 属性`);
    for (const propName in props) {
      const { description, type } = <MarkdownPropsValue>props[propName];
      // 链接类型
      const linkedType = findTypeLink(type);
      clip.push(`- ${escape(propName)}: ${linkedType}`);
      clip.push(`  ${description}`);
    }
  }
  // 方法
  if (TypeOf.isNotEmptyObj(methods)) {
    clip.push(`#### 方法`);
    for (const methodName in methods) {
      const { description, params, returntype } = <MarkdownMethodValue>(
        methods[methodName]
      );
      // 参数
      const paramClip = [];
      for (const paramName in params) {
        const { type } = params[paramName];
        // 链接类型
        const linkedType = findTypeLink(type);
        paramClip.push(`${escape(paramName)}: ${linkedType}`);
      }
      //  类。方法
      const method = `${escape(id)}.${escape(methodName)}`;
      // id
      const methodID = `${id}_${methodName}`;
      // 返回类型
      const { type } = returntype;
      // 链接类型
      const linkedType = findTypeLink(type);
      clip.push(
        `- ${link(methodID, method, description)}(${paramClip.join(
          ', '
        )}): ${linkedType}`
      );
      clip.push(`  ${description}`);
    }
  }
  // 示例
  if (
    TypeOf.objStructTypeMatch(example, {
      value: 'isNotBlankStr',
    })
  ) {
    const { description, value } = example;
    clip.push(`#### 示例`);
    if (TypeOf.isNotBlankStr(description)) {
      clip.push(`- ${description}`);
    }
    const js = jsBeautify.js_beautify(value);
    const jsClip = [];
    jsClip.push(`  \`\`\`javascript`);
    jsClip.push(
      js
        .split('\n')
        .map((v) => `  ${v}`)
        .join('\n')
    );
    jsClip.push(`  \`\`\``);
    clip.push(jsClip.join('\n'));
  }
  // 类型定义
  if (TypeOf.objStructTypeMatch(types, { value: 'isNotBlankStr' })) {
    clip.push(`#### 类型定义`);
    for (const key in types) {
      clip.push(`- ${span(key, escape(key))}`);
      const { description, value } = types[key];
      if (TypeOf.isNotBlankStr(description)) {
        clip.push(`  ${description}`);
      }
      const jsClip = [];
      jsClip.push(`  \`\`\`typescript`);
      const js = jsBeautify.js_beautify(value);
      jsClip.push(
        js
          .split('\n')
          .map((v) => `  ${v}`)
          .join('\n')
      );
      jsClip.push(`  \`\`\``);
      clip.push(jsClip.join('\n'));
    }
  }
  return clip;
};
/**
 * @description 生成 markdown
 */
const createMD = () => {
  // 片段
  const clip = [];
  for (const key in reNewData) {
    // 标题
    const { id, description, mode } = reNewData[key];
    // class
    if (mode === 'class') {
      clip.push(`### ${span(id, escape(key))}`);
      clip.push(`${description}`);
      clip.push(...handleClass(<MarkdownClassValue>reNewData[key]));
    }
    // props
    if (mode === 'props') {
      // 属性类型
      const { type } = <MarkdownPropsValue>reNewData[key];
      // 类名 属性
      const [className, propName] = key.split('.');
      // 链接类型
      const classNameLinkedType = findTypeLink(className);
      const linkedType = findTypeLink(type);
      // 标题
      const title = `${classNameLinkedType}.${propName}`;
      // title
      clip.push(`### ${span(id, title)}: ${linkedType}`);
      // 描述
      clip.push(`${description}`);
      clip.push(...handleProps(<MarkdownPropsValue>reNewData[key]));
    }
    // methods
    if (mode === 'methods') {
      // 属性类型
      const { returntype, params } = <MarkdownMethodValue>reNewData[key];
      // 类名 属性
      const [className, method] = key.split('.');
      // 类名链接
      const classNameLinkedType = findTypeLink(className);
      // 返回值链接
      const returnLinkedType = findTypeLink(returntype.type);
      // 参数链接
      const paramsLinkedType = [];

      for (const param in params) {
        const { type } = params[param];
        paramsLinkedType.push(`${param}: ${findTypeLink(type)}`);
      }
      // 方法名
      const methodName = `${classNameLinkedType}.${method}(${paramsLinkedType.join(
        ', '
      )})`;
      // 标题
      clip.push(`### ${span(id, methodName)}: ${returnLinkedType}`);
      // 描述
      clip.push(`${description}`);
      clip.push(...handleMethods(<MarkdownMethodValue>reNewData[key]));
    }
    const text = clip.join('\n\n');
    // console.log(text);

    fs.writeFileSync(destFile, text);
  }
};
createMD();
