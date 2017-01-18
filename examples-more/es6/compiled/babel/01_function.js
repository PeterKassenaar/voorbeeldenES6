// Classic JavaScript - also valid ES6
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function foo() {
	"use strict";
	var msg = 'Hello World from function';
	return msg;
}
console.log(foo());

// New in ES6 :classes w/ function

var Bar = (function () {
	function Bar() {
		_classCallCheck(this, Bar);
	}

	// Don't forget: instantiate new Bar() (!)

	_createClass(Bar, [{
		key: 'hello',
		value: function hello() {
			var msg = 'Hello World from class';
			return msg;
		}
	}]);

	return Bar;
})();

var bar = new Bar();
console.log(bar.hello());