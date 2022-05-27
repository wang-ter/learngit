
var url1 = 'file:///android_asset/hrfile/html/review/reveiw_cc.html?id=1111&id=111&sessionid=ssssssssssssssss&domain=http://10.0.100.110:8080/jeesite/a/';

// js

var url_arr = url1.split('?')[1].split('&')
var result = {}
for(let item of url_arr){
    if(result[item.split('=')[0]] !== undefined){
        result[item.split('=')[0]] = [result[item.split('=')[0]],item.split('=')[1]]
    }else{
        result[item.split('=')[0]] = item.split('=')[1]
    }
    }

// 直接用nodejs方法
var url = require('url')
var querystring = require('querystring')
var result = querystring.parse(url.parse(url1).query)
console.log(result)


















// 1、js原生方法
// function getjson(url){
//     let arrurl = url.split('?')[1].split('&')
//     let obj = {}
//     for(let item of arrurl){
//             if(obj[item.split('=')[0]] !== undefined){
//                 obj[item.split('=')[0]] = [obj[item.split('=')[0]],item.split('=')[1]]
//             }else{
//                 obj[item.split('=')[0]] = item.split('=')[1]
//             } 
//     }
// }   

// getjson(url1)

// // 2、url的queryString
// let url = require('url');
// let querystring = require('querystring'); 
// const { join } = require('path');
// let result = querystring.parse(url.parse(url1).query)
// console.log(result)