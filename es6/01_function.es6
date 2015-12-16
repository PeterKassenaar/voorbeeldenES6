// Classic JavaScript - also valid ES6
function foo(){
	"use strict";
	var msg = 'Hello World from function';
	return msg;
}
console.log(foo());

// New in ES6 :classes w/ function
class Bar{
	hello(){
		var msg = 'Hello World from class';
		return msg;
	}
}

// Don't forget: instantiate new Bar() (!)
var bar = new Bar();
console.log(bar.hello());