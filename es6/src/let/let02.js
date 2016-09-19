/**
 * Created by denglei on 16/9/19.
 */
// 不存在变量提升
{
    // 这里好像浏览器和babel环境下运行出来的结果不太一样
    console.log(bar);
    let bar = 2;
}