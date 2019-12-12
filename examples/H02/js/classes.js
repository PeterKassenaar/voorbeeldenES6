// classes


const empOfTheYear = new Employee('Maikel');
console.log(empOfTheYear.name); //


class Person{
	constructor(props) {
		this.name = props
	}

}
class Employee extends Person{
	// private salary=10000
	constructor(props) {
		super(props); // call of the constructor of the BASE class
	}
}
