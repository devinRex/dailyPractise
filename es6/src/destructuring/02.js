/**
 * Created by denglei on 16/9/20.
 */
// 对象的解构赋值
// 对象的属性没有次序,变量必须与属性同名,
var {foo, bar} = {foo:"aaa", bar: "bbb"};

{
    // 如果变量名与属性名不一致
    var {foo: baz} = {foo: "aaa", bar: "bbb"};
}
{
    // 默认值
    // 默认值生效的条件是，对象的属性值严格等于undefined
    var {x = 3} = {};

    var {x, y = 5} = {x: 1};
}