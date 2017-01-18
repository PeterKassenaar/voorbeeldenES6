// Named parameters in ES5
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
function selectEntriesES6({ start=0, end=-1, step=1 } = {}) {
	console.log('ES6 start: ', start);
	console.log('ES6 end: ', end);
	console.log('ES6 step: ', step);
	console.log('\n');
	// ···
}

// calling ES5 function
var ES5Options = {
	start: 10,
	end  : 20,
	step : 1
};
selectEntriesES5(ES5Options);

// Calling ES6 function
selectEntriesES6({start: 10, end: 100, step: 10});
selectEntriesES6(); // calling w/ default parameters
