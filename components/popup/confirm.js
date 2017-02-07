'use strict'
import * as React from 'react';
//import * as _ from "lodash";

import "./confirm.scss";



class Confirm extends React.Component {
    constructor(props) {
        super(props);

        this.handOk = this.handOk.bind(this);
        this.handCancel = this.handCancel.bind(this);
    }
    handCallBack(status){
        let {callBack} = this.props;
        callBack&&callBack(status);

    }
    render() {
        let {message,show} = this.props;
        return (
            <div className={"virtual-confirm "+(show===true?"":"hide")} >
                <p>{message}</p>
                <div className="virtual-confirm-buttons">
                    <button onClick={this.handCallBack.bind(this,"Ok")}>取消</button>
                    <button onClick={this.hahandCallBackndOk.bind(this,"Cancel")}>确定</button>
                </div>
                
            </div>
        )
    }
};

Confirm.defaultProps = {
    message:'',
    show:false
}

Confirm.contextTypes = {
  message: React.PropTypes.string.isRequired,
  show:React.PropTypes.bool.isRequired,
  callBack:React.PropTypes.func.isRequired,
};

module.exports = Confirm;


