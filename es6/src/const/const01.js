/**
 * Created by denglei on 16/9/20.
 */
const PI = 3.1415;
// TypeError: Assignment to constant variable.
try {
     // PI = 3;
} catch (e) {
    console.log(e);
}


// SyntaxError: Missing initializer in const declaration
try {
    // const foo;
} catch(e) {
    console.log(e);
}
