/**
 * Created by denglei on 16/9/20.
 */
// 应用
{
    // 交换变量的值
    [x, y] = [y, x];

    //从函数返回多个值
    function example() {
        return [1, 2, 3];
    }
    var [a, b, c] = example();

    {
        function example() {
            return {
                foo: 1,
                bar: 2
            };
        }
        var {foo, bar} = example();
    }

    // 函数参数的定义
    function f([x, y, z]) {}
    f([1, 2, 3]);

    function f({x, y, z}) {}
    f({z: 3, y: 2, x: 1});

    // 提取json数据
    var jsonData = {
        id: 42,
        status: "OK",
        data: [867, 5309]
    };
    let { id, status, data: number} = jsonData;
}