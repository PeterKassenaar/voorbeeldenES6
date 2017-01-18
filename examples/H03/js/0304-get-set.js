// 0304-get-set.js

//**********************
// 1. Eerste manier: getter- en setterMethodes schrijven voor een eigenschap
//**********************
class Person1 {
	// constructor met drie parameters
	constructor(firstName = 'unknown', lastName = 'unknown', email = 'unknown') {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
	}

	// method
	greet() {
		return `Hello ${this.firstName} ${this.lastName}`;
	}

	// getter-method voor eigenschap this.email
	getEmail() {
		return this.email;
	}

	// setter-method voor eigenschap this.email
	setEmail(value) {
		this.email = value;
	}
}

let person1 = new Person1('Peter', 'Kassenaar', 'info@kassenaar.com');
console.log('email person 1:', person1.getEmail());

//**********************
// 2. Tweede manier: gebruik maken van het keyword get en set
//**********************

class Person2 {
	// constructor met drie parameters
	constructor(firstName = 'unknown', lastName = 'unknown', email = 'unknown') {
		this._firstName = firstName;
		this._lastName = lastName;
		this._email = email;
	}

	// method
	greet() {
		return `Hello ${this._firstName} ${this._lastName}`;
	}

	// getter-method voor eigenschap this.email
	get email() {
		return this._email;
	}

	// setter-method voor eigenschap this.email
	set email(value) {
		this._email = value;
	}
}
let person2 = new Person2('Peter', 'Kassenaar', 'info@kassenaar.com');
console.log('email person 2:', person2.email);