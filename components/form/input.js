'use strict'
import * as React from 'react';
//import * as _ from "lodash";

import "./input.scss";



class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: ""
        };
    }
    componentWillMount() {   
        if(this.props.defaultValue){
            this.props.setValue&&this.props.setValue(this.props.name,this.props.defaultValue);
        }    
    }
    componentWillReceiveProps (nextProps) {
        let defaultValue = nextProps.defaultValue;
        if (defaultValue!=nextProps.defaultValue) {
            this.setState({ value:nextProps.defaultValue });
            this.props.setValue&&this.props.setValue(this.props.name,this.state.value);
        }
    }
    handleTrigger(event) {
        let value = event.target.value.substr(0, 140);
        this.setState({
            value:value
        })
        let {triggeredOnInput,setValue,name} = this.props;
        if(triggeredOnInput===true){
            this.time&&clearTimeout(this.time);
            this.time = setTimeout(function(){
                setValue&&setValue(name,value);
            },500);
        }

    }
    handleBlur() {
        this.props.setValue&&this.props.setValue(this.props.name,this.state.value);
    }
    handleFocus() {
        this.props.handleFocus && this.props.handleFocus(this.value);
    }
    render() {
        const props = this.props;
        const {max,min,placeholder,type, trigger,value,subTitle,disabled,onKeyUp} = this.props;
        const newProps = {
            type: type === 'password' ? 'password' : 'text',
            className:"input input-normal" ,
            onChange:this.handleTrigger.bind(this),
            onBlur:this.handleBlur.bind(this),
            max,min,placeholder,
            value:this.state.value,
            disabled,
            onKeyUp
        };
        //this.value = value;
        let sub;
        if(subTitle){
            sub = (<span className="form-input-rignt">{subTitle}</span>)
        }
        return (
            <div className="virtual-input">
                <input   {...newProps}  />{sub}
            </div>
        )
    }
};

Input.defaultProps = {
    type: 'INPUT',
    triggeredOnInput:false
}

module.exports = Input;


