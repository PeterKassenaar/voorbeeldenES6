// 0305-static.js
class Person {
	// constructor met drie parameters
	constructor(firstName = 'unknown', lastName = 'unknown', email = 'unknown') {
		this._firstName = firstName;
		this._lastName = lastName;
		this._email = email;
	}

	// static method, rechtstreeks beschikbaar op de klasse, maar *niet* op instanties
	static getFullName(person) {
		return `Hello ${person._firstName} ${person._lastName}`;
	}
}

let person = new Person('Peter', 'Kassenaar', 'info@kassenaar.com');
console.log(Person.getFullName(person));
console.log(person.getFullName(person)); // TypeError: person.getFullName is not a function
