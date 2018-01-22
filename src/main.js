require('./index.less');
var $ = require('jquery');
var Route = require('./public/route');
var home = require('./home');
var two = require('./two');
var three = require('./three');
var last = require('./last');
/*
Route.route({
    el:'.centent'
})*/
var route = new Route({
    el:'.centent',
    default:home,
    home:home,
    two:two,
    three:three,
    last:last
})