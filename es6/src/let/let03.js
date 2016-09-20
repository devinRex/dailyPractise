/**
 * Created by denglei on 16/9/19.
 */
// 暂时性死区
// 只要块级作用域内存在let命令, 它所声明的变量就“绑定”这个区域,不再受外部的影响
// 这样的设计是因为,变量一定要在声明之后使用,否则就报错
{
    var tmp = 123;
    if (true) {
        // ReferenceError: tmp is not defined
        tmp = 'abc';
        let tmp;
    }
}

// 在let命令声明变量tmp之前,都属于变量tmp的“死区”
{
    // ReferenceError: tmp is not defined
    tmp = 'abc';
    // ReferenceError: tmp is not defined
    console.log(tmp);

    let tmp;
    // undefined
    console.log(tmp);
    
    tmp = 123;
    console.log(tmp);
}

// typeof不再是一个百分之一百安全的操作
// 变量一定要在声明之后使用
{
    typeof x; // ReferenceError
    let x;
}

function bar(x = y, y = 2) {
    return [x, y];
}
// ReferenceError: y is not defined
bar();

