require('./index.less');
var template = require('./index.html');
var $ = require('jquery')
var obj = {
    template:template
};
obj.ready = function(){
    $('.three').append('<div>我第三页内容</div>')
}
module.exports = obj