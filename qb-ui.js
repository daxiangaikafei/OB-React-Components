'use strict';

//if()

 /*
// 
// 
// process.env': {'NODE_ENV
 */
if(process.env.NODE_ENV==="production"){
	module.exports = require('./build/qb-ui');
}else{
	module.exports = require('./build/qb-ui-demo');
}


