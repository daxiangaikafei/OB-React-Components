'use strict'
import * as React from 'react';
//import * as _ from "lodash";

import styles from  "./alert.scss";

console.log(styles);

class Alert extends React.Component {
    constructor(props) {
        super(props);
        //console.log(props);
        this.handClick = this.handClick.bind(this);
    }
    handClick(){
        let {callBack} = this.props;
        callBack&&callBack("Ok");
    }
    render() {
        let {message,show,title} = this.props;
        return (
            <div className={"virtual-modal-wrap "+(show===true?"":"hide")}>
                 <div className={"virtual-modal "} >
                    <button className="virtual-modal-close">X</button>
                    <div className="virtual-modal-header">
                        <p>{title}</p>
                    </div>
                    <div className="virtual-modal-body">
                        <p>{message}</p>
                    </div>
                    <div className="virtual-modal-footer">
                        <div className="virtual-modal-button-group-v">
                            <a className="virtual-modal-button" onClick={this.handClick}>确定</a>
                        </div>
                    </div>
                    
                    
                </div> 
            </div>
           
        )
    }
};

Alert.defaultProps = {
    title:"111",
    message:'',
    show:false,
    closable:true,//是否显示删除按钮
}
// Alert.contextTypes = {
//   message: React.PropTypes.string.isRequired,
//   show:React.PropTypes.bool.isRequired,
//   callBack:React.PropTypes.func.isRequired,
// };
module.exports = Alert;


