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
      value: `  const db = database(
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
          value: `const todosCollection = db.collection('todos');`,
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
          type: 'Promise',
        },
        example: {
          description: '',
          value: `const todosCollection = await db.createCollection('todos');`,
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
          db.collection('todos').where({
            description: /miniprogram/i
          })
          
          // 数据库正则对象
          db.collection('todos').where({
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
          description: '',
          value: `const result = await db.runTransaction(async (transaction) => {
            const aaaRes = await transaction.collection('account').get();
            const bbbRes = await transaction.collection('account').get();
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
          description: '',
          type: 'Promise<Transaction>',
        },
        example: {
          description: '',
          value: '',
        },
      },
    },
  },
  'Collection<T>': {
    description: '数据库集合',
    example: {
      description: '',
      value: '',
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
          description: '',
          value: '',
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
          description: '',
          value: '',
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
          description: '',
          value: '',
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
          description: '',
          value: '',
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
          description: '',
          value: '',
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
          description: '',
          value: '',
        },
      },
      skip: {
        description:
          '指定查询返回结果时从指定序列后的结果开始返回，常用于分页。',
        params: {
          skip: {
            description: '跳过记录数',
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
          description: '',
          value: '',
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
          description: '',
          value: '',
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
          description: '',
          value: '',
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
          description: '',
          value: '',
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
          description: '',
          value: '',
        },
      },
      update: {
        description:
          '删除多条记录。注意只支持通过匹配 where 语句来删除，不支持 skip 和 limit。',
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
          description: '',
          value: '',
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
          description: '',
          value: '',
        },
      },
      exexSQL: {
        description: '直接执行 `sql` 语句。',
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
          description: '',
          value: '',
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
};

export default markdownData;
