

'use strict'
import * as React from 'react';
//import * as _ from "lodash";

import styles from  "./tab.scss";



//console.log(styles);

class BarTab extends React.Component {
    constructor(props) {
        super(props);
       
    }
   
    render() {
        let {className,children} = this.props;
       
        return (
            <div className={"virtual-tab-bar "+className}>
                {children}
            </div>
           
        )
    }
};

class Item extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let {className,children} = this.props;
        return(
            <div className={"virtual-tab-bar-tab "+className}>
                    {children}
            </div>
        )
    }
}
Item.defaultProps = {
    className:""
}

BarTab.defaultProps = {
    className:""
}
BarTab.Item = Item;
// Alert.contextTypes = {
//   message: React.PropTypes.string.isRequired,
//   show:React.PropTypes.bool.isRequired,
//   callBack:React.PropTypes.func.isRequired,
// };
module.exports = BarTab;


