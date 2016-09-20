/**
 * Created by denglei on 16/9/20.
 */
// var命令和function命令声明的全局变量,依旧是全局变量属性;let、const、class声明的全局变量,不属于全局变量属性
var a= 1;
// 1
console.log(window.a);
let b = 1;
// undefined
console.log(window.b);