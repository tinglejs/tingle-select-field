# tingle-select-field [![npm version](https://badge.fury.io/js/tingle-select-field.svg)](http://badge.fury.io/js/tingle-select-field)

SelectField 是选择输入表单域。

<img src="https://img.alicdn.com/tps/TB1W2T0JpXXXXbHXFXXXXXXXXXX-750-1254.png" width="375"/>

## Install

```bash
npm install tingle-select-field --save
```

## Simple Usage

```js
constructor(props) {
    super(props);
    this.state = {
        // 数据模型
        data: [
            [
                { value: 0, text: '一月' },
                { value: 1, text: '二月' },
                { value: 2, text: '三月' },
                { value: 3, text: '四月' },
                { value: 4, text: '五月' },
                { value: 5, text: '六月' },
                { value: 6, text: '七月' },
                { value: 7, text: '八月' },
                { value: 8, text: '九月' },
                { value: 9, text: '十月' },
                { value: 10, text: '十一月' },
                { value: 11, text: '十二月' }
            ]
        ],
        // 选中的值
        value: [ { value: 6, text: '七月' } ]
    };
}
handleChange(value) {
    // 数据确认变更
    this.setState({
        value: value
    });
}
render() {
    var t = this;
    return (
        <div>
            <SelectField label="下拉选择" data={t.state.data} onChange={t.handleChange.bind(t)} value={t.state.value}/>
        </div>
    );
}
```

## Options 可用配置

| 配置项 | 必填 | 默认值 | 功能/备注 |
|---|----|---|----|
|className|optional|-|自定义样式类|
|label|required|-|表单域名称|
|confirmText|optional|完成|确认文案|
|cancelText|optional|取消|取消文案|
|data|required|-|数据模型（注1）|
|value|required|-|选中数据（注2）|
|readOnly|optional|false|是否只读|
|onChange|optional|-|值变化触发的事件（注3）|

> 注1: data 是一个二维数组，第一维表示滚轮列，第二维表示各列中的选项。

每个选项必须包括 text（显示的文字） 和 value（选项的值） 属性。典型的格式如下：

```js
[
    [
        {
            text: '江苏',
            value: 'jiangsu'
        },
        {
            text: '浙江',
            value: 'zhejiang'
        }
    ],
    [
        {
            text: '杭州',
            value: 'hangzhou'
        },
        {
            text: '宁波',
            value: 'ningbo'
        }
    ]
]
```

可以通过调用 SelectField.formatDataValue 来兼容其他的一些格式，详见 [tingle-slot 的文档](https://github.com/tinglejs/tingle-slot#slotformatdatavaluedata-value)

> 注2: value 是一个一维数组，分别表示每一列的选中值。

数组中的元素一般为 data 中对应选项的引用，也可以通过 value 属性来和选项建立绑定。典型的格式如下：

```js
[
    {
        text: '浙江',
        value: 'zhejiang'
    },
    {
        text: '杭州',
        value: 'hangzhou'
    }
]
```

可以通过调用 SelectField.formatDataValue 来兼容其他的一些格式，详见 [tingle-slot 的文档](https://github.com/tinglejs/tingle-slot#slotformatdatavaluedata-value)

> 注3: onChange 参数为 value（当前选中值数组）

## API 接口

### SelectField.formatDataValue(data[, value])

`data` 和 `value` 的非标准格式兼容，返回标准格式的 { data, value }

可以通过调用 SelectField.formatDataValue 来兼容其他的一些数据格式，详见 [tingle-slot 的文档](https://github.com/tinglejs/tingle-slot#slotformatdatavaluedata-value)

### SelectField.formatColumnValue(columnData[, columnValue])

替换单列的 data 和 value 时使用，兼容规则同上。

可以通过调用 SelectField.formatColumnValue 来兼容其他的一些数据格式，详见 [tingle-slot 的文档](https://github.com/tinglejs/tingle-slot#slotformatcolumnvaluecolumndata-columnvalue)

## Links 相关链接

- [Fire a bug/Issues 提Bug](https://github.com/tinglejs/tingle-select-field/issues)
- [Tingle项目](https://github.com/tinglejs/generator-tingle)