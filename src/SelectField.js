/**
 * SelectField Component for tingle
 * @auther gbk
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
var Context = require('tingle-context');
var classnames = require('classnames');
var Slot = require('tingle-slot');
var Icon = require('tingle-icon');

class SelectField extends React.Component {

    constructor(props) {
        super(props);
        var t = this;
        t.state = {
            value: props.value,
            confirmedValue: props.value
        };
    }

    // 外部变更选中值
    componentWillReceiveProps(nextProps) {
        var t = this;
        t.setState({
            value: nextProps.value,
            confirmedValue: nextProps.value
        });
    }

    handleClick() {
        var t = this;
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
        var t = this;
        t.setState({
            value: t.state.confirmedValue
        });
    }

    render() {
        var t = this;
        return (
            <div className={classnames('tPL10 tPR10 tFBH tFBAC tFS14 tSelectField ', {
                [t.props.className]: !!t.props.className
            })}>
                <div className="tMR10 tLH1_3 tFC6 tSelectFieldLabel">{t.props.label}</div>
                <div className="tFB1 tPR tFC9" onClick={t.handleClick.bind(t)}>
                    <div className="tSelectFieldValue tOmit tFC9">{t.props.formatter(t.state.confirmedValue)}<Icon className="tSelectFieldIcon tML6 tFCd" id="tingle-select-field-arrow-right"/></div>
                </div>
                <Slot ref="slot" title={t.props.label} data={t.props.data} value={t.state.value} onChange={t.handleChange.bind(t)} onCancel={t.handleCancel.bind(t)} onConfirm={t.handleConfirm.bind(t)}/>
            </div>
        );
    }
}

SelectField.defaultProps = {
    data:       [],
    formatter:  (value) => value.map((n) => n.text).join(' '),
    onChange:   Context.noop,
    readOnly:   false
}

// http://facebook.github.io/react/docs/reusable-components.html
SelectField.propTypes = {
    className:  React.PropTypes.string,
    label:      React.PropTypes.string.isRequired,
    data:       React.PropTypes.array.isRequired,
    value:      React.PropTypes.array.isRequired,
    formatter:  React.PropTypes.func,
    onChange:   React.PropTypes.func,
    readOnly:   React.PropTypes.bool
}

SelectField.formatDataValue = Slot.formatDataValue;

SelectField.formatColumnValue = Slot.formatColumnValue;

module.exports = SelectField;
