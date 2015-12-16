// Rest parameters in ES5 - via arguments[]
// Rest parameters in ES6
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function foo() {
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var i = _step.value;

			console.log('parameter: ', i);
		}
		//...
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator['return']) {
				_iterator['return']();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}
}
function bar(x) {
	//···
}
foo(1, 2, 3); // prints: 1, 2, 3
bar('a', 'b', 'c'); // x = 'a'; y = ['b', 'c']

var Car = (function () {
	function Car() {
		_classCallCheck(this, Car);
	}

	_createClass(Car, [{
		key: 'currentYear',
		value: function currentYear() {
			return new Date().getFullYear();
		}

		//The year parameter is a Default parameter
		// The ...accessories parameter contains 'The Rest of the parameters'
	}, {
		key: 'setDetails',
		value: function setDetails() {
			var make = arguments.length <= 0 || arguments[0] === undefined ? 'No Make' : arguments[0];
			var model = arguments.length <= 1 || arguments[1] === undefined ? 'No Model' : arguments[1];
			var year = arguments.length <= 2 || arguments[2] === undefined ? this.currentYear() : arguments[2];

			console.log(make + ' ' + model + ' ' + year);

			for (var _len2 = arguments.length, accessories = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
				accessories[_key2 - 3] = arguments[_key2];
			}

			if (accessories) {
				// classic for-loop:
				//for (var i = 0; i < accessories.length; i++) {
				//	console.log('\n' + accessories[i]);
				//}
				// ES6 for-of loop
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = accessories[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var i = _step2.value;

						console.log('\n' + i);
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2['return']) {
							_iterator2['return']();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}
			}
		}
	}]);

	return Car;
})();

var car = new Car();
//Testing default parameters
car.setDetails('Toyota', 'Tundra');
car.setDetails();

//Testing rest parameters
car.setDetails('Toyota', 'Tundra', 2015, 'sunroof', '4X4', '4-door', 'cruise control', 'airco', 'cupholders');