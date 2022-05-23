### <span id="Database">Database</span>

MySQL 数据库实例

#### 属性

- command: Command

  数据库操作符

#### 方法

- [Database.collection&lt;T>](#Database_collection<T> "获取集合。方法接受一个 name 参数，指定需引用的集合名称。")(name: string): [Collection&lt;T>](#Collection&lt;T> "数据库集合")

  获取集合。方法接受一个 name 参数，指定需引用的集合名称。

- [Database.createCollection](#Database_createCollection "创建集合。如果集合已经存在会创建失败。")(name: string): Promise

  创建集合。如果集合已经存在会创建失败。

- [Database.RegExp](#Database_RegExp "构造正则表达式。")(regexp: DatabeseRegExpLike | RegExp): DatabeseRegExp

  构造正则表达式。

- [Database.runTransaction](#Database_runTransaction "发起事务")(callback: (transation: Transaction) => any): Promise&lt;any>

  发起事务

- [Database.startTransaction](#Database_startTransaction "开始事务。另一个同样可以使用的发起事务的 API 是 runTransaction。")(): Promise&lt;Transaction>

  开始事务。另一个同样可以使用的发起事务的 API 是 runTransaction。

#### 示例

- 初始化 MySQL 数据库

  ```javascript
    const db = database(
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
    );
  ```

### <span id="Database_command">[Database](#Database "MySQL 数据库实例").command</span>: Command

数据库操作符

#### 示例

```javascript
const _ = db.command;
```

### <span id="Database_collection<T>">[Database](#Database "MySQL 数据库实例").collection<T>(name: string)</span>: [Collection&lt;T>](#Collection&lt;T> "数据库集合")

获取集合。方法接受一个 name 参数，指定需引用的集合名称。

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| name	| string	| 无	| 是	| 集合名 |

#### 返回值

- [Collection&lt;T>](#Collection&lt;T> "数据库集合") 集合

#### 示例

```javascript
const todosCollection = db.collection('todos');
```

### <span id="Database_createCollection">[Database](#Database "MySQL 数据库实例").createCollection(name: string)</span>: Promise

创建集合。如果集合已经存在会创建失败。

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| name	| string	| 无	| 是	| 集合名 |

#### 返回值

- Promise 无

#### 示例

```javascript
const todosCollection = await db.createCollection('todos');
```

### <span id="Database_RegExp">[Database](#Database "MySQL 数据库实例").RegExp(regexp: DatabeseRegExpLike | RegExp)</span>: DatabeseRegExp

构造正则表达式。

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| regexp	| DatabeseRegExpLike | RegExp	| 无	| 是	| 正则配置或正则表达式 |

#### 返回值

- DatabeseRegExp 数据库正则对象

#### 示例

```javascript
// 原生 JavaScript 对象
db.collection('todos').where({
    description: /miniprogram/i
})

// 数据库正则对象
db.collection('todos').where({
    description: db.RegExp({
        regexp: 'miniprogram',
        options: 'i',
    })
})
```

### <span id="Database_runTransaction">[Database](#Database "MySQL 数据库实例").runTransaction(callback: (transation: Transaction) => any)</span>: Promise&lt;any>

发起事务

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| callback	| (transation: Transaction) => any	| 无	| 是	| 事务执行函数，需为 async 异步函数或返回 Promise 的函数 |

#### 返回值

- Promise&lt;any> Promise<any>

#### 示例

```javascript
const result = await db.runTransaction(async (transaction) => {
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
});
```

### <span id="Database_startTransaction">[Database](#Database "MySQL 数据库实例").startTransaction()</span>: Promise&lt;Transaction>

开始事务。另一个同样可以使用的发起事务的 API 是 runTransaction。

#### 返回值

- Promise&lt;Transaction> 

### <span id="Collection<T>">Collection&lt;T></span>

数据库集合

#### 方法

- [Collection&lt;T>.aggregate](#Collection<T>_aggregate "发起聚合操作，定义完聚合流水线阶段之后需调用 end 方法标志结束定义并实际发起聚合操作。")(): Aggregate&lt;T>

  发起聚合操作，定义完聚合流水线阶段之后需调用 end 方法标志结束定义并实际发起聚合操作。

- [Collection&lt;T>.field](#Collection<T>_field "指定返回结果中记录需返回的字段。")(filter: [Filter](#Filter&lt;T> "过滤字段，`true` 表示显示该字段，`false` 表示隐藏该字段")&lt;T>): [Collection&lt;T>](#Collection&lt;T> "数据库集合")

  指定返回结果中记录需返回的字段。

- [Collection&lt;T>.where](#Collection<T>_where "指定查询条件，返回带新查询条件的新的集合。")(where: [Where](#Where&lt;T> "筛选条件")&lt;T>): [Collection&lt;T>](#Collection&lt;T> "数据库集合")

  指定查询条件，返回带新查询条件的新的集合。

- [Collection&lt;T>.orderBy](#Collection<T>_orderBy "指定查询结果集数量上限。")(orderBy: [OrderBy](#OrderBy&lt;T> "排序方式：`''`、 `asc` 表示按字段顺序排序，`desc` 表示按字段逆序排序")&lt;T>): [Collection&lt;T>](#Collection&lt;T> "数据库集合")

  指定查询结果集数量上限。

- [Collection&lt;T>.random](#Collection<T>_random "返回随机排序记录。")(): [Collection&lt;T>](#Collection&lt;T> "数据库集合")

  返回随机排序记录。

- [Collection&lt;T>.limit](#Collection<T>_limit "指定查询结果集数量上限。")(limit: number): [Collection&lt;T>](#Collection&lt;T> "数据库集合")

  指定查询结果集数量上限。

- [Collection&lt;T>.skip](#Collection<T>_skip "指定查询返回结果时从指定序列后的结果开始返回，常用于分页。")(skip: number): [Collection&lt;T>](#Collection&lt;T> "数据库集合")

  指定查询返回结果时从指定序列后的结果开始返回，常用于分页。

- [Collection&lt;T>.count](#Collection<T>_count "统计匹配查询条件的记录的条数。")(): Promise&lt;[QueryResult](#QueryResult&lt;T> "执行结果")&lt;number>>

  统计匹配查询条件的记录的条数。

- [Collection&lt;T>.get](#Collection<T>_get "获取集合数据，或获取根据查询条件筛选后的集合数据。")(): Promise&lt;[QueryResult](#QueryResult&lt;T> "执行结果")&lt;[RowData](#RowData&lt;T> "记录行数据")&lt;T[] | []>>>

  获取集合数据，或获取根据查询条件筛选后的集合数据。

- [Collection&lt;T>.add](#Collection<T>_add "新增记录，如果传入的记录对象没有 _id 字段，则由后台自动生成 _id；若指定了 _id，则不能与已有记录冲突。")(data: [RowData](#RowData&lt;T> "记录行数据")&lt;T>): Promise&lt;[QueryResult](#QueryResult&lt;T> "执行结果")&lt;[OkPacket](#OkPacket "确认包")>>

  新增记录，如果传入的记录对象没有 _id 字段，则由后台自动生成 _id；若指定了 _id，则不能与已有记录冲突。

- [Collection&lt;T>.remove](#Collection<T>_remove "删除多条记录。注意只支持通过匹配 where 语句来删除，不支持 skip 和 limit。")(): Promise&lt;[QueryResult](#QueryResult&lt;T> "执行结果")&lt;[OkPacket](#OkPacket "确认包")>>

  删除多条记录。注意只支持通过匹配 where 语句来删除，不支持 skip 和 limit。

- [Collection&lt;T>.update](#Collection<T>_update "删除多条记录。注意只支持通过匹配 where 语句来删除，不支持 skip 和 limit。")(data: [RowData](#RowData&lt;T> "记录行数据")&lt;T>): Promise&lt;[QueryResult](#QueryResult&lt;T> "执行结果")&lt;[OkPacket](#OkPacket "确认包")>>

  删除多条记录。注意只支持通过匹配 where 语句来删除，不支持 skip 和 limit。

- [Collection&lt;T>.set](#Collection<T>_set "替换更新一条记录。")(data: [RowData](#RowData&lt;T> "记录行数据")&lt;T>): Promise&lt;[QueryResult](#QueryResult&lt;T> "执行结果")&lt;[OkPacket](#OkPacket "确认包")>>

  替换更新一条记录。

- [Collection&lt;T>.exexSQL](#Collection<T>_exexSQL "直接执行 `sql` 语句。")(sql: string): Promise&lt;{ results: any; fields: [FieldInfo](#FieldInfo "字段信息")[]; }>

  直接执行 `sql` 语句。

#### 类型定义

- <span id="OkPacket">OkPacket</span>

  确认包

  ```typescript
  type OkPacket = {
      fieldCount: number;
      affectedRows: number;
      insertId: number;
      serverStatus ? : number;
      warningCount ? : number;
      message: string;
      changedRows: number;
      protocol41: boolean;
  }
  ```

- <span id="RowData<T>">RowData&lt;T></span>

  记录行数据

  ```typescript
  type RowData < T > = {
      [P in keyof T] ? : T[P]
  };
  ```

- <span id="Filter<T>">Filter&lt;T></span>

  过滤字段，`true` 表示显示该字段，`false` 表示隐藏该字段

  ```typescript
  {
      [P in keyof T] ? : boolean
  };
  ```

- <span id="Where<T>">Where&lt;T></span>

  筛选条件

  ```typescript
  type Where < T > = {
      [P in keyof T] ? : T[P] |
          WhereRegex |
          WhereLike |
          RegExp |
          Command |
          AggregateCommand < T > ;
  }
  ```

- <span id="OrderBy<T>">OrderBy&lt;T></span>

  排序方式：`''`、 `asc` 表示按字段顺序排序，`desc` 表示按字段逆序排序

  ```typescript
  type OrderBy < T > = {
      [P in keyof T] ? : 'asc' | 'desc' | '';
  }
  ```

- <span id="QueryResult<T>">QueryResult&lt;T></span>

  执行结果

  ```typescript
  type QueryResult < T > = {
      result: T;
      status: boolean;
      queryStatus: boolean;
  }
  ```

- <span id="FieldInfo">FieldInfo</span>

  字段信息

  ```typescript
  interface FieldInfo {
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
      default ? : string | undefined;
      zeroFill: boolean;
      protocol41: boolean;
  }
  ```

### <span id="Collection<T>_aggregate">[Collection&lt;T>](#Collection&lt;T> "数据库集合").aggregate()</span>: Aggregate&lt;T>

发起聚合操作，定义完聚合流水线阶段之后需调用 end 方法标志结束定义并实际发起聚合操作。

#### 返回值

- Aggregate&lt;T> 聚合操作

### <span id="Collection<T>_field">[Collection&lt;T>](#Collection&lt;T> "数据库集合").field(filter: [Filter](#Filter&lt;T> "过滤字段，`true` 表示显示该字段，`false` 表示隐藏该字段")&lt;T>)</span>: [Collection&lt;T>](#Collection&lt;T> "数据库集合")

指定返回结果中记录需返回的字段。

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| filter	| [Filter](#Filter&lt;T> "过滤字段，`true` 表示显示该字段，`false` 表示隐藏该字段")&lt;T>	| 无	| 是	| 筛选字段 |

#### 返回值

- [Collection&lt;T>](#Collection&lt;T> "数据库集合") 集合

### <span id="Collection<T>_where">[Collection&lt;T>](#Collection&lt;T> "数据库集合").where(where: [Where](#Where&lt;T> "筛选条件")&lt;T>)</span>: [Collection&lt;T>](#Collection&lt;T> "数据库集合")

指定查询条件，返回带新查询条件的新的集合。

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| where	| [Where](#Where&lt;T> "筛选条件")&lt;T>	| 无	| 是	| 筛选字段 |

#### 返回值

- [Collection&lt;T>](#Collection&lt;T> "数据库集合") 集合

### <span id="Collection<T>_orderBy">[Collection&lt;T>](#Collection&lt;T> "数据库集合").orderBy(orderBy: [OrderBy](#OrderBy&lt;T> "排序方式：`''`、 `asc` 表示按字段顺序排序，`desc` 表示按字段逆序排序")&lt;T>)</span>: [Collection&lt;T>](#Collection&lt;T> "数据库集合")

指定查询结果集数量上限。

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| orderBy	| [OrderBy](#OrderBy&lt;T> "排序方式：`''`、 `asc` 表示按字段顺序排序，`desc` 表示按字段逆序排序")&lt;T>	| 无	| 是	| 排序方式 |

#### 返回值

- [Collection&lt;T>](#Collection&lt;T> "数据库集合") 集合

### <span id="Collection<T>_random">[Collection&lt;T>](#Collection&lt;T> "数据库集合").random()</span>: [Collection&lt;T>](#Collection&lt;T> "数据库集合")

返回随机排序记录。

#### 返回值

- [Collection&lt;T>](#Collection&lt;T> "数据库集合") 集合

### <span id="Collection<T>_limit">[Collection&lt;T>](#Collection&lt;T> "数据库集合").limit(limit: number)</span>: [Collection&lt;T>](#Collection&lt;T> "数据库集合")

指定查询结果集数量上限。

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| limit	| number	| 无	| 是	| 限制条数 |

#### 返回值

- [Collection&lt;T>](#Collection&lt;T> "数据库集合") 集合

### <span id="Collection<T>_skip">[Collection&lt;T>](#Collection&lt;T> "数据库集合").skip(skip: number)</span>: [Collection&lt;T>](#Collection&lt;T> "数据库集合")

指定查询返回结果时从指定序列后的结果开始返回，常用于分页。

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| skip	| number	| 无	| 是	| 跳过记录数 |

#### 返回值

- [Collection&lt;T>](#Collection&lt;T> "数据库集合") 集合

### <span id="Collection<T>_count">[Collection&lt;T>](#Collection&lt;T> "数据库集合").count()</span>: Promise&lt;[QueryResult](#QueryResult&lt;T> "执行结果")&lt;number>>

统计匹配查询条件的记录的条数。

#### 返回值

- Promise&lt;[QueryResult](#QueryResult&lt;T> "执行结果")&lt;number>> 

### <span id="Collection<T>_get">[Collection&lt;T>](#Collection&lt;T> "数据库集合").get()</span>: Promise&lt;[QueryResult](#QueryResult&lt;T> "执行结果")&lt;[RowData](#RowData&lt;T> "记录行数据")&lt;T[] | []>>>

获取集合数据，或获取根据查询条件筛选后的集合数据。

#### 返回值

- Promise&lt;[QueryResult](#QueryResult&lt;T> "执行结果")&lt;[RowData](#RowData&lt;T> "记录行数据")&lt;T[] | []>>> 

### <span id="Collection<T>_add">[Collection&lt;T>](#Collection&lt;T> "数据库集合").add(data: [RowData](#RowData&lt;T> "记录行数据")&lt;T>)</span>: Promise&lt;[QueryResult](#QueryResult&lt;T> "执行结果")&lt;[OkPacket](#OkPacket "确认包")>>

新增记录，如果传入的记录对象没有 _id 字段，则由后台自动生成 _id；若指定了 _id，则不能与已有记录冲突。

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| data	| [RowData](#RowData&lt;T> "记录行数据")&lt;T>	| 无	| 是	| 数据 |

#### 返回值

- Promise&lt;[QueryResult](#QueryResult&lt;T> "执行结果")&lt;[OkPacket](#OkPacket "确认包")>> 执行结果

### <span id="Collection<T>_remove">[Collection&lt;T>](#Collection&lt;T> "数据库集合").remove()</span>: Promise&lt;[QueryResult](#QueryResult&lt;T> "执行结果")&lt;[OkPacket](#OkPacket "确认包")>>

删除多条记录。注意只支持通过匹配 where 语句来删除，不支持 skip 和 limit。

#### 返回值

- Promise&lt;[QueryResult](#QueryResult&lt;T> "执行结果")&lt;[OkPacket](#OkPacket "确认包")>> 执行结果

### <span id="Collection<T>_update">[Collection&lt;T>](#Collection&lt;T> "数据库集合").update(data: [RowData](#RowData&lt;T> "记录行数据")&lt;T>)</span>: Promise&lt;[QueryResult](#QueryResult&lt;T> "执行结果")&lt;[OkPacket](#OkPacket "确认包")>>

删除多条记录。注意只支持通过匹配 where 语句来删除，不支持 skip 和 limit。

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| data	| [RowData](#RowData&lt;T> "记录行数据")&lt;T>	| 无	| 是	|  |

#### 返回值

- Promise&lt;[QueryResult](#QueryResult&lt;T> "执行结果")&lt;[OkPacket](#OkPacket "确认包")>> 执行结果

### <span id="Collection<T>_set">[Collection&lt;T>](#Collection&lt;T> "数据库集合").set(data: [RowData](#RowData&lt;T> "记录行数据")&lt;T>)</span>: Promise&lt;[QueryResult](#QueryResult&lt;T> "执行结果")&lt;[OkPacket](#OkPacket "确认包")>>

替换更新一条记录。

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| data	| [RowData](#RowData&lt;T> "记录行数据")&lt;T>	| 无	| 是	| 替换更新的记录数据 |

#### 返回值

- Promise&lt;[QueryResult](#QueryResult&lt;T> "执行结果")&lt;[OkPacket](#OkPacket "确认包")>> 执行结果

### <span id="Collection<T>_exexSQL">[Collection&lt;T>](#Collection&lt;T> "数据库集合").exexSQL(sql: string)</span>: Promise&lt;{ results: any; fields: [FieldInfo](#FieldInfo "字段信息")[]; }>

直接执行 `sql` 语句。

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| sql	| string	| 无	| 是	| 需要执行的 sql 语句 |

#### 返回值

- Promise&lt;{ results: any; fields: [FieldInfo](#FieldInfo "字段信息")[]; }> 返回执行结果以及集合字段