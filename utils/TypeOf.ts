enum BaseType {
  STRING = 'string',
  NUMBER = 'number',
  BOOLEAN = 'boolean',
  OBJECT = 'object',
  NULL = 'null',
  UNDEFINED = 'undefined',
  ARRAY = 'array',
  UNKNOWN = 'unknown',
}
enum ObjectExtendsType {
  FUNCTION = 'function',
  SET = 'set',
  REGEX = 'regex',
  MAP = 'map',
}
enum StringExtendsType {
  JSON = 'json',
  PLAIN = 'plain',
}
enum PlainExtendsType {
  BLANK = 'blank',
  NUMBER = 'number',
}
enum JSONExtendsType {
  ARRAY = 'array',
  OBJECT = 'object',
  BOOLEAN = 'boolean',
}
type PropsFuntion<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

interface TypeOf {
  /**
   * @description 获取类型
   * @param value
   */
  getType(value: any): BaseType | string;
  /**
   * @description 判断对象
   * @param value
   */
  isObject(value: any): boolean;
  /**
   * @description 判断函数
   * @param value
   */
  isFunction(value: any): boolean;
  /**
   * @description 判断正则
   * @param value
   */
  isRegx(value: any): boolean;
  /**
   * @description 判断Set集合对象
   * @param value
   */
  isSet(value: any): boolean;
  /**
   * @description 判断Map对象
   * @param value
   */
  isMap(value: any): boolean;
  /**
   * @description 判断数组
   * @param value
   */
  isArray(value: any): boolean;
  /**
   * @description 判断数字
   * @param value
   */
  isNumber(value: any): boolean;
  /**
   * @description 判断继承
   * @param value
   */
  isInsOf(value: any, construct: any): boolean;
  /**
   * @description 判断字符串
   * @param value
   */
  isString(value: any): boolean;

  /**
   * @description 判断布尔
   * @param value
   */
  isBooloon(value: any): boolean;
  /**
   * @description 判断空数组
   * @param value
   */
  isEmptyArr(value: any): boolean;
  /**
   * @description 判断非空数组
   * @param value
   */
  isNotEmptyArr(value: any): boolean;
  /**
   * @description 判断空对象
   * @param value
   */
  isEmptyObj(value: any): boolean;
  /**
   * @description 判断非空对象
   * @param value
   */
  isNotEmptyObj(value: any): boolean;

  /**
   * @description 判断空字符
   * @param value
   */
  isBlankStr(value: any): boolean;
  /**
   * @description 判断非空字符
   * @param value
   */
  isNotBlankStr(value: any): boolean;
  /**
   * @description 判断null
   * @param value
   */
  isNull(value: any): boolean;
  /**
   * @description 判断undefined
   * @param value
   */
  isUndefined(value: any): boolean;
  /**
   * @description 判断非undefined和null
   * @param value
   */
  isNotNullOrUndefined(value: any): boolean;
  /**
   * @description 判断undefined或null
   * @param value
   */
  isNullOrUndefined(value: any): boolean;

  /**
   * @description 判断对象结构类型
   * @param value
   * @param keys
   */
  objStructMatch(value: any, keys: string[]): boolean;
  /**
   * @description 判断对象结构值类型
   * @param value
   * @param keys
   */
  objStructTypeMatch(
    value: any,
    template: { [key: string]: PropsFuntion<TypeOf> }
  ): boolean;
  /**
   * @description 字符匹配
   * @param value
   * @param regexp
   */
  strMatch(value: any, regexp: RegExp | string): boolean;
}

