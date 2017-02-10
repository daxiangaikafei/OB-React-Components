'use strict'
import * as React from 'react';

import WinMark from "./../modal/winMark.js";
import PopUp from "./popup";

import _ from "lodash";

class HelpModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            popUp:{},
            showModal:false
        }
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
    }
    hide(){
        this.setState({
            showModal:false,
            popUp:{},
        })
    }
    show(content,options){
        let self = this;
        
        return new Promise(function(resolve, reject){

            console.log("lllll")
            let popUp = Object.assign({},options,{
                show:true,
                children:content,
                onMaskClose:function(){
                    if(options&&options.maskClosable===true){
                        self.hide();
                        resolve("Ok");
                    };
                }
            })
            self.setState({
                showModal:true,
                popUp
            })
        });
    }
    render(){
        let {showModal,popUp} = this.state;
        return (
            <div className="help">
                <WinMark show={showModal} onClick = {popUp.onMaskClose}/>
                <PopUp {...popUp}/>
            </div>
        )
    }

}


//

module.exports = HelpModal;