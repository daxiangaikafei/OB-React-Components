"use strict";
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Input,Alert,Confirm,WinMark} from "qb-ui"


ReactDOM.render(
    <div>
        <Input/>
        <WinMark show={true}/>
        <Alert message={"你确定删除嘛?"} show={true} callBack={()=>{}}/>
    </div>,
    document.getElementById('container-body')
);

