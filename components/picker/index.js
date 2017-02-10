


'use strict'
import * as React from 'react';

import RcPicker from "rmc-picker";

import "./index.scss";
//import 'rmc-picker/assets/index.css';


class Picker extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {children,show} = this.props;
        // let props = {
        //     children:[
        //         {label:"haha",value:"12"},
        //     ]
        // }
        return (
            <div className="virtual-picker">
                <RcPicker>
                    {[
                        {label:"haha1",value:"1"},
                        {label:"haha2",value:"2"},
                        {label:"haha3",value:"3"},
                        {label:"haha4",value:"4"},
                        {label:"haha5",value:"5"},
                    ]}
                </RcPicker>
            </div>
        )
    }
};

Picker.defaultProps = {
    show:false
}
Picker.contextTypes = {
 
};
module.exports = Picker;


