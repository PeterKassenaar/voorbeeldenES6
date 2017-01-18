// traditional ES5
var oldLogger = function (msg) {
	console.log(msg);
};
oldLogger('Hello oldskool ES5!');

// ES6, with arrow function
var newLogger = (msg) => console.log(msg); //Creates an anonymous function
newLogger('Hello ES6 arrow functions!');

//Working with "this" the "old" way
function Car() {
	var self = this; // caching 'this' in local variable to avoid wrong reference/scoping
	self._seats = 4;

	self.timeout = function () {
		setTimeout(function () {
			console.log('we get more seats in this 2016 model!',
				++self._seats);
		}, 1000);
	}
}

//Working with this using arrow functions
class CarWithArrow {

	constructor() {
		this._seats = 6;
	}

	timeout() {
		setTimeout(() => {
			console.log('we get even more seats in with ES6!', ++this._seats); // No need to cache 'this' !
		}, 1000);
	}
}

var c = new Car();
c.timeout();
var cArrow = new CarWithArrow();
cArrow.timeout();

// ander voorbeeld
class UiComponent {
	constructor() {
		let button = document.getElementById('myButton');
		button.addEventListener('click', () => {
			console.log('I\'m clicked!');
			this.handleClick(); // this verwijst naar de class!
		});
	}

	handleClick() {
		///	···
		alert('Hello world')
	}
}
var uiC = new UiComponent();