// Named parameters in ES5
'use strict';

function selectEntriesES5(options) {
	var start = options.start || 0;
	var end = options.end || -1;
	var step = options.step || 1;
	console.log('ES5 start: ', options.start);
	console.log('ES5 end: ', options.end);
	console.log('ES5 step: ', options.step);
	console.log('\n');
	//···
}

// Named parameters in ES6, with empty object as default parameter
function selectEntriesES6() {
	var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	var _ref$start = _ref.start;
	var start = _ref$start === undefined ? 0 : _ref$start;
	var _ref$end = _ref.end;
	var end = _ref$end === undefined ? -1 : _ref$end;
	var _ref$step = _ref.step;
	var step = _ref$step === undefined ? 1 : _ref$step;

	console.log('ES6 start: ', start);
	console.log('ES6 end: ', end);
	console.log('ES6 step: ', step);
	console.log('\n');
	// ···
}

// calling ES5 function
var ES5Options = {
	start: 10,
	end: 20,
	step: 1
};
selectEntriesES5(ES5Options);

// Calling ES6 function
selectEntriesES6({ start: 10, end: 100, step: 10 });
selectEntriesES6(); // calling w/ default parameters