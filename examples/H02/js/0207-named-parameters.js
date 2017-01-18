// named parameters, zie ook http://exploringjs.com/es6/ch_core-features.html#_handling-named-parameters
function selectEntriesES6({start = 0, end = -1, step = 1} = {}) {
	console.log('ES6 start: ', start);
	console.log('ES6 end: ', end);
	console.log('ES6 step: ', step);
}

selectEntriesES6({start: 10, end: 100, step: 5}); //invoking MET parameters:
selectEntriesES6(); //invoking zonder parameters:
//
// //*************************************
// // Een meer realistisch voorbeeld:
// //*************************************
function logPerson({naam = 'onbekend', email = 'onbekend', leeftijd = -1}={}) {
	console.log('Naam: ', naam);
	console.log('Email: ', email);
	console.log('Leeftijd: ', leeftijd);
}

let person = {
	naam : 'Peter Kassenaar',
	email: 'info@kassenaar.com'
};
logPerson(person); // met parameters. JavaScript voert mapping uit.
logPerson();	// zonder parameters, alle keys krijgen hun standaardwaarde.

