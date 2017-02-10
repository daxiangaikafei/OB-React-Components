"use strict";
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Input,Modal,BarTab,Picker,Calendar} from "qb-ui";

console.log(Modal);
// Modal.alert("删除","哈哈").then((data)=>{
//     console.log("返回结果wei ;" +data);
// });

// Modal.confirm("删除","哈哈").then((data)=>{
//     console.log("返回结果wei ;" +data);
// });

ReactDOM.render(
    <div className="main">
        <Picker/>
        <Calendar/>
        <BarTab>
            <BarTab.Item>
               额呵呵哒
            </BarTab.Item>
            <BarTab.Item>
               额呵呵哒
            </BarTab.Item>
            <BarTab.Item>
               额呵呵哒
            </BarTab.Item>
        </BarTab>
    </div>,
    document.getElementById('container-body')
);

