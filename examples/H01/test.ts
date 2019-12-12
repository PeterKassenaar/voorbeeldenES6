// test.ts - TypeScript shows you immediately if something is wrong!
let myVar = 10;         // 'Type inference'
myVar = "Hello world";  // ts-error: "Type 'string' is not assignable to type 'number', maar code compileert wel gewoon en kan worden uitgevoerd.
console.log(myVar);
