require('./index.less');
var template = require('./index.html');
var $ = require('jquery')
var obj = {
    template:template
};
obj.ready = function(){
    $('.two').append('<div>我是第二页内容</div><div>b的修改</div>>')
}
module.exports = obj