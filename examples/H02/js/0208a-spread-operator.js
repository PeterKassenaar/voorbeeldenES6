// 0208a - spread operator
// For more information see for example
//   - https://codeburst.io/a-simple-guide-to-destructuring-and-es6-spread-operator-e02212af5831
//   - https://davidwalsh.name/spread-operator



//******************************************
// Spread contents of an array into a new array
//******************************************
console.group('Spread operator');
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];
console.log(array2); // [1,2,3,4,5,6]


// Spread contents of string into an array
const name= "Adame Delcroix";
const chars = [...name];
console.log(chars);

// Spread contents of an object into a new object, and update the 'name' property
const person ={
    name: 'Peter',
    email: 'info@kassenaar.com',
    knowledge: ['JS', 'Vue', 'Angular']
};
const updatedPerson={
    ...person,
    name: 'Peter Kassenaar'
};
console.log('Updated person::: ', updatedPerson);

console.groupEnd();