class TypeOf implements TypeOf {
  getType(value: any) {
    if (this.isUndefined(value)) {
      return BaseType.UNDEFINED;
    }
    if (this.isNull(value)) {
      return BaseType.NULL;
    }
    if (this.isNumber(value)) {
      return BaseType.NUMBER;
    }
    if (this.isString(value)) {
      if (this.isStrNum(value)) {
        return `${BaseType.STRING}.${StringExtendsType.PLAIN}.${PlainExtendsType.NUMBER}`;
      }
      if (this.isBlankStr(value)) {
        return `${BaseType.STRING}.${StringExtendsType.PLAIN}.${PlainExtendsType.BLANK}`;
      }
      if (this.isJson(value)) {
        if (this.isJsonArr(value)) {
          return `${BaseType.STRING}.${StringExtendsType.JSON}.${JSONExtendsType.ARRAY}`;
        }
        if (this.isJsonObj(value)) {
          return `${BaseType.STRING}.${StringExtendsType.JSON}.${JSONExtendsType.OBJECT}`;
        }
        if (this.isJsonBool(value)) {
          return `${BaseType.STRING}.${StringExtendsType.JSON}.${JSONExtendsType.BOOLEAN}`;
        }
        return `${BaseType.STRING}.${StringExtendsType.JSON}`;
      }
      return BaseType.STRING;
    }
    if (this.isBooloon(value)) {
      return BaseType.BOOLEAN;
    }
    if (this.isArray(value)) {
      return BaseType.ARRAY;
    }
    if (this.isObject(value)) {
      return BaseType.OBJECT;
    }
    if (this.isFunction(value)) {
      return `${BaseType.OBJECT}.${ObjectExtendsType.FUNCTION}`;
    }
    if (this.isSet(value)) {
      return `${BaseType.OBJECT}.${ObjectExtendsType.SET}`;
    }
    if (this.isMap(value)) {
      return `${BaseType.OBJECT}.${ObjectExtendsType.MAP}`;
    }
    if (this.isRegx(value)) {
      return `${BaseType.OBJECT}.${ObjectExtendsType.REGEX}`;
    }
    return BaseType.UNKNOWN;
  }
  isObject(value: any): boolean {
    return Boolean(
      value &&
        typeof value === 'object' &&
        Object.prototype.toString.call(value) === '[object Object]'
    );
  }
  isFunction(value: any): boolean {
    return Boolean(
      value &&
        typeof value === 'function' &&
        Object.prototype.toString.call(value) === '[object Function]'
    );
  }
  isRegx(value: any): boolean {
    return Boolean(
      value &&
        typeof value === 'object' &&
        Object.prototype.toString.call(value) === '[object RegExp]'
    );
  }
  isSet(value: any): boolean {
    return Boolean(
      value &&
        typeof value === 'object' &&
        Object.prototype.toString.call(value) === '[object Set]'
    );
  }
  isMap(value: any): boolean {
    return Boolean(
      value &&
        typeof value === 'object' &&
        Object.prototype.toString.call(value) === '[object Map]'
    );
  }
  isArray(value: any): boolean {
    return Array.isArray(value);
  }
  isNumber(value: any): boolean {
    return typeof value === 'number';
  }
  isInsOf(value: any, construct: any): boolean {
    return Boolean(value instanceof construct);
  }
  isString(value: any): boolean {
    return typeof value === 'string';
  }
  isBooloon(value: any): boolean {
    return typeof value === 'boolean';
  }
  isEmptyArr(value: any): boolean {
    return Boolean(this.isArray(value) && !value.length);
  }
  isNotEmptyArr(value: any, length?: number): boolean {
    if (this.isNumber(length)) {
      return Boolean(this.isArray(value) && value.length === length);
    }
    return Boolean(this.isArray(value) && value.length);
  }
  isEmptyObj(value: any): boolean {
    return Boolean(this.isObject(value) && !Object.keys(value).length);
  }
  isNotEmptyObj(value: any): boolean {
    return Boolean(this.isObject(value) && Object.keys(value).length);
  }
  isBlankStr(value: any): boolean {
    return Boolean(this.isString(value) && !value.length);
  }
  isNotBlankStr(value: any): boolean {
    return Boolean(this.isString(value) && value.length);
  }
  isStrNum(value: any): boolean {
    return this.strMatch(value, /^\d+\.?\d*$/);
  }
  isNull(value: any): boolean {
    return value === null;
  }
  isUndefined(value: any): boolean {
    return value === undefined;
  }
  isNotNullOrUndefined(value: any): boolean {
    return !this.isNull(value) && !this.isUndefined(value);
  }
  isNullOrUndefined(value: any): boolean {
    return this.isNull(value) || this.isUndefined(value);
  }
  isJson(value: any): boolean {
    try {
      const res = JSON.parse(value);
      return res;
    } catch (error) {
      return false;
    }
  }
  isJsonArr(value: any): boolean {
    try {
      const res = JSON.parse(value);
      return this.isArray(res);
    } catch (error) {
      return false;
    }
  }
  isJsonObj(value: any): boolean {
    try {
      const res = JSON.parse(value);
      return this.isObject(res);
    } catch (error) {
      return false;
    }
  }
  isJsonBool(value: any): boolean {
    try {
      const res = JSON.parse(value);
      return this.isBooloon(res);
    } catch (error) {
      return false;
    }
  }
  /**
   * @description 字符匹配
   * @param value
   * @param regexp
   */
  strMatch(value: any, regexp: RegExp | string): boolean {
    const regx = new RegExp(regexp);
    return this.isString(value) && regx.test(value);
  }
  objStructMatch(value: any, keys: string[]): boolean {
    if (this.isNotEmptyObj(value) && this.isNotEmptyArr(keys)) {
      return keys.every((key) => {
        const regx = /^([a-zA-Z_$]+)\.([a-zA-Z_$.]+)$/;
        if (regx.test(key)) {
          const left = (<RegExpMatchArray>key.match(regx))[1];
          const right = (<RegExpMatchArray>key.match(regx))[2];
          return this.objStructMatch(value[left], [right]);
        }
        return !this.isUndefined(value[key]);
      });
    }
    return false;
  }
  objStructTypeMatch(
    value: any,
    template: { [key: string]: PropsFuntion<TypeOf> }
  ) {
    if (this.isNotEmptyObj(value) && this.isNotEmptyObj(template)) {
      // 普通匹配
      for (const key in template) {
        // 类型匹配
        const fnName = template[key];
        // 方法存在
        const matchFN = this.isFunction(this[fnName]);

        // 点表示法
        const subRegx = /^([a-zA-Z_$\[\]]+)\.([a-zA-Z_$.\[\]]+)$/;
        if (subRegx.test(key) && matchFN) {
          const left = (<RegExpMatchArray>key.match(subRegx))[1];
          const right = (<RegExpMatchArray>key.match(subRegx))[2];
          // 递归判别
          const res = this.objStructTypeMatch(value[left], {
            [right]: fnName,
          });
          if (!res) {
            return false;
          }
          continue;
        }
        // [key]表示法
        const templateRegx = /^\[key\]$/;
        if (templateRegx.test(key) && matchFN) {
          for (const subKey in value) {
            const res = (<Function>this[fnName])(value[subKey]);
            if (!res) {
              return false;
            }
          }
          continue;
        }
        if (!this.isUndefined(value[key]) && matchFN) {
          const res = (<Function>this[fnName])(value[key]);
          if (!res) {
            return false;
          }
        }
      }
      return true;
    }
    return false;
  }
}
const typeOf = new TypeOf();

export default typeOf;

export { TypeOf };
