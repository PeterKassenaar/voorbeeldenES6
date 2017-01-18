// Rest parameters in ES5 - via arguments[]
// Rest parameters in ES6
function foo(...args){
	for (let i of args){
		console.log('parameter: ', i);
	}
	//...
}
function bar(x, ...y) {
	//···
}
foo (1, 2, 3); // prints: 1, 2, 3
bar('a', 'b', 'c'); // x = 'a'; y = ['b', 'c']

class Car {

	currentYear() {
		return new Date().getFullYear();
	}

	//The year parameter is a Default parameter
	// The ...accessories parameter contains 'The Rest of the parameters'
	setDetails(make = 'No Make', model = 'No Model',
			   year = this.currentYear(), ...accessories) {
		console.log(make + ' ' + model + ' ' + year);
		if (accessories) {
			// classic for-loop:
			//for (var i = 0; i < accessories.length; i++) {
			//	console.log('\n' + accessories[i]);
			//}
			// ES6 for-of loop
			for (let i of accessories){
				console.log('\n' + i);
			}
		}
	}

}


var car = new Car();
//Testing default parameters
car.setDetails('Toyota', 'Tundra');
car.setDetails();

//Testing rest parameters
car.setDetails('Toyota', 'Tundra', 2015, 'sunroof', '4X4', '4-door', 'cruise control', 'airco', 'cupholders');
