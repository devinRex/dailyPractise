/**
 * Created by denglei on 16/9/20.
 */
// 复合类型

const foo = {};
foo.prop = 123;

// 123
console.log(foo.prop);

// TypeError: Assignment to constant variable
foo = {};

// TypeError: Assignment to constant variable
try{
    const a = [];
    a.push("hello");
    a.length = 0;
    // a = ['Dave'];
} catch(e) {
    
}
