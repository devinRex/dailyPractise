/**
 * Created by denglei on 16/9/20.
 */
// Duplicate declaration "a"
function bar() {
    let a = 10;
    var a = 1;
}

function bar() {
    let a = 10;
    let a = 1;
}

// 因此, 不能在函数内部重新声明参数
function func(arg){
    // Identifier 'arg' has already been declared
    let arg; // 报错
}

function func(arg) {
    {
        let arg; // 不报错
    }
}