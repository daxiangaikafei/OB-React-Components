'use strict'
import * as React from 'react';

import WinMark from "./winMark.js";
import Alert from "./alert.js";

import _ from "lodash";

class HelpModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modal:{},
            showModal:false
        }

        this.alert = this.alert.bind(this);
        this.confirm = this.confirm.bind(this);

        this.show = this.show.bind(this);
        this.close = this.close.bind(this);
    }
    alert(title,message){
        
        return this.show(title,message,false);
    }
    
    confirm(title,message){
        
        console.log("-----------")
        return this.show(title,message,true);
    }
    close(){
        this.setState({
            showModal:false,
            modal:{}
        })
    }
    show(title,message,isConfirm){
        
        let self = this;
        return new Promise(function(resolve, reject){
            let modal = Object.assign({},{
                show:true,
                title,
                message,
                isConfirm,
                closable:!isConfirm,
                callBack:function(data){
                    self.close();
                    resolve(data);
                }
            })
            self.setState({
                showModal:true,
                modal
            })
        });
    }
    render(){
        let {showModal,modal} = this.state;
        return (
            <div className="help">
                <WinMark show={showModal}/>
                <Alert {...modal}/>
            </div>
        )
    }

}


//

module.exports = HelpModal;