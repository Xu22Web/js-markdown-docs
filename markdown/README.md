### <span id="Database">Database</span>

MySQL 数据库实例

### <span id="Database_command">[Database](#Database "MySQL 数据库实例").command</span>: [Command](#Command "数据库操作符，通过 `db.command` 获取")

数据库操作符

#### 方法

- [Command.aggregate&lt;T&gt;](#Command_aggregate<T> "聚合操作")(): AggregateCommand&lt;T&gt;

  聚合操作

- [Command.and](#Command_and "逻辑操作符 且")(value: [CommandMixParamType](#CommandMixParamType "混合参数类型") &#124; [CommandMixParamType](#CommandMixParamType "混合参数类型")[], ...rest: [CommandMixParamType](#CommandMixParamType "混合参数类型")[]): [Command](#Command "数据库操作符，通过 `db.command` 获取")

  逻辑操作符 且

- [Command.or](#Command_or "逻辑操作符 或")(value: [CommandMixParamType](#CommandMixParamType "混合参数类型") &#124; [CommandMixParamType](#CommandMixParamType "混合参数类型")[], ...rest: [CommandMixParamType](#CommandMixParamType "混合参数类型")[]): [Command](#Command "数据库操作符，通过 `db.command` 获取")

  逻辑操作符 或

- [Command.not](#Command_not "逻辑操作符 非")(value: [Command](#Command "数据库操作符，通过 `db.command` 获取")): [Command](#Command "数据库操作符，通过 `db.command` 获取")

  逻辑操作符 非

- [Command.nor](#Command_nor "逻辑操作符 或")(value: [CommandMixParamType](#CommandMixParamType "混合参数类型") &#124; [CommandMixParamType](#CommandMixParamType "混合参数类型")[], ...rest: [CommandMixParamType](#CommandMixParamType "混合参数类型")[]): [Command](#Command "数据库操作符，通过 `db.command` 获取")

  逻辑操作符 或

- [Command.nand](#Command_nand "逻辑操作符 或")(value: [CommandMixParamType](#CommandMixParamType "混合参数类型") &#124; [CommandMixParamType](#CommandMixParamType "混合参数类型")[], ...rest: [CommandMixParamType](#CommandMixParamType "混合参数类型")[]): [Command](#Command "数据库操作符，通过 `db.command` 获取")

  逻辑操作符 或

- [Command.eq](#Command_eq "逻辑操作符 等于")(value: [CommandMixParamType](#CommandMixParamType "混合参数类型")): [Command](#Command "数据库操作符，通过 `db.command` 获取")

  逻辑操作符 等于

- [Command.neq](#Command_neq "逻辑操作符 不等于")(value: [CommandMixParamType](#CommandMixParamType "混合参数类型")): [Command](#Command "数据库操作符，通过 `db.command` 获取")

  逻辑操作符 不等于

- [Command.lt](#Command_lt "逻辑操作符 小于")(value: [CommandMixParamType](#CommandMixParamType "混合参数类型")): [Command](#Command "数据库操作符，通过 `db.command` 获取")

  逻辑操作符 小于

- [Command.lte](#Command_lte "逻辑操作符 小于等于")(value: [CommandMixParamType](#CommandMixParamType "混合参数类型")): [Command](#Command "数据库操作符，通过 `db.command` 获取")

  逻辑操作符 小于等于

- [Command.gt](#Command_gt "逻辑操作符 大于")(value: [CommandMixParamType](#CommandMixParamType "混合参数类型")): [Command](#Command "数据库操作符，通过 `db.command` 获取")

  逻辑操作符 大于

- [Command.gte](#Command_gte "逻辑操作符 大于等于")(value: [CommandMixParamType](#CommandMixParamType "混合参数类型")): [Command](#Command "数据库操作符，通过 `db.command` 获取")

  逻辑操作符 大于等于

- [Command.in](#Command_in "筛选操作符 筛选在给定的数组内")(value: [CommandMixParamType](#CommandMixParamType "混合参数类型") &#124; [CommandMixParamType](#CommandMixParamType "混合参数类型")[], ...rest: [CommandMixParamType](#CommandMixParamType "混合参数类型")[]): [Command](#Command "数据库操作符，通过 `db.command` 获取")

  筛选操作符 筛选在给定的数组内

- [Command.nin](#Command_nin "筛选操作符 筛选不在给定的数组内")(value: [CommandMixParamType](#CommandMixParamType "混合参数类型") &#124; [CommandMixParamType](#CommandMixParamType "混合参数类型")[], ...rest: [CommandMixParamType](#CommandMixParamType "混合参数类型")[]): [Command](#Command "数据库操作符，通过 `db.command` 获取")

  筛选操作符 筛选不在给定的数组内

#### 类型定义

- <span id="CommandMixParamType">CommandMixParamType</span>

  混合参数类型

  ```typescript
  Command | string | number | null
  ```

#### 示例

```javascript
const _ = db.command;
```

### <span id="Database_collection<T>">[Database](#Database "MySQL 数据库实例").collection&lt;T&gt;(name: string)</span>: [Collection&lt;T&gt;](#Collection&lt;T&gt; "数据库集合")

获取集合。方法接受一个 name 参数，指定需引用的集合名称。

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| name	| string	| 无	| 是	| 集合名 |

#### 返回值

- [Collection&lt;T&gt;](#Collection&lt;T&gt; "数据库集合") 集合

#### 示例

```javascript
const todosCollection = db.collection < T > ('todos');
```

### <span id="Database_createCollection">[Database](#Database "MySQL 数据库实例").createCollection(name: string)</span>: Promise&lt;&gt;

创建集合。如果集合已经存在会创建失败。

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| name	| string	| 无	| 是	| 集合名 |

#### 返回值

- Promise&lt;&gt; 无

#### 示例

```javascript
const todosCollection = await db.createCollection < T > ('todos');
```

### <span id="Database_RegExp">[Database](#Database "MySQL 数据库实例").RegExp(regexp: DatabeseRegExpLike &#124; RegExp)</span>: DatabeseRegExp

构造正则表达式。

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| regexp	| DatabeseRegExpLike &#124; RegExp	| 无	| 是	| 正则配置或正则表达式 |

#### 返回值

- DatabeseRegExp 数据库正则对象

#### 示例

```javascript
// 原生 JavaScript 对象
db.collection < T > ('todos').where({
    description: /miniprogram/i
})

// 数据库正则对象
db.collection < T > ('todos').where({
    description: db.RegExp({
        regexp: 'miniprogram',
        options: 'i',
    })
})
```

### <span id="Database_runTransaction">[Database](#Database "MySQL 数据库实例").runTransaction(callback: (transation: [Transaction](#Transaction "数据库事务操作对象")) =&gt; any)</span>: Promise&lt;any&gt;

发起事务

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| callback	| (transation: [Transaction](#Transaction "数据库事务操作对象")) =&gt; any	| 无	| 是	| 事务执行函数，需为 async 异步函数或返回 Promise 的函数 |

#### 返回值

- Promise&lt;any&gt; Promise<any>

#### 示例

  回调函数事务处理

```javascript
const result = await db.runTransaction(async (transaction) => {
    const aaaRes = await transaction.collection < T > ('account').get();
    const bbbRes = await transaction.collection < T > ('account').get();
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

### <span id="Database_startTransaction">[Database](#Database "MySQL 数据库实例").startTransaction()</span>: Promise&lt;[Transaction](#Transaction "数据库事务操作对象")&gt;

开始事务。另一个同样可以使用的发起事务的 API 是 runTransaction。

#### 返回值

- Promise&lt;[Transaction](#Transaction "数据库事务操作对象")&gt; 事务实例

#### 示例

  获取事务实例，外部处理事务

```javascript
const transaction = await db.startTransaction()

const aaaRes = await transaction.collection < T > ('account').get()
const bbbRes = await transaction.collection < T > ('account').get()

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
}
```

### <span id="Collection<T>">Collection&lt;T&gt;</span>

数据库集合

### <span id="Collection<T>_aggregate">[Collection&lt;T&gt;](#Collection&lt;T&gt; "数据库集合").aggregate()</span>: [Aggregate&lt;T&gt;](#Aggregate&lt;T&gt; "数据库集合的聚合操作实例")

发起聚合操作，定义完聚合流水线阶段之后需调用 end 方法标志结束定义并实际发起聚合操作。

#### 返回值

- [Aggregate&lt;T&gt;](#Aggregate&lt;T&gt; "数据库集合的聚合操作实例") 聚合操作

#### 示例

  新增字段 `id` 为 `_id` 字段值，隐藏 `_id` 字段

```javascript
await db.collection < T > ('todos')
    .aggregate()
    .project({
        id: '$_id',
        _id: false,
    })
    .end()
```

### <span id="Collection<T>_field">[Collection&lt;T&gt;](#Collection&lt;T&gt; "数据库集合").field(filter: [Filter](#Filter&lt;T&gt; "过滤字段，`true` 表示显示该字段，`false` 表示隐藏该字段")&lt;T&gt;)</span>: [Collection&lt;T&gt;](#Collection&lt;T&gt; "数据库集合")

指定返回结果中记录需返回的字段。

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| filter	| [Filter](#Filter&lt;T&gt; "过滤字段，`true` 表示显示该字段，`false` 表示隐藏该字段")&lt;T&gt;	| 无	| 是	| 筛选字段 |

#### 返回值

- [Collection&lt;T&gt;](#Collection&lt;T&gt; "数据库集合") 集合

#### 示例

  隐藏记录中 `_id` 字段

```javascript
await db
    .collection < T > ('todos')
    .field({
        _id: false,
    })
    .get();
```

### <span id="Collection<T>_where">[Collection&lt;T&gt;](#Collection&lt;T&gt; "数据库集合").where(where: [Where](#Where&lt;T&gt; "筛选条件")&lt;T&gt;)</span>: [Collection&lt;T&gt;](#Collection&lt;T&gt; "数据库集合")

指定查询条件，返回带新查询条件的新的集合。

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| where	| [Where](#Where&lt;T&gt; "筛选条件")&lt;T&gt;	| 无	| 是	| 筛选字段 |

#### 返回值

- [Collection&lt;T&gt;](#Collection&lt;T&gt; "数据库集合") 集合

#### 示例

  `_id` 为 `xxx` 的记录

```javascript
await db
    .collection < T > ('todos')
    .where({
        _id: 'xxx',
    })
    .get();
```

### <span id="Collection<T>_orderBy">[Collection&lt;T&gt;](#Collection&lt;T&gt; "数据库集合").orderBy(orderBy: [OrderBy](#OrderBy&lt;T&gt; "排序方式：`''`、 `asc` 表示按字段顺序排序，`desc` 表示按字段逆序排序")&lt;T&gt;)</span>: [Collection&lt;T&gt;](#Collection&lt;T&gt; "数据库集合")

指定查询结果集数量上限。

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| orderBy	| [OrderBy](#OrderBy&lt;T&gt; "排序方式：`''`、 `asc` 表示按字段顺序排序，`desc` 表示按字段逆序排序")&lt;T&gt;	| 无	| 是	| 排序方式 |

#### 返回值

- [Collection&lt;T&gt;](#Collection&lt;T&gt; "数据库集合") 集合

#### 示例

  `_id` 为 `xxx` 的记录按照 `_id` 逆序排序

```javascript
await db
    .collection < T > ('todos')
    .where({
        _id: 'xxx',
    })
    .orderBy({
        _id: 'desc'
    })
    .get();
```

### <span id="Collection<T>_random">[Collection&lt;T&gt;](#Collection&lt;T&gt; "数据库集合").random()</span>: [Collection&lt;T&gt;](#Collection&lt;T&gt; "数据库集合")

返回随机排序记录。

#### 返回值

- [Collection&lt;T&gt;](#Collection&lt;T&gt; "数据库集合") 集合

#### 示例

  `_id` 为 `xxx` 的记录随机排序记录

```javascript
await db
    .collection < T > ('todos')
    .where({
        _id: 'xxx',
    })
    .random()
    .get();
```

### <span id="Collection<T>_limit">[Collection&lt;T&gt;](#Collection&lt;T&gt; "数据库集合").limit(limit: number)</span>: [Collection&lt;T&gt;](#Collection&lt;T&gt; "数据库集合")

指定查询结果集数量上限。

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| limit	| number	| 无	| 是	| 限制条数 |

#### 返回值

- [Collection&lt;T&gt;](#Collection&lt;T&gt; "数据库集合") 集合

#### 示例

  限制最 5 条记录

```javascript
await db
    .collection < T > ('todos')
    .where({
        _id: 'xxx',
    })
    .limit(5)
    .get();
```

### <span id="Collection<T>_skip">[Collection&lt;T&gt;](#Collection&lt;T&gt; "数据库集合").skip(skip: number)</span>: [Collection&lt;T&gt;](#Collection&lt;T&gt; "数据库集合")

指定查询返回结果时从指定序列后的结果开始返回，常用于分页。

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| skip	| number	| 0	| 是	| 跳过记录数 |

#### 返回值

- [Collection&lt;T&gt;](#Collection&lt;T&gt; "数据库集合") 集合

#### 示例

  跳过 5 条记录

```javascript
await db
    .collection < T > ('todos')
    .where({
        _id: 'xxx',
    })
    .skip(5)
    .get();
```

### <span id="Collection<T>_count">[Collection&lt;T&gt;](#Collection&lt;T&gt; "数据库集合").count()</span>: Promise&lt;[QueryResult](#QueryResult&lt;T&gt; "执行结果")&lt;number&gt;&gt;

统计匹配查询条件的记录的条数。

#### 返回值

- Promise&lt;[QueryResult](#QueryResult&lt;T&gt; "执行结果")&lt;number&gt;&gt; 

#### 示例

  `_id` 为 `xxx` 的记录数

```javascript
await db
    .collection < T > ('todos')
    .where({
        _id: 'xxx',
    })
    .count();
```

### <span id="Collection<T>_get">[Collection&lt;T&gt;](#Collection&lt;T&gt; "数据库集合").get()</span>: Promise&lt;[QueryResult](#QueryResult&lt;T&gt; "执行结果")&lt;[RowData](#RowData&lt;T&gt; "记录行数据")&lt;T[] &#124; []&gt;&gt;&gt;

获取集合数据，或获取根据查询条件筛选后的集合数据。

#### 返回值

- Promise&lt;[QueryResult](#QueryResult&lt;T&gt; "执行结果")&lt;[RowData](#RowData&lt;T&gt; "记录行数据")&lt;T[] &#124; []&gt;&gt;&gt; 

#### 示例

  获取 `_id` 为 `xxx` 的记录

```javascript
await db.collection < T > ('todos').where({
    _id: 'xxx'
}).get()
```

### <span id="Collection<T>_add">[Collection&lt;T&gt;](#Collection&lt;T&gt; "数据库集合").add(data: [RowData](#RowData&lt;T&gt; "记录行数据")&lt;T&gt;)</span>: Promise&lt;[QueryResult](#QueryResult&lt;T&gt; "执行结果")&lt;[OkPacket](#OkPacket "确认包")&gt;&gt;

新增记录，如果传入的记录对象没有 _id 字段，则由后台自动生成 _id；若指定了 _id，则不能与已有记录冲突。

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| data	| [RowData](#RowData&lt;T&gt; "记录行数据")&lt;T&gt;	| 无	| 是	| 数据 |

#### 返回值

- Promise&lt;[QueryResult](#QueryResult&lt;T&gt; "执行结果")&lt;[OkPacket](#OkPacket "确认包")&gt;&gt; 执行结果

#### 示例

  新增记录 `price` 为 100

```javascript
await db.collection < T > ('todos')
    .add({
        price: 100
    })
```

### <span id="Collection<T>_remove">[Collection&lt;T&gt;](#Collection&lt;T&gt; "数据库集合").remove()</span>: Promise&lt;[QueryResult](#QueryResult&lt;T&gt; "执行结果")&lt;[OkPacket](#OkPacket "确认包")&gt;&gt;

删除多条记录。注意只支持通过匹配 where 语句来删除，不支持 skip 和 limit。

#### 返回值

- Promise&lt;[QueryResult](#QueryResult&lt;T&gt; "执行结果")&lt;[OkPacket](#OkPacket "确认包")&gt;&gt; 执行结果

#### 示例

  删除 `_id` 为 `xxx` 的记录

```javascript
await db
    .collection < T > ('todos')
    .where({
        _id: 'xxx',
    })
    .remove();
```

### <span id="Collection<T>_update">[Collection&lt;T&gt;](#Collection&lt;T&gt; "数据库集合").update(data: [RowData](#RowData&lt;T&gt; "记录行数据")&lt;T&gt;)</span>: Promise&lt;[QueryResult](#QueryResult&lt;T&gt; "执行结果")&lt;[OkPacket](#OkPacket "确认包")&gt;&gt;

更新多条记录。

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| data	| [RowData](#RowData&lt;T&gt; "记录行数据")&lt;T&gt;	| 无	| 是	|  |

#### 返回值

- Promise&lt;[QueryResult](#QueryResult&lt;T&gt; "执行结果")&lt;[OkPacket](#OkPacket "确认包")&gt;&gt; 执行结果

#### 示例

  `done` 为 `true` 的记录的 `progress` 修改为 `100`

```javascript
await db.collection < T > ('todos').where({
        done: false
    })
    .update({
        progress: 100
    })
```

### <span id="Collection<T>_set">[Collection&lt;T&gt;](#Collection&lt;T&gt; "数据库集合").set(data: [RowData](#RowData&lt;T&gt; "记录行数据")&lt;T&gt;)</span>: Promise&lt;[QueryResult](#QueryResult&lt;T&gt; "执行结果")&lt;[OkPacket](#OkPacket "确认包")&gt;&gt;

替换更新一条记录。

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| data	| [RowData](#RowData&lt;T&gt; "记录行数据")&lt;T&gt;	| 无	| 是	| 替换更新的记录数据 |

#### 返回值

- Promise&lt;[QueryResult](#QueryResult&lt;T&gt; "执行结果")&lt;[OkPacket](#OkPacket "确认包")&gt;&gt; 执行结果

#### 示例

  `_id` 为 `xxx` 的记录 `price` 设置为 `100`

```javascript
await db.collection < T > ('todos')
    .where({
        _id: 'xxx'
    })
    .set({
        price: 100
    })
```

### <span id="Collection<T>_execSQL">[Collection&lt;T&gt;](#Collection&lt;T&gt; "数据库集合").execSQL(sql: string)</span>: Promise&lt;{ results: any; fields: [FieldInfo](#FieldInfo "字段信息")[]; }&gt;

直接执行 sql 语句。

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| sql	| string	| 无	| 是	| 需要执行的 sql 语句 |

#### 返回值

- Promise&lt;{ results: any; fields: [FieldInfo](#FieldInfo "字段信息")[]; }&gt; 返回执行结果以及集合字段

#### 示例

  执行 `sql` 语句

```javascript
await db.collection < T > ('todos')
    .execSQL(sql)
```

### <span id="Aggregate<T>">Aggregate&lt;T&gt;</span>

数据库集合的聚合操作实例

### <span id="Aggregate<T>_addFields">[Aggregate&lt;T&gt;](#Aggregate&lt;T&gt; "数据库集合的聚合操作实例").addFields(fields: [AggregateFields](#AggregateFields&lt;T&gt; "字段")&lt;T&gt;)</span>: [Aggregate&lt;T&gt;](#Aggregate&lt;T&gt; "数据库集合的聚合操作实例")

添加新字段到输出的记录。经过 addFields 聚合阶段，输出的所有记录中除了输入时带有的字段外，还将带有 addFields 指定的字段。

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| fields	| [AggregateFields](#AggregateFields&lt;T&gt; "字段")&lt;T&gt;	| 无	| 是	| 新增字段 |

#### 返回值

- [Aggregate&lt;T&gt;](#Aggregate&lt;T&gt; "数据库集合的聚合操作实例") 聚合操作

#### 示例

  新增 `totalHomework` 字段为 `homework` 字段求和，新增 `totalQuiz` 字段为 `quiz` 字段求和

```javascript
const $ = db.command.aggregate
await db.collection < T > ('scores').aggregate()
    .addFields({
        totalHomework: $.sum('$homework'),
        totalQuiz: $.sum('$quiz')
    })
    .end()
```

### <span id="Aggregate<T>_count">[Aggregate&lt;T&gt;](#Aggregate&lt;T&gt; "数据库集合的聚合操作实例").count(fieldName: string)</span>: [Aggregate&lt;T&gt;](#Aggregate&lt;T&gt; "数据库集合的聚合操作实例")

计算上一聚合阶段输入到本阶段的记录数，输出一个记录，其中指定字段的值为记录数。

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| fieldName	| string	| 无	| 是	| 字段名 |

#### 返回值

- [Aggregate&lt;T&gt;](#Aggregate&lt;T&gt; "数据库集合的聚合操作实例") 聚合操作

### <span id="Aggregate<T>_end">[Aggregate&lt;T&gt;](#Aggregate&lt;T&gt; "数据库集合的聚合操作实例").end()</span>: [Aggregate&lt;T&gt;](#Aggregate&lt;T&gt; "数据库集合的聚合操作实例")

标志聚合操作定义完成，发起实际聚合操作。

#### 返回值

- [Aggregate&lt;T&gt;](#Aggregate&lt;T&gt; "数据库集合的聚合操作实例") 聚合操作

#### 示例

  按 `category` 字段分组，`avgSales` 字段是组内所有记录的 `sales` 字段的平均值

```javascript
const $ = db.command.aggregate
await db.collection < T > ('books').aggregate()
    .group({
        _id: '$category',
        avgSales: $.avg('$sales')
    })
    .end()
```

### <span id="Aggregate<T>_group">[Aggregate&lt;T&gt;](#Aggregate&lt;T&gt; "数据库集合的聚合操作实例").group(group: [AggregateGroup](#AggregateGroup&lt;T&gt; "分组")&lt;T&gt;)</span>: [Aggregate&lt;T&gt;](#Aggregate&lt;T&gt; "数据库集合的聚合操作实例")

计算上一聚合阶段输入到本阶段的记录数，输出一个记录，其中指定字段的值为记录数。

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| group	| [AggregateGroup](#AggregateGroup&lt;T&gt; "分组")&lt;T&gt;	| 无	| 是	| 分组 |

#### 返回值

- [Aggregate&lt;T&gt;](#Aggregate&lt;T&gt; "数据库集合的聚合操作实例") 聚合操作

#### 示例

  `alias` 字段为 `_id` 字段，数量求和为 `num` 字段

```javascript
const $ = db.command.aggregate()
await db.collection < T > ('avatar').aggregate()
    .group({
        _id: '$alias',
        num: $.sum(1)
    })
    .end()
```

### <span id="Aggregate<T>_limit">[Aggregate&lt;T&gt;](#Aggregate&lt;T&gt; "数据库集合的聚合操作实例").limit(limit: number)</span>: [Aggregate&lt;T&gt;](#Aggregate&lt;T&gt; "数据库集合的聚合操作实例")

限制输出到下一阶段的记录数。

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| limit	| number	| 无	| 是	| 限制记录数 |

#### 返回值

- [Aggregate&lt;T&gt;](#Aggregate&lt;T&gt; "数据库集合的聚合操作实例") 聚合操作

#### 示例

  限制 2 条记录

```javascript
await db.collection < T > ('items').aggregate()
    .limit(2)
    .end()
```

### <span id="Aggregate<T>_match">[Aggregate&lt;T&gt;](#Aggregate&lt;T&gt; "数据库集合的聚合操作实例").match(fields: [AggregateMatch](#AggregateMatch&lt;T&gt; "筛选字段")&lt;T&gt;)</span>: [Aggregate&lt;T&gt;](#Aggregate&lt;T&gt; "数据库集合的聚合操作实例")

根据条件过滤文档，并且把符合条件的文档传递给下一个流水线阶段。

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| fields	| [AggregateMatch](#AggregateMatch&lt;T&gt; "筛选字段")&lt;T&gt;	| 无	| 是	| 限制记录数 |

#### 返回值

- [Aggregate&lt;T&gt;](#Aggregate&lt;T&gt; "数据库集合的聚合操作实例") 聚合操作

#### 示例

  `author` 为 stark，`age` 大于 18

```javascript
const _ = db.command
await db.collection < T > ('articles').aggregate()
    .match({
        author: 'stark',
        age: _.gt(18)
    })
```

### <span id="Aggregate<T>_project">[Aggregate&lt;T&gt;](#Aggregate&lt;T&gt; "数据库集合的聚合操作实例").project(project: [AggregateProject](#AggregateProject&lt;T&gt; "项目")&lt;T&gt;)</span>: [Aggregate&lt;T&gt;](#Aggregate&lt;T&gt; "数据库集合的聚合操作实例")

把指定的字段传递给下一个流水线，指定的字段可以是某个已经存在的字段，也可以是计算出来的新字段。

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| project	| [AggregateProject](#AggregateProject&lt;T&gt; "项目")&lt;T&gt;	| 无	| 是	| 项目字段处理 |

#### 返回值

- [Aggregate&lt;T&gt;](#Aggregate&lt;T&gt; "数据库集合的聚合操作实例") 聚合操作

#### 示例

  显示 `title` 字段，隐藏 `author` 字段

```javascript
await db.collection < T > ('articles')
    .aggregate()
    .project({
        title: true,
        author: false
    })
    .end()
```

### <span id="Aggregate<T>_skip">[Aggregate&lt;T&gt;](#Aggregate&lt;T&gt; "数据库集合的聚合操作实例").skip(skip: number)</span>: [Aggregate&lt;T&gt;](#Aggregate&lt;T&gt; "数据库集合的聚合操作实例")

指定一个正整数，跳过对应数量的文档，输出剩下的文档。

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| skip	| number	| 无	| 是	| 跳过记录数 |

#### 返回值

- [Aggregate&lt;T&gt;](#Aggregate&lt;T&gt; "数据库集合的聚合操作实例") 聚合操作

#### 示例

  跳过 5 条记录

```javascript
await db.collection < T > ('users')
    .aggregate()
    .skip(5)
    .end()
```

### <span id="Aggregate<T>_sort">[Aggregate&lt;T&gt;](#Aggregate&lt;T&gt; "数据库集合的聚合操作实例").sort(skip: number)</span>: [Aggregate&lt;T&gt;](#Aggregate&lt;T&gt; "数据库集合的聚合操作实例")

根据指定的字段，对输入的文档进行排序。

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| skip	| number	| 无	| 是	| 跳过记录数 |

#### 返回值

- [Aggregate&lt;T&gt;](#Aggregate&lt;T&gt; "数据库集合的聚合操作实例") 聚合操作

#### 示例

  按 `age` 字段顺序排列，按 `score` 字段逆序排列

```javascript
await db.collection < T > ('articles')
    .aggregate()
    .sort({
        age: 'asc',
        score: 'desc'
    })
    .end()
```

### <span id="Transaction">Transaction</span>

数据库事务操作对象

### <span id="Transaction_commit">[Transaction](#Transaction "数据库事务操作对象").commit(reason: any)</span>: Promise&lt;void&gt;

提交事务

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| reason	| any	| 无	| 否	| 提交原因 |

#### 返回值

- Promise&lt;void&gt; 

### <span id="Transaction_rollback">[Transaction](#Transaction "数据库事务操作对象").rollback(reason: any)</span>: Promise&lt;void&gt;

回滚事务

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| reason	| any	| 无	| 否	| 回滚原因 |

#### 返回值

- Promise&lt;void&gt; 

### <span id="Transaction_collection<T>">[Transaction](#Transaction "数据库事务操作对象").collection&lt;T&gt;(name: string)</span>: [Collection&lt;T&gt;](#Collection&lt;T&gt; "数据库集合")

集合

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| name	| string	| 无	| 否	| 集合名 |

#### 返回值

- [Collection&lt;T&gt;](#Collection&lt;T&gt; "数据库集合") 集合实例

#### 示例

```javascript
const collection = Transaction.collection < T > ('todos')
```

### <span id="Command">Command</span>

数据库操作符，通过 `db.command` 获取

### <span id="Command_aggregate<T>">[Command](#Command "数据库操作符，通过 `db.command` 获取").aggregate&lt;T&gt;()</span>: AggregateCommand&lt;T&gt;

聚合操作

#### 返回值

- AggregateCommand&lt;T&gt; 聚合操作

### <span id="Command_and">[Command](#Command "数据库操作符，通过 `db.command` 获取").and(value: [CommandMixParamType](#CommandMixParamType "混合参数类型") &#124; [CommandMixParamType](#CommandMixParamType "混合参数类型")[], ...rest: [CommandMixParamType](#CommandMixParamType "混合参数类型")[])</span>: [Command](#Command "数据库操作符，通过 `db.command` 获取")

逻辑操作符 且

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| value	| [CommandMixParamType](#CommandMixParamType "混合参数类型") &#124; [CommandMixParamType](#CommandMixParamType "混合参数类型")[]	| 	| 是	| 混合参数类型或混合参数类型数组 |
| ...rest	| [CommandMixParamType](#CommandMixParamType "混合参数类型")[]	| 	| 是	| 混合参数类型 |

#### 返回值

- [Command](#Command "数据库操作符，通过 `db.command` 获取") 命令操作

### <span id="Command_or">[Command](#Command "数据库操作符，通过 `db.command` 获取").or(value: [CommandMixParamType](#CommandMixParamType "混合参数类型") &#124; [CommandMixParamType](#CommandMixParamType "混合参数类型")[], ...rest: [CommandMixParamType](#CommandMixParamType "混合参数类型")[])</span>: [Command](#Command "数据库操作符，通过 `db.command` 获取")

逻辑操作符 或

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| value	| [CommandMixParamType](#CommandMixParamType "混合参数类型") &#124; [CommandMixParamType](#CommandMixParamType "混合参数类型")[]	| 	| 是	| 混合参数类型或混合参数类型数组 |
| ...rest	| [CommandMixParamType](#CommandMixParamType "混合参数类型")[]	| 	| 是	| 混合参数类型数组 |

#### 返回值

- [Command](#Command "数据库操作符，通过 `db.command` 获取") 命令操作

### <span id="Command_not">[Command](#Command "数据库操作符，通过 `db.command` 获取").not(value: [Command](#Command "数据库操作符，通过 `db.command` 获取"))</span>: [Command](#Command "数据库操作符，通过 `db.command` 获取")

逻辑操作符 非

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| value	| [Command](#Command "数据库操作符，通过 `db.command` 获取")	| 	| 是	|  |

#### 返回值

- [Command](#Command "数据库操作符，通过 `db.command` 获取") 命令操作

### <span id="Command_nor">[Command](#Command "数据库操作符，通过 `db.command` 获取").nor(value: [CommandMixParamType](#CommandMixParamType "混合参数类型") &#124; [CommandMixParamType](#CommandMixParamType "混合参数类型")[], ...rest: [CommandMixParamType](#CommandMixParamType "混合参数类型")[])</span>: [Command](#Command "数据库操作符，通过 `db.command` 获取")

逻辑操作符 或

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| value	| [CommandMixParamType](#CommandMixParamType "混合参数类型") &#124; [CommandMixParamType](#CommandMixParamType "混合参数类型")[]	| 	| 是	| 混合参数类型或混合参数类型数组 |
| ...rest	| [CommandMixParamType](#CommandMixParamType "混合参数类型")[]	| 	| 是	| 混合参数类型数组 |

#### 返回值

- [Command](#Command "数据库操作符，通过 `db.command` 获取") 命令操作

### <span id="Command_nand">[Command](#Command "数据库操作符，通过 `db.command` 获取").nand(value: [CommandMixParamType](#CommandMixParamType "混合参数类型") &#124; [CommandMixParamType](#CommandMixParamType "混合参数类型")[], ...rest: [CommandMixParamType](#CommandMixParamType "混合参数类型")[])</span>: [Command](#Command "数据库操作符，通过 `db.command` 获取")

逻辑操作符 或

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| value	| [CommandMixParamType](#CommandMixParamType "混合参数类型") &#124; [CommandMixParamType](#CommandMixParamType "混合参数类型")[]	| 	| 是	| 混合参数类型或混合参数类型数组 |
| ...rest	| [CommandMixParamType](#CommandMixParamType "混合参数类型")[]	| 	| 是	| 混合参数类型数组 |

#### 返回值

- [Command](#Command "数据库操作符，通过 `db.command` 获取") 命令操作

### <span id="Command_eq">[Command](#Command "数据库操作符，通过 `db.command` 获取").eq(value: [CommandMixParamType](#CommandMixParamType "混合参数类型"))</span>: [Command](#Command "数据库操作符，通过 `db.command` 获取")

逻辑操作符 等于

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| value	| [CommandMixParamType](#CommandMixParamType "混合参数类型")	| 	| 是	| 混合参数类型 |

#### 返回值

- [Command](#Command "数据库操作符，通过 `db.command` 获取") 命令操作

### <span id="Command_neq">[Command](#Command "数据库操作符，通过 `db.command` 获取").neq(value: [CommandMixParamType](#CommandMixParamType "混合参数类型"))</span>: [Command](#Command "数据库操作符，通过 `db.command` 获取")

逻辑操作符 不等于

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| value	| [CommandMixParamType](#CommandMixParamType "混合参数类型")	| 	| 是	| 混合参数类型 |

#### 返回值

- [Command](#Command "数据库操作符，通过 `db.command` 获取") 命令操作

### <span id="Command_lt">[Command](#Command "数据库操作符，通过 `db.command` 获取").lt(value: [CommandMixParamType](#CommandMixParamType "混合参数类型"))</span>: [Command](#Command "数据库操作符，通过 `db.command` 获取")

逻辑操作符 小于

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| value	| [CommandMixParamType](#CommandMixParamType "混合参数类型")	| 	| 是	| 混合参数类型 |

#### 返回值

- [Command](#Command "数据库操作符，通过 `db.command` 获取") 命令操作

### <span id="Command_lte">[Command](#Command "数据库操作符，通过 `db.command` 获取").lte(value: [CommandMixParamType](#CommandMixParamType "混合参数类型"))</span>: [Command](#Command "数据库操作符，通过 `db.command` 获取")

逻辑操作符 小于等于

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| value	| [CommandMixParamType](#CommandMixParamType "混合参数类型")	| 	| 是	| 混合参数类型 |

#### 返回值

- [Command](#Command "数据库操作符，通过 `db.command` 获取") 命令操作

### <span id="Command_gt">[Command](#Command "数据库操作符，通过 `db.command` 获取").gt(value: [CommandMixParamType](#CommandMixParamType "混合参数类型"))</span>: [Command](#Command "数据库操作符，通过 `db.command` 获取")

逻辑操作符 大于

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| value	| [CommandMixParamType](#CommandMixParamType "混合参数类型")	| 	| 是	| 混合参数类型 |

#### 返回值

- [Command](#Command "数据库操作符，通过 `db.command` 获取") 命令操作

### <span id="Command_gte">[Command](#Command "数据库操作符，通过 `db.command` 获取").gte(value: [CommandMixParamType](#CommandMixParamType "混合参数类型"))</span>: [Command](#Command "数据库操作符，通过 `db.command` 获取")

逻辑操作符 大于等于

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| value	| [CommandMixParamType](#CommandMixParamType "混合参数类型")	| 	| 是	| 混合参数类型 |

#### 返回值

- [Command](#Command "数据库操作符，通过 `db.command` 获取") 命令操作

### <span id="Command_in">[Command](#Command "数据库操作符，通过 `db.command` 获取").in(value: [CommandMixParamType](#CommandMixParamType "混合参数类型") &#124; [CommandMixParamType](#CommandMixParamType "混合参数类型")[], ...rest: [CommandMixParamType](#CommandMixParamType "混合参数类型")[])</span>: [Command](#Command "数据库操作符，通过 `db.command` 获取")

筛选操作符 筛选在给定的数组内

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| value	| [CommandMixParamType](#CommandMixParamType "混合参数类型") &#124; [CommandMixParamType](#CommandMixParamType "混合参数类型")[]	| 	| 是	| 混合参数类型或混合参数类型数组 |
| ...rest	| [CommandMixParamType](#CommandMixParamType "混合参数类型")[]	| 	| 是	| 混合参数类型数组 |

#### 返回值

- [Command](#Command "数据库操作符，通过 `db.command` 获取") 命令操作

### <span id="Command_nin">[Command](#Command "数据库操作符，通过 `db.command` 获取").nin(value: [CommandMixParamType](#CommandMixParamType "混合参数类型") &#124; [CommandMixParamType](#CommandMixParamType "混合参数类型")[], ...rest: [CommandMixParamType](#CommandMixParamType "混合参数类型")[])</span>: [Command](#Command "数据库操作符，通过 `db.command` 获取")

筛选操作符 筛选不在给定的数组内

#### 参数

| 属性	| 类型	| 默认值	| 必填	| 说明 |
| :---:	| :---:	| :---:	| :---:	| :---: |
| value	| [CommandMixParamType](#CommandMixParamType "混合参数类型") &#124; [CommandMixParamType](#CommandMixParamType "混合参数类型")[]	| 	| 是	| 混合参数类型或混合参数类型数组 |
| ...rest	| [CommandMixParamType](#CommandMixParamType "混合参数类型")[]	| 	| 是	| 混合参数类型数组 |

#### 返回值

- [Command](#Command "数据库操作符，通过 `db.command` 获取") 命令操作