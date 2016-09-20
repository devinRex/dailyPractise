/**
 * Created by denglei on 16/9/19.
 */
// 不存在变量提升
{
    // ReferenceError: bar is not defined
    console.log(bar);
    let bar = 2;
}