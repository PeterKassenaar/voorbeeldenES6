// Default parameters in ES5
function foo(x, y) {
	x = x || 0;
	y = y || 0;
	// do something with x and y
}

// Default parameter notation much nicer in ES6
function bar(x = 0, y = 0) {
	//···
}

// ES6 : No constructor, but default paramaters visible in the setDetails() method
class Car {

	currentYear() {
		return new Date().getFullYear();
	}

	//The year parameter is a "default parameter"
	setDetails(make = 'No Make', model = 'No Model', year = this.currentYear()) {
		console.log(make + ' ' + model + ' ' + year);
	}

}

var car = new Car();
//Testing default parameters
car.setDetails('Toyota', 'Tundra');
car.setDetails();
