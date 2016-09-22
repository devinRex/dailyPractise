/**
 * Created by denglei on 16/9/20.
 */
// 数组的解构赋值
{
    var value = [1, 2, 3, 4, 5];
    var [el1, el2, el3] = value;
}

var [a, b, [c, d]] = [1, 2, [3, 4]];

function tuple() {
    return [1, 2];
}
var [first, second] = tuple();
{
    var value = [1, 2, 3, 4, 5];
    var [el1, , el3, , el5] = value;
}
{
    // reset参数之后不能在有其他的参数
    var value = [1, 2, 3, 4, 5];
    var [el1, el2, el3, ...tail] = value;
}

{
    // 解构赋值允许指定默认值
    // 如果一个数组成员不严格等于undefined,默认值不会生效
    var [foo = true] = [];
    foo;
    [x, y = 'b'] = ['a']; // x='a', y='b'
    [x, y = 'b'] = ['a', undefined]; // x='a', y='b'

    var [x = 1] = [undefined];
    x // 1

    var [x = 1] = [null];
    x // null
}

{
    // 如果默认值是一个表达式,那么这个表达式是惰性求值的,即只有在用到的时候,才会求值
    function f() {
        console.log("aaa");
    }
    let [x = f()] = [1];
}
