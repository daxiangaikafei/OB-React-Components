'use strict'
import * as React from 'react';


import 'rmc-picker/assets/index.css';
import 'rmc-date-picker/assets/index.css';
//import a from "rmc-date-picker";
import DatePicker from 'rmc-date-picker/lib/index.web';
import moment from 'moment';
import zhCn from 'rmc-date-picker/lib/locale/zh_CN';
//import enUs from 'rmc-date-picker/lib/locale/en_US';
import 'moment/locale/zh-cn';
//import 'moment/locale/en-gb';

import {isString} from "lodash";


import { VelocityComponent,VelocityTransitionGroup }  from "velocity-react";



//

// var TimeFromString = function(timeString){
//     if(timeString===undefined){
//         return new Date();
//     }else if(isString(timeString)){
//         let dataArray = ymd.split(timeString);
//         let date = new Date();
//         date.setFullYear(dataArray[0])
//         date.setMonth(dataArray[1]);
//         date.setDate(dataArray[2]);
//         return date;
//     }
// }
// Date.prototype.format = function(){
//     let data = this;
//     return Number(data.FullYear()+"-"+data.getMonth()+1)+"-"+data.getDate();
// }

require("./index.scss");

const now = moment();
// const temp = moment("2016-01-31");
// var d = temp.add(1,"months");//
//console.log("temp day :",d.format("YYYY-MM-DD"))



const format = 'YYYY-MM-DD';
/*input插件*/
class Calendar extends React.Component {
     constructor(props) {
        super(props);
        this.handOk = this.handOk.bind(this);
        this.handCancel = this.handCancel.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.showOrHide = this.showOrHide.bind(this);
        this.state = {
            show:false,
            showValue:props.defaultValue
            //value:props.defaultValue
        };
    }
    componentWillMount(){
        
       
        
    }
    componentDidMount(){
        let defaultValue = this.props.defaultValue;
        let self = this;
        if(defaultValue!==undefined){
            let value = moment(defaultValue===""?undefined:defaultValue);
            console.log(value);
            self.setState({
                value:value
            })
        }
        //  require.ensure([],function(){
        //     console.log("kkkkkkkk")
        //     var moment = require('moment');
        //     if(defaultValue!==undefined){
        //         //this.setState({ value:defaultValue });
        //         //this.props.onChange&&this.props.onChange(this.props.name,defaultValue);
        //         //console.log("....",moment(defaultValue===""?undefined:defaultValue));
        //         let value = moment(defaultValue===""?undefined:defaultValue);
        //         console.log(value);
        //         self.setState({
        //             value:value
        //         })
        //     }
            
        // })
    }
    componentWillReceiveProps (nextProps) {
        let defaultValue = this.props.defaultValue;
        if (defaultValue!=nextProps.defaultValue) {
            this.setState({ value:nextProps.defaultValue });
            //this.props.onChange&&this.props.onChange(this.props.name,this.state.value);
        }
    }
    handOk(){
        let newValue=  this.current?this.current.format(format):now.format(format);
        this.props.onChange&&this.props.onChange(this.props.name,newValue);
        this.setState({
            show:false,
            value:this.current,
            showValue:newValue
        })
    }
    handCancel(){
        this.setState({
            show:false
        })
    }
    onDateChange(data){
        console.log("shezhiwei zhi ",data)
        this.current = data;
    }
    showOrHide(value){
        this.setState({
            show:!this.state.show
        })
    }
    render() {

        let {show,value,showValue} = this.state;
        let {minDate,maxDate,mode,anEnter,anLeave} = this.props;

        return (
            <div className="container-calendar-show">
                <span className="calendar-span" onClick={this.showOrHide}>{showValue}</span>
                <VelocityTransitionGroup enter={anEnter} leave={anLeave}>
                {
                    show&&(
                        <div className="container-calendar ">
                                <div className="calendar-top">
                                    <button onClick={this.handOk}>确定</button>
                                    <button onClick={this.handCancel}>取消</button>
                                </div>
                              <DatePicker
                              rootNativeProps={{'data-xx':'yy'}}
                              defaultDate={value}
                              mode={mode}
                              locale={zhCn}
                              onDateChange={this.onDateChange} />
                        </div>
                    )
                }
                </VelocityTransitionGroup>
            </div>
        )
    }
};
//&&value!==""&&TimeFromString(value) || now
// defaultDate={value&&value!==""&&TimeFromString(value) || now}
Calendar.defaultProps = {
    defaultValue: '',
    minDate:"2014-05-05",
    maxDate:"",
    mode:"date",
    name:"你没有设置属性呀",
    anEnter:{
        duration:300,
        animation:"slideDown"
    },
    anLeave:{
        duration:300,
        animation:"slideUp"
    }
}

module.exports = Calendar;



