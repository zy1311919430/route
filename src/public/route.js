var $ = require('jquery');
function Route(obj){
    this.skip = function(href,dom){
        var src = href.slice(2) || 'default';
        //地址栏改变
        window.location.hash = href;
        dom.html(obj[src].template);
        //执行子组件的方法
        obj[src].ready();
    };
    /*this.location = function(){
        var href = window.location.hash;
        this.skip(href,$($(obj.el)[0]))
    };*/
    this.route = function(obj){
        //获取视图节点
        var dom = $($(obj.el)[0]);
        //获取跳转节点，添加点击事件实现路由
        var as = $('[zy-href]');
        var that = this;
        as.on('click',function(){
            var href = $(this).attr('zy-href');
            that.skip(href,dom)
        })
        //获取地址栏参数实现路由
        this.skip(window.location.hash,dom)
    };
    this.route(obj)
}
module.exports = Route
/*
module.exports = {
    route:function(obj){
        //获取视图节点
        var dom = $($(obj.el)[0]);
        //获取跳转节点，添加点击事件
        var as = $('[zy-href]');
        as.on('click',function(){
            var src = $(this).attr('zy-href');
            console.log(src);
        })
    }
}*/
