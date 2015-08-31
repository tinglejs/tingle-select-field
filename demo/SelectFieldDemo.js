/**
 * SelectField Component Demo for tingle
 * @author gbk
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */

var classnames = require('classnames');
var GroupList = require('tingle-group-list');
var SelectField = require('../src');

var monthArray = [
    { value: 0, text: '一月' }, { value: 1, text: '二月' },
    { value: 2, text: '三月' }, { value: 3, text: '四月' },
    { value: 4, text: '五月' }, { value: 5, text: '六月' },
    { value: 6, text: '七月' }, { value: 7, text: '八月' },
    { value: 8, text: '九月' }, { value: 9, text: '十月' },
    { value: 10, text: '十一月' }, { value: 11, text: '十二月' }
];
var yearArray = [
    1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006,
    2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015
];

class Demo extends React.Component {

    constructor(props) {
        super(props);

        // 单列选择数据格式化
        var ret1 = SelectField.formatDataValue(monthArray, 6);

        // 多列选择数据格式化
        var ret2 = SelectField.formatDataValue([
            yearArray,
            monthArray
        ], [
            2015,
            6
        ]);

        var t = this;
        t.state = {
            data1: ret1.data,
            value1: ret1.value,
            data2: ret2.data,
            value2: ret2.value
        };
    }

    handleChange1(value) {
        this.setState({
            value1: value
        });
    }

    handleChange2(value) {
        this.setState({
            value2: value
        });
    }

    render() {
        var t = this;
        return (
            <div>
                <GroupList title="下拉框演示">
                    <SelectField label="单列选择" data={t.state.data1} onChange={t.handleChange1.bind(t)} value={t.state.value1}/>
                    <SelectField label="多列选择" data={t.state.data2} onChange={t.handleChange2.bind(t)} value={t.state.value2}/>
                    <SelectField label="不可选" data={t.state.data1} value={t.state.value1} readOnly={true}/>
                </GroupList>
            </div>
        );
    }
};

module.exports = Demo;