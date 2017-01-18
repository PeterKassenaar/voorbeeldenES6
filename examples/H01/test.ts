// test.ts
let myVar = 10;
myVar = "Hello world"; // ts-error: "Type 'string' is not assignable to type 'number', maar code compileert wel gewoon en kan worden uitgevoerd.
console.log(myVar);