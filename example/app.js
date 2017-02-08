"use strict";
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Input,Alert,Confirm,WinMark,Modal} from "qb-ui";

console.log(Modal);
// Modal.alert("删除","哈哈").then((data)=>{
//     console.log("返回结果wei ;" +data);
// });

Modal.confirm("删除","哈哈").then((data)=>{
    console.log("返回结果wei ;" +data);
});

// ReactDOM.render(
//     <div>
//         <Input/>
//         <WinMark show={true}/>
//         <Alert message={"你确定删除嘛?"} show={true} callBack={()=>{}}/>
//     </div>,
//     document.getElementById('container-body')
// );

