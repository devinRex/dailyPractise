// class Calc {
// 	 constructor(a){
// 	 this.a = a;
// 	 console.log('Calc constructor');
// 	}
// 	add(b){
// 	 return this.a + b;
// 	}
// }

// var c = new Calc(3);
// console.log(c.add(5));
function say(a){
	if([].toString.call(a) === "[object Array]"){
		for(let i = 0, len = a.length; i < len; i++) {
			console.log(a[i]);
		}
		return false;
	}
	console.log(a);
}
// {
// 	let a = 10;
// 	var b = 1;
// }
// say(b);
/*var a = [];
for(let i = 0; i < 10; i++) {
	a[i] = function () {
		console.log(i);
	};
}
a[6]();*/

// var tmp = 123;

// if (true) {
//   tmp = 'abc'; // ReferenceError
//   let tmp;
// }
// var single = a => console.log(a);
// 	single('hello, world');

// let foo = 'outer';

// function bar(func = x => foo) {
//   let foo = 'inner';
//   console.log(func()); // outer
// }

// bar();

// function add([x, y]){
//   return x + y;
// }

// say(add([1, 2])) // 3
// var [foo] = 'Hello';
// say(foo);
// var found = [1, 4, -5, 10].find((n) => n < 0);
// console.log("found:", found);
let arr = [3, 5, 2, 2, 5, 5];
let unique = [...new Set(arr)];
console.log(unique);
