// ********
// Named parameters in ES5
// ********
function selectEntriesES5(options = {}) {
    var start = options.start || 0;
    var end = options.end || -1;
    var step = options.step || 1;
    console.log('ES5 start: ', start);
    console.log('ES5 end: ', end);
    console.log('ES5 step: ', step);
    console.log('\n');
    //···
}

console.group('ES5');
console.log('ES5 Named parameters:');
selectEntriesES5();
selectEntriesES5({start: 10, end: 30, step: 2});
console.groupEnd();
// ********
// Named parameters in ES6
// ********
// named parameters, zie ook http://exploringjs.com/es6/ch_core-features.html#_handling-named-parameters
function selectEntriesES6({start = 0, end = -1, step = 1} = {}) {
    console.log('ES6 start: ', start);
    console.log('ES6 end: ', end);
    console.log('ES6 step: ', step);
}

console.group('ES6');
console.log('ES6 Named parameters:');
selectEntriesES6(); //invoking zonder parameters:
selectEntriesES6({start: 10, end: 100, step: 5}); //invoking MET parameters:

console.groupEnd();
//
// //*************************************
// // Een meer realistisch voorbeeld:
// //*************************************
function logPerson({naam = 'onbekend', email = 'onbekend', leeftijd = -1} = {}) {
    console.log('Naam: ', naam);
    console.log('Email: ', email);
    console.log('Leeftijd: ', leeftijd);
}

let person = {
    naam: 'Peter Kassenaar',
    email: 'info@kassenaar.com'
};
console.group('Person');
logPerson(person); // met parameters. JavaScript voert mapping uit.
logPerson();	// zonder parameters, alle keys krijgen hun standaardwaarde.
console.groupEnd();
