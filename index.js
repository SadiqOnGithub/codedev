// "use strict";
// console.log("hi");



const person = {
	a: 1,
	b: 2,
	c: 3,
	d: function() {
		return this
	},
	thisArrow: () => this
}
console.log("this alone", this);

(function thisFunc() {
	console.log("from func", this);
})()


console.log(person.d());
console.log(person.thisArrow());

// for (let i = 0; i < 10; i++) {
	
// }