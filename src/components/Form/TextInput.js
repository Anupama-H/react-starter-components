/**
 * Created by ravi.hamsa on 6/29/16.
 */

import React, {PropTypes, Component} from "react";
import FormElement from './FormElement'


class TextInput extends FormElement {
    render() {

        let defaultValue = this.getDefaultValue();
        let formClasses = this.getFormClasses();
        let value = defaultValue || '';

        return <fieldset className={formClasses}>
            <label>{this.props.label}</label>
            <input type={this.props.type} className="form-control" name={this.props.name}
                   placeholder={this.props.placeholder} onChange={this.onChange.bind(this)}
                   value={value}/>
            {this.props.helperText ? <small className="text-muted">{this.props.helperText}</small> : '' }
            {this.props.errors ? <small className="text-muted">{this.props.errors}</small> : '' }
        </fieldset>
    }
}


export default TextInput;