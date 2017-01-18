// traditional ES5
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var oldLogger = function oldLogger(msg) {
	console.log(msg);
};
oldLogger('Hello oldskool ES5!');

// ES6, with arrow function
var newLogger = function newLogger(msg) {
	return console.log(msg);
}; //Creates an anonymous function
newLogger('Hello ES6 arrow functions!');

//Working with "this" the "old" way
function Car() {
	var self = this; // caching 'this' in local variable to avoid wrong reference/scoping
	self._seats = 4;

	self.timeout = function () {
		setTimeout(function () {
			console.log('we get more seats in this 2016 model!', ++self._seats);
		}, 1000);
	};
}

//Working with this using arrow functions

var CarWithArrow = (function () {
	function CarWithArrow() {
		_classCallCheck(this, CarWithArrow);

		this._seats = 6;
	}

	_createClass(CarWithArrow, [{
		key: 'timeout',
		value: function timeout() {
			var _this = this;

			setTimeout(function () {
				console.log('we get even more seats in with ES6!', ++_this._seats); // No need to cache 'this' !
			}, 1000);
		}
	}]);

	return CarWithArrow;
})();

var c = new Car();
c.timeout();
var cArrow = new CarWithArrow();
cArrow.timeout();

// ander voorbeeld

var UiComponent = (function () {
	function UiComponent() {
		var _this2 = this;

		_classCallCheck(this, UiComponent);

		var button = document.getElementById('myButton');
		button.addEventListener('click', function () {
			console.log('I\'m clicked!');
			_this2.handleClick(); // this verwijst naar de class!
		});
	}

	_createClass(UiComponent, [{
		key: 'handleClick',
		value: function handleClick() {
			///	···
			alert('Hello world');
		}
	}]);

	return UiComponent;
})();

var uiC = new UiComponent();