// Default parameters in ES5
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function foo(x, y) {
	x = x || 0;
	y = y || 0;
	// do something with x and y
}

// Default parameter notation much nicer in ES6
function bar() {
	var x = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	var y = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
}
//···

// ES6 : No constructor, but default paramaters visible in the setDetails() method

var Car = (function () {
	function Car() {
		_classCallCheck(this, Car);
	}

	_createClass(Car, [{
		key: 'currentYear',
		value: function currentYear() {
			return new Date().getFullYear();
		}

		//The year parameter is a "default parameter"
	}, {
		key: 'setDetails',
		value: function setDetails() {
			var make = arguments.length <= 0 || arguments[0] === undefined ? 'No Make' : arguments[0];
			var model = arguments.length <= 1 || arguments[1] === undefined ? 'No Model' : arguments[1];
			var year = arguments.length <= 2 || arguments[2] === undefined ? this.currentYear() : arguments[2];

			console.log(make + ' ' + model + ' ' + year);
		}
	}]);

	return Car;
})();

var car = new Car();
//Testing default parameters
car.setDetails('Toyota', 'Tundra');
car.setDetails();