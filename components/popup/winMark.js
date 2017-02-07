'use strict'
import * as React from 'react';

import "./winMark.scss";



class WinMark extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {children,show} = this.props;
        return (
            <div className={"virtual-mark "+(show===true?"":"hide")} >
                {children}
            </div>
        )
    }
};

WinMark.defaultProps = {
    show:false
}
WinMark.contextTypes = {
 
};
module.exports = WinMark;


