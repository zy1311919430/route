require('./index.less');
var template = require('./index.html');
var $ = require('jquery')
var obj = {
    template:template
};
obj.ready = function(){
    console.log('.home');
    $('.home').append('<div>我是首页内容</div>')
}
module.exports = obj