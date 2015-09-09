/**
 * SelectField Component for tingle
 * @author gbk
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
let Context = require('tingle-context');
let classnames = require('classnames');
let Slot = require('tingle-slot');
let Icon = require('tingle-icon');
let Field = require('tingle-field');

class SelectField extends React.Component {

    constructor(props) {
        super(props);
        let t = this;
        t.state = {
            value: props.value,
            confirmedValue: props.value
        };
    }

    // 外部变更选中值
    componentWillReceiveProps(nextProps) {
        let t = this;
        t.setState({
            value: nextProps.value,
            confirmedValue: nextProps.value
        });
    }

    handleClick() {
        let t = this;
        !t.props.readOnly && t.refs.slot.show();
    }

    handleChange(value) {
        this.setState({
            value: value
        });
    }

    handleConfirm(value) {
        this.props.onChange(value);
    }

    handleCancel() {
        let t = this;
        t.setState({
            value: t.state.confirmedValue
        });
    }

    render() {
        let t = this;
        return (
            <Field className={classnames('tSelectField', {
                [t.props.className]: !!t.props.className
            })} {...t.props}>
                <div className="tFB1" onClick={t.handleClick.bind(t)}>
                    <div className="tSelectFieldValue tOmit tFBH">
                        <span className="tFB1">{t.props.formatter(t.state.confirmedValue)}</span>
                    {!t.props.readOnly ? <Icon className="tSelectFieldIcon tML6 tFCd" id="tingle-select-field-arrow-right"/> : ''}
                    </div>
                </div>
                <Slot ref="slot" title={t.props.label} data={t.props.data} value={t.state.value} onChange={t.handleChange.bind(t)} onCancel={t.handleCancel.bind(t)} onConfirm={t.handleConfirm.bind(t)}/>
            </Field>
        );
    }
}

SelectField.defaultProps = {
    data: [],
    formatter: (value) => value.map((n) => n.text).join(' '),
    onChange: Context.noop,
    readOnly: false
};

// http://facebook.github.io/react/docs/reusable-components.html
SelectField.propTypes = {
    className: React.PropTypes.string,
    label: React.PropTypes.string.isRequired,
    data: React.PropTypes.array.isRequired,
    value: React.PropTypes.array.isRequired,
    formatter: React.PropTypes.func,
    onChange: React.PropTypes.func,
    readOnly: React.PropTypes.bool
};

SelectField.formatDataValue = Slot.formatDataValue;

SelectField.formatColumnValue = Slot.formatColumnValue;

SelectField.displayName = "SelectField";

module.exports = SelectField;
