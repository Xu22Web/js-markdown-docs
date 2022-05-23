export type MarkdownData = {
  [key: string]: Partial<MarkdownClassValue>;
};
export type Markdown = {
  [key: string]: MarkdownClassValue | MarkdownMethodValue | MarkdownPropsValue;
};
export type MarkdownClassValue = {
  id: string;
  description: string;
  methods: MarkdownMethods;
  props: MarkdownProps;
  example: {
    description: string;
    value: string;
  };
  types: {
    [key: string]: {
      description: string;
      value: string;
    };
  };
  mode?: 'class';
};
export type MarkdownMethods = {
  [key: string]: Partial<MarkdownMethodValue>;
};
export type MarkdownMethodValue = {
  id: string;
  description: string;
  params: {
    [key: string]: {
      description: string;
      type: string;
      defaultValue: string;
      required: boolean;
    };
  };
  returntype: {
    description: string;
    type: string;
  };
  example: {
    description: string;
    value: string;
  };
  mode?: 'methods';
};
export type MarkdownProps = {
  [key: string]: Partial<MarkdownPropsValue>;
};

export type MarkdownPropsValue = {
  id: string;
  description: string;
  type: string;
  example: {
    description: string;
    value: string;
  };
  mode?: 'props';
};

export const markdownData: MarkdownData = {
  Database: {
    description: 'MySQL 数据库实例',
    example: {
      description: '初始化 MySQL 数据库',
      value: `const db = database(
        // 定义配置
        defineConfig({
          // 连接配置
          connConfig: {
            database: 'databaseName',
            user: 'user',
            password: 'password',
          },
          // object 或 array 转换为 json
          jsonStringfy: true,
          // json 转换为 object 或 array
          jsonParse: true,
          // tinyint(1) 转换为 boolean
          tinyIntToBoolean: true,
        })
      );`,
    },
    props: {
      command: {
        description: '数据库操作符',
        type: 'Command',
        example: {
          description: '',
          value: `const _ = db.command;`,
        },
      },
    },
    methods: {
      'collection<T>': {
        description: '获取集合。方法接受一个 name 参数，指定需引用的集合名称。',
        params: {
          name: {
            description: '集合名',
            type: 'string',
            defaultValue: '无',
            required: true,
          },
        },
        returntype: {
          description: '集合',
          type: 'Collection<T>',
        },
        example: {
          description: '',
          value: `const todosCollection = db.collection<T>('todos');`,
        },
      },
      createCollection: {
        description: '创建集合。如果集合已经存在会创建失败。',
        params: {
          name: {
            description: '集合名',
            type: 'string',
            defaultValue: '无',
            required: true,
          },
        },
        returntype: {
          description: '无',
          type: 'Promise<>',
        },
        example: {
          description: '',
          value: `const todosCollection = await db.createCollection<T>('todos');`,
        },
      },
      RegExp: {
        description: '构造正则表达式。',
        params: {
          regexp: {
            description: '正则配置或正则表达式',
            type: 'DatabeseRegExpLike | RegExp',
            defaultValue: '无',
            required: true,
          },
        },
        returntype: {
          description: '数据库正则对象',
          type: 'DatabeseRegExp',
        },
        example: {
          description: '',
          value: `// 原生 JavaScript 对象
          db.collection<T>('todos').where({
            description: /miniprogram/i
          })
          
          // 数据库正则对象
          db.collection<T>('todos').where({
            description: db.RegExp({
              regexp: 'miniprogram',
              options: 'i',
            })
          })`,
        },
      },
      runTransaction: {
        description: '发起事务',
        params: {
          callback: {
            description:
              '事务执行函数，需为 async 异步函数或返回 Promise 的函数',
            type: '(transation: Transaction) => any',
            defaultValue: '无',
            required: true,
          },
        },
        returntype: {
          description: 'Promise<any>',
          type: 'Promise<any>',
        },
        example: {
          description: '回调函数事务处理',
          value: `const result = await db.runTransaction(async (transaction) => {
            const aaaRes = await transaction.collection<T>('account').get();
            const bbbRes = await transaction.collection<T>('account').get();
            if (aaaRes.status && bbbRes.status) {
              // 会作为 runTransaction resolve 的结果返回
              return {
                aaaAccount: aaaRes.result[0].amount - 10,
              };
            }
            // 会作为 runTransaction reject 的结果出去
            await transaction.rollback(-100);
          });`,
        },
      },
      startTransaction: {
        description:
          '开始事务。另一个同样可以使用的发起事务的 API 是 runTransaction。',
        params: {},
        returntype: {
          description: '事务实例',
          type: 'Promise<Transaction>',
        },
        example: {
          description: '获取事务实例，外部处理事务',
          value: `const transaction = await db.startTransaction()

          const aaaRes = await transaction.collection<T>('account').get()
          const bbbRes = await transaction.collection<T>('account').get()
      
          if (aaaRes.status && bbbRes.status) {
            const updateAAARes = await transaction.collection('account').update({
                amount: 10
            })
      
            const updateBBBRes = await transaction.collection('account').update({
              amount: 10
            })
      
            await transaction.commit()
      
            console.log(transaction succeeded)
      
            return {
              success: true,
              aaaAccount: aaaRes.result[0].amount - 10,
            }
          }`,
        },
      },
    },
  },
  'Collection<T>': {
    description: '数据库集合',
    example: {
      description: '获取集合实例',
      value: `const collection = db.collection<T>('todos')`,
    },
    props: {},
    methods: {
      aggregate: {
        description:
          '发起聚合操作，定义完聚合流水线阶段之后需调用 end 方法标志结束定义并实际发起聚合操作。',
        params: {},
        returntype: {
          description: '聚合操作',
          type: 'Aggregate<T>',
        },
        example: {
          description: '新增字段 `id` 为 `_id` 字段值，隐藏 `_id` 字段',
          value: `await db.collection<T>('todos')
          .aggregate()
          .project({
            id: '$_id',
            _id: false,
          })
          .end()`,
        },
      },
      field: {
        description: '指定返回结果中记录需返回的字段。',
        params: {
          filter: {
            description: '筛选字段',
            type: 'Filter<T>',
            defaultValue: '无',
            required: true,
          },
        },
        returntype: {
          description: '集合',
          type: 'Collection<T>',
        },
        example: {
          description: '隐藏记录中 `_id` 字段',
          value: `await db
          .collection<T>('todos')
          .field({
            _id: false,
          })
          .get();
        `,
        },
      },
      where: {
        description: '指定查询条件，返回带新查询条件的新的集合。',
        params: {
          where: {
            description: '筛选字段',
            type: 'Where<T>',
            defaultValue: '无',
            required: true,
          },
        },
        returntype: {
          description: '集合',
          type: 'Collection<T>',
        },
        example: {
          description: '`_id` 为 `xxx` 的记录',
          value: `await db
          .collection<T>('todos')
          .where({
            _id: 'xxx',
          })
          .get();`,
        },
      },
      orderBy: {
        description: '指定查询结果集数量上限。',
        params: {
          orderBy: {
            description: '排序方式',
            type: 'OrderBy<T>',
            defaultValue: '无',
            required: true,
          },
        },
        returntype: {
          description: '集合',
          type: 'Collection<T>',
        },
        example: {
          description: '`_id` 为 `xxx` 的记录按照 `_id` 逆序排序',
          value: `await db
          .collection<T>('todos')
          .where({
            _id: 'xxx',
          })
          .orderBy({
            _id:'desc'
          })
          .get();`,
        },
      },
      random: {
        description: '返回随机排序记录。',
        params: {},
        returntype: {
          description: '集合',
          type: 'Collection<T>',
        },
        example: {
          description: '`_id` 为 `xxx` 的记录随机排序记录',
          value: `await db
          .collection<T>('todos')
          .where({
            _id: 'xxx',
          })
          .random()
          .get();`,
        },
      },
      limit: {
        description: '指定查询结果集数量上限。',
        params: {
          limit: {
            description: '限制条数',
            type: 'number',
            defaultValue: '无',
            required: true,
          },
        },
        returntype: {
          description: '集合',
          type: 'Collection<T>',
        },
        example: {
          description: '限制最 5 条记录',
          value: `await db
          .collection<T>('todos')
          .where({
            _id: 'xxx',
          })
          .limit(5)
          .get();`,
        },
      },
      skip: {
        description:
          '指定查询返回结果时从指定序列后的结果开始返回，常用于分页。',
        params: {
          skip: {
            description: '跳过记录数',
            type: 'number',
            defaultValue: '0',
            required: true,
          },
        },
        returntype: {
          description: '集合',
          type: 'Collection<T>',
        },
        example: {
          description: '跳过 5 条记录',
          value: `await db
          .collection<T>('todos')
          .where({
            _id: 'xxx',
          })
          .skip(5)
          .get();`,
        },
      },
      count: {
        description: '统计匹配查询条件的记录的条数。',
        params: {},
        returntype: {
          description: '',
          type: 'Promise<QueryResult<number>>',
        },
        example: {
          description: '`_id` 为 `xxx` 的记录数',
          value: `await db
          .collection<T>('todos')
          .where({
            _id: 'xxx',
          })
          .count();`,
        },
      },

      get: {
        description: '获取集合数据，或获取根据查询条件筛选后的集合数据。',
        params: {},
        returntype: {
          description: '',
          type: 'Promise<QueryResult<RowData<T[] | []>>>',
        },
        example: {
          description: '获取 `_id` 为 `xxx` 的记录',
          value: `await db.collection<T>('todos').where({
            _id: 'xxx'
          }).get()`,
        },
      },
      add: {
        description:
          '新增记录，如果传入的记录对象没有 _id 字段，则由后台自动生成 _id；若指定了 _id，则不能与已有记录冲突。',
        params: {
          data: {
            description: '数据',
            type: 'RowData<T>',
            defaultValue: '无',
            required: true,
          },
        },
        returntype: {
          description: '执行结果',
          type: 'Promise<QueryResult<OkPacket>>',
        },
        example: {
          description: '新增记录 `price` 为 100',
          value: `await db.collection<T>('todos')
          .add({
            price:100
          })`,
        },
      },
      remove: {
        description:
          '删除多条记录。注意只支持通过匹配 where 语句来删除，不支持 skip 和 limit。',
        params: {},
        returntype: {
          description: '执行结果',
          type: 'Promise<QueryResult<OkPacket>>',
        },
        example: {
          description: '删除 `_id` 为 `xxx` 的记录',
          value: `await db
          .collection<T>('todos')
          .where({
            _id: 'xxx',
          })
          .remove();`,
        },
      },
      update: {
        description: '更新多条记录。',
        params: {
          data: {
            description: '',
            type: 'RowData<T>',
            defaultValue: '无',
            required: true,
          },
        },
        returntype: {
          description: '执行结果',
          type: 'Promise<QueryResult<OkPacket>>',
        },
        example: {
          description: '`done` 为 `true` 的记录的 `progress` 修改为 `100`',
          value: `await db.collection<T>('todos').where({
            done: false
          })
          .update({
              progress: 100
          })`,
        },
      },
      set: {
        description: '替换更新一条记录。',
        params: {
          data: {
            description: '替换更新的记录数据',
            type: 'RowData<T>',
            defaultValue: '无',
            required: true,
          },
        },
        returntype: {
          description: '执行结果',
          type: 'Promise<QueryResult<OkPacket>>',
        },
        example: {
          description: '`_id` 为 `xxx` 的记录 `price` 设置为 `100`',
          value: `await db.collection<T>('todos')
          .where({
            _id:'xxx'
          })
          .set({
            price:100
          })`,
        },
      },
      execSQL: {
        description: '直接执行 sql 语句。',
        params: {
          sql: {
            description: '需要执行的 sql 语句',
            type: 'string',
            defaultValue: '无',
            required: true,
          },
        },
        returntype: {
          description: '返回执行结果以及集合字段',
          type: 'Promise<{ results: any; fields: FieldInfo[]; }>',
        },
        example: {
          description: '执行 `sql` 语句',
          value: `await db.collection<T>('todos')
          .execSQL(sql)`,
        },
      },
    },
    types: {
      OkPacket: {
        description: '确认包',
        value: `type OkPacket = {
          fieldCount: number;
          affectedRows: number;
          insertId: number;
          serverStatus?: number;
          warningCount?: number;
          message: string;
          changedRows: number;
          protocol41: boolean;
        }`,
      },
      'RowData<T>': {
        description: '记录行数据',
        value: `type RowData<T> = { [P in keyof T]?: T[P] };`,
      },
      'Filter<T>': {
        description: '过滤字段，`true` 表示显示该字段，`false` 表示隐藏该字段',
        value: `{ [P in keyof T]?: boolean };`,
      },
      'Where<T>': {
        description: '筛选条件',
        value: `type Where<T> = {
        [P in keyof T]?: T[P]
          | WhereRegex
          | WhereLike
          | RegExp
          | Command
          | AggregateCommand<T>;
        }`,
      },
      'OrderBy<T>': {
        description:
          "排序方式：`''`、 `asc` 表示按字段顺序排序，`desc` 表示按字段逆序排序",
        value: `type OrderBy<T> = {
          [P in keyof T]?: 'asc' | 'desc' | '';
        }`,
      },
      'QueryResult<T>': {
        description: '执行结果',
        value: `type QueryResult<T> = {
        result: T;
        status: boolean;
        queryStatus: boolean;
       }`,
      },
      FieldInfo: {
        description: '字段信息',
        value: `interface FieldInfo{ 
        type: Types  
        catalog: string;
        db: string;
        table: string;
        orgTable: string;
        name: string;
        orgName: string;
        charsetNr: number;
        length: number;
        flags: number;
        decimals: number;
        default?: string | undefined;
        zeroFill: boolean;
        protocol41: boolean;
      }`,
      },
    },
  },
  'Aggregate<T>': {
    description: '数据库集合的聚合操作实例',
    props: {},
    methods: {
      addFields: {
        description:
          '添加新字段到输出的记录。经过 addFields 聚合阶段，输出的所有记录中除了输入时带有的字段外，还将带有 addFields 指定的字段。',
        params: {
          fields: {
            description: '新增字段',
            type: 'AggregateFields<T>',
            defaultValue: '无',
            required: true,
          },
        },
        returntype: {
          description: '聚合操作',
          type: 'Aggregate<T>',
        },
        example: {
          description:
            '新增 `totalHomework` 字段为 `homework` 字段求和，新增 `totalQuiz` 字段为 `quiz` 字段求和',
          value: `const $ = db.command.aggregate
          await db.collection<T>('scores').aggregate()
          .addFields({
            totalHomework: $.sum('$homework'),
            totalQuiz: $.sum('$quiz')
          })
          .end()`,
        },
      },
      count: {
        description:
          '计算上一聚合阶段输入到本阶段的记录数，输出一个记录，其中指定字段的值为记录数。',
        params: {
          fieldName: {
            description: '字段名',
            type: 'string',
            defaultValue: '无',
            required: true,
          },
        },
        returntype: {
          description: '聚合操作',
          type: 'Aggregate<T>',
        },
        example: {
          description: '',
          value: ``,
        },
      },
      end: {
        description: '标志聚合操作定义完成，发起实际聚合操作。',
        params: {},
        returntype: {
          description: '聚合操作',
          type: 'Aggregate<T>',
        },
        example: {
          description:
            '按 `category` 字段分组，`avgSales` 字段是组内所有记录的 `sales` 字段的平均值',
          value: `const $ = db.command.aggregate
          await db.collection<T>('books').aggregate()
          .group({
            _id: '$category',
            avgSales: $.avg('$sales')
          })
          .end()`,
        },
      },
      group: {
        description:
          '计算上一聚合阶段输入到本阶段的记录数，输出一个记录，其中指定字段的值为记录数。',
        params: {
          group: {
            description: '分组',
            type: 'AggregateGroup<T>',
            defaultValue: '无',
            required: true,
          },
        },
        returntype: {
          description: '聚合操作',
          type: 'Aggregate<T>',
        },
        example: {
          description: '`alias` 字段为 `_id` 字段，数量求和为 `num` 字段',
          value: `const $ = db.command.aggregate()
          await db.collection<T>('avatar').aggregate()
          .group({
            _id: '$alias',
            num: $.sum(1)
          })
          .end()`,
        },
      },
      limit: {
        description: '限制输出到下一阶段的记录数。',
        params: {
          limit: {
            description: '限制记录数',
            type: 'number',
            defaultValue: '无',
            required: true,
          },
        },
        returntype: {
          description: '聚合操作',
          type: 'Aggregate<T>',
        },
        example: {
          description: '限制 2 条记录',
          value: `await db.collection<T>('items').aggregate()
          .limit(2)
          .end()`,
        },
      },
      match: {
        description:
          '根据条件过滤文档，并且把符合条件的文档传递给下一个流水线阶段。',
        params: {
          fields: {
            description: '限制记录数',
            type: 'AggregateMatch<T>',
            defaultValue: '无',
            required: true,
          },
        },
        returntype: {
          description: '聚合操作',
          type: 'Aggregate<T>',
        },
        example: {
          description: '`author` 为 stark，`age` 大于 18',
          value: `const _ = db.command
          await db.collection<T>('articles').aggregate()
          .match({
            author: 'stark',
            age: _.gt(18)
          })`,
        },
      },
      project: {
        description:
          '把指定的字段传递给下一个流水线，指定的字段可以是某个已经存在的字段，也可以是计算出来的新字段。',
        params: {
          project: {
            description: '项目字段处理',
            type: 'AggregateProject<T>',
            defaultValue: '无',
            required: true,
          },
        },
        returntype: {
          description: '聚合操作',
          type: 'Aggregate<T>',
        },
        example: {
          description: '显示 `title` 字段，隐藏 `author` 字段',
          value: `await db.collection<T>('articles')
          .aggregate()
          .project({
            title: true,
            author: false
          })
          .end()`,
        },
      },
      skip: {
        description: '指定一个正整数，跳过对应数量的文档，输出剩下的文档。',
        params: {
          skip: {
            description: '跳过记录数',
            type: 'number',
            defaultValue: '无',
            required: true,
          },
        },
        returntype: {
          description: '聚合操作',
          type: 'Aggregate<T>',
        },
        example: {
          description: '跳过 5 条记录',
          value: `await db.collection<T>('users')
          .aggregate()
          .skip(5)
          .end()`,
        },
      },
      sort: {
        description: '根据指定的字段，对输入的文档进行排序。',
        params: {
          skip: {
            description: '跳过记录数',
            type: 'number',
            defaultValue: '无',
            required: true,
          },
        },
        returntype: {
          description: '聚合操作',
          type: 'Aggregate<T>',
        },
        example: {
          description: '按 `age` 字段顺序排列，按 `score` 字段逆序排列',
          value: `await db.collection<T>('articles')
          .aggregate()
          .sort({
            age: 'asc',
            score: 'desc'
          })
          .end()`,
        },
      },
    },
    example: {
      description: '',
      value: '',
    },
    types: {
      'AggregateProject<T>': {
        description: '项目',
        value: `type AggregateProject<T> = {
          [key: string]: boolean | AggregateKey | AggregateCommand<T>;
        };`,
      },
      'AggregateGroup<T>': {
        description: '分组',
        value: `type AggregateGroup<T> = {
            [key: string]: AggregateBaseParamType<T, string | number>;
          };`,
      },
      'AggregateFilter<T>': {
        description: '过滤字段',
        value: `Filter<T>`,
      },
      'AggregateFields<T>': {
        description: '字段',
        value: `type AggregateFields<T> = {
          [key: string]: AggregateCommand<T> | AggregateKey;
        };`,
      },
      'AggregateSort<T>': {
        description: '排序',
        value: `OrderBy<T>`,
      },
      'AggregateMatch<T>': {
        description: '筛选字段',
        value: `type AggregateMatch<T> = {
          [P in keyof T]?: RegExp | T[P] | Command | string | null | number | boolean;
        };`,
      },
    },
  },
  Transaction: {
    description: '数据库事务操作对象',
    props: {},
    methods: {
      commit: {
        description: '提交事务',
        params: {
          reason: {
            description: '提交原因',
            type: 'any',
            defaultValue: '无',
            required: false,
          },
        },
        returntype: {
          description: '',
          type: 'Promise<void>',
        },
        example: {
          description: '',
          value: '',
        },
      },
      rollback: {
        description: '回滚事务',
        params: {
          reason: {
            description: '回滚原因',
            type: 'any',
            defaultValue: '无',
            required: false,
          },
        },
        returntype: {
          description: '',
          type: 'Promise<void>',
        },
        example: {
          description: '',
          value: '',
        },
      },
      'collection<T>': {
        description: '集合',
        params: {
          name: {
            description: '集合名',
            type: 'string',
            defaultValue: '无',
            required: false,
          },
        },
        returntype: {
          description: '集合实例',
          type: 'Collection<T>',
        },
        example: {
          description: '',
          value: `const collection = Transaction.collection<T>('todos')`,
        },
      },
    },
    example: {
      description: '',
      value: ``,
    },
    types: {},
  },
  Command: {
    description: '数据库操作符，通过 `db.command` 获取',
    props: {},
    methods: {
      'aggregate<T>': {
        description: '聚合操作',
        params: {},
        returntype: {
          description: '聚合操作',
          type: 'AggregateCommand<T>',
        },
      },
      and: {
        description: '逻辑操作符 且',
        params: {
          value: {
            description: '混合参数类型或混合参数类型数组',
            type: 'CommandMixParamType | CommandMixParamType[]',
            defaultValue: '',
            required: true,
          },
          '...rest': {
            description: '混合参数类型',
            type: 'CommandMixParamType[]',
            defaultValue: '',
            required: true,
          },
        },
        returntype: {
          description: '命令操作',
          type: 'Command',
        },
      },
      or: {
        description: '逻辑操作符 或',
        params: {
          value: {
            description: '混合参数类型或混合参数类型数组',
            type: 'CommandMixParamType | CommandMixParamType[]',
            defaultValue: '',
            required: true,
          },
          '...rest': {
            description: '混合参数类型数组',
            type: 'CommandMixParamType[]',
            defaultValue: '',
            required: true,
          },
        },
        returntype: {
          description: '命令操作',
          type: 'Command',
        },
      },
      not: {
        description: '逻辑操作符 非',
        params: {
          value: {
            description: '',
            type: 'Command',
            defaultValue: '',
            required: true,
          },
        },
        returntype: {
          description: '命令操作',
          type: 'Command',
        },
      },
      nor: {
        description: '逻辑操作符 或',
        params: {
          value: {
            description: '混合参数类型或混合参数类型数组',
            type: 'CommandMixParamType | CommandMixParamType[]',
            defaultValue: '',
            required: true,
          },
          '...rest': {
            description: '混合参数类型数组',
            type: 'CommandMixParamType[]',
            defaultValue: '',
            required: true,
          },
        },
        returntype: {
          description: '命令操作',
          type: 'Command',
        },
      },
      nand: {
        description: '逻辑操作符 或',
        params: {
          value: {
            description: '混合参数类型或混合参数类型数组',
            type: 'CommandMixParamType | CommandMixParamType[]',
            defaultValue: '',
            required: true,
          },
          '...rest': {
            description: '混合参数类型数组',
            type: 'CommandMixParamType[]',
            defaultValue: '',
            required: true,
          },
        },
        returntype: {
          description: '命令操作',
          type: 'Command',
        },
      },
      eq: {
        description: '逻辑操作符 等于',
        params: {
          value: {
            description: '混合参数类型',
            type: 'CommandMixParamType',
            defaultValue: '',
            required: true,
          },
        },
        returntype: {
          description: '命令操作',
          type: 'Command',
        },
      },
      neq: {
        description: '逻辑操作符 不等于',
        params: {
          value: {
            description: '混合参数类型',
            type: 'CommandMixParamType',
            defaultValue: '',
            required: true,
          },
        },
        returntype: {
          description: '命令操作',
          type: 'Command',
        },
      },
      lt: {
        description: '逻辑操作符 小于',
        params: {
          value: {
            description: '混合参数类型',
            type: 'CommandMixParamType',
            defaultValue: '',
            required: true,
          },
        },
        returntype: {
          description: '命令操作',
          type: 'Command',
        },
      },
      lte: {
        description: '逻辑操作符 小于等于',
        params: {
          value: {
            description: '混合参数类型',
            type: 'CommandMixParamType',
            defaultValue: '',
            required: true,
          },
        },
        returntype: {
          description: '命令操作',
          type: 'Command',
        },
      },
      gt: {
        description: '逻辑操作符 大于',
        params: {
          value: {
            description: '混合参数类型',
            type: 'CommandMixParamType',
            defaultValue: '',
            required: true,
          },
        },
        returntype: {
          description: '命令操作',
          type: 'Command',
        },
      },
      gte: {
        description: '逻辑操作符 大于等于',
        params: {
          value: {
            description: '混合参数类型',
            type: 'CommandMixParamType',
            defaultValue: '',
            required: true,
          },
        },
        returntype: {
          description: '命令操作',
          type: 'Command',
        },
      },
      in: {
        description: '筛选操作符 筛选在给定的数组内',
        params: {
          value: {
            description: '混合参数类型或混合参数类型数组',
            type: 'CommandMixParamType | CommandMixParamType[]',
            defaultValue: '',
            required: true,
          },
          '...rest': {
            description: '混合参数类型数组',
            type: 'CommandMixParamType[]',
            defaultValue: '',
            required: true,
          },
        },
        returntype: {
          description: '命令操作',
          type: 'Command',
        },
      },
      nin: {
        description: '筛选操作符 筛选不在给定的数组内',
        params: {
          value: {
            description: '混合参数类型或混合参数类型数组',
            type: 'CommandMixParamType | CommandMixParamType[]',
            defaultValue: '',
            required: true,
          },
          '...rest': {
            description: '混合参数类型数组',
            type: 'CommandMixParamType[]',
            defaultValue: '',
            required: true,
          },
        },
        returntype: {
          description: '命令操作',
          type: 'Command',
        },
      },
    },
    example: {
      description: '',
      value: '',
    },
    types: {
      CommandMixParamType:{
        description:'混合参数类型',
        value:`Command | string | number | null`
      }
    },
  },
  // AggregateCommand: {
  //   description: '',
  // },
};

export default markdownData;
