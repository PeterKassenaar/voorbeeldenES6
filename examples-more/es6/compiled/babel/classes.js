// class example - base class
'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var BaseLog = (function () {
	function BaseLog() {
		_classCallCheck(this, BaseLog);

		this.logName = 'Log1';
	}

	// subclass, inherits from base class

	_createClass(BaseLog, [{
		key: 'log',
		value: function log(msg) {
			console.log(this.logName + ': ' + msg);
		}
	}]);

	return BaseLog;
})();

var Logger = (function (_BaseLog) {
	_inherits(Logger, _BaseLog);

	function Logger(logName) {
		_classCallCheck(this, Logger);

		_get(Object.getPrototypeOf(Logger.prototype), 'constructor', this).call(this, logName);
	}

	// new base class, with getters and setters

	_createClass(Logger, [{
		key: 'writeLine',
		value: function writeLine(msg) {
			_get(Object.getPrototypeOf(Logger.prototype), 'log', this).call(this, msg + '\r\n');
		}
	}]);

	return Logger;
})(BaseLog);

var Auto = (function () {
	// 'property', or 'field', or whatever

	function Auto(engine) {
		_classCallCheck(this, Auto);

		this._engine = engine;
	}

	_createClass(Auto, [{
		key: 'start',
		value: function start() {
			console.log('Engine started: ', this._engine);
		}
	}, {
		key: 'engine',
		get: function get() {
			return this._engine;
		},
		set: function set(val) {
			this._engine = val;
		}
	}]);

	return Auto;
})();

var mercedes = new Auto('V8');
mercedes.start();
console.log('Mercedes engine: ', mercedes.engine);