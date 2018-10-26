# textarea中的内容转成json格式

------

### 用户在textarea中输入或粘贴自己的json：

```js
{
    index: "request_d0c4ef85-0302-5409-8ed2-ebd0b3a21707",
    body: {
        query: {
            bool: {
                must_not: [{
                    match: {
                        paramsKeys: ""
                    }
                }],
                must: [{
                        exists: {
                            field: 'paramsKeys'
                        }
                    },
                    {
                        match: {
                            page: 'order/list'
                        }
                    }
                ]
            }
        }
    }
}
```

### 转换成json结果

```js
{
    "mapping": {
        "index": "request_d0c4ef85-0302-5409-8ed2-ebd0b3a21707",
        "body": {
            "query": {
                "bool": {
                    "must_not": [{
                        "match": {
                            "paramsKeys": ""
                        }
                    }],
                    "must": [{
                        "exists": {
                            "field": "paramsKeys"
                        }
                    }, {
                        "match": {
                            "page": "order/list"
                        }
                    }]
                }
            }
        }
    }
}
```
### 功能

> * 支持key无双引号
> * 支持单引号
> * 快乐复制粘贴