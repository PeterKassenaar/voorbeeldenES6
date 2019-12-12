// classes

// Base class
class Person {
	constructor(props) {
		this.name = props
	}
}

// Extended class
class Employee extends Person {
	// private salary=10000; // JavaScript doesn't know about 'private' and 'public'
	constructor(props) {
		super(props); // call of the constructor of the BASE class
	}
}

// No hoisting of classes, so this code needs to be down here
const empOfTheYear = new Employee('Maikel');
console.log(empOfTheYear.name); // Maikel

