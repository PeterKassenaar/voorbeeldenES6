
class Person {
	constructor() {
		this.name = 'Peter Kassenaar'
	}

	getName() {
		return this.name;
	}
}
let person = new Person();
console.log(person.getName()); // Peter Kassenaar