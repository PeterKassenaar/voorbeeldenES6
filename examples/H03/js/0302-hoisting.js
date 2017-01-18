// 0302-hoisting.js

//************************
// ES5 : wel hoisting mogelijk
//************************
var personES5 = new PersonES5(); // Geldig

function PersonES5() {
	function PersonES5() {
	}
	//...
	return PersonES5;
}

//************************
// ES6 :  Geen hoisting
//************************
let personES6 = new PersonES6();// ReferenceError: PersonES6 is not defined

class PersonES6 {
	//...
}

//************************
// ES6 :  Named/unnamed class expressions (gebruiken wij verder niet)
//************************

// Unnamed class expression
let Person= class {
	//...
};

// Named class expression
let Person1= class Person1{
	//...
};
