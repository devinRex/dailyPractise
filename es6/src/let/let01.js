/**
 * Created by denglei on 16/9/19.
 */
/**
 * let声明的变量,只在let命令所在的代码块内有效
 */
{
    let a = 10;
    var b = 1;
}
// ReferenceError: a is not defined
try {
    console.log(a);
}
catch (e) {
    console.log(e);
}
console.log(b);

// 分割线
{
    let arr = new Array(10);
    for (let i = 0; i < arr.length; i++) {
    }
    // ReferenceError: i is not defined
    try {
        console.log(i);
    } catch (e) {
        console.log(e);
    }
}

// 分割线,自带闭包?
// 当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量
{
    let a = [];
    for(let i = 0; i < 10; i++) {
        a[i] = () => {
            console.log(i);
        };
    }
    a[6]();
}




