//Destructuring

// ES5: Oude manier.
var values = [9.99, .50];
var oldTotal = values[0],
	oldTax = values[1];
console.log('oldTotal: ', oldTotal);
console.log('oldTax: ', oldTax);

// ES6: Nieuwe manier (met Destructuring)
let [total, tax] = [9.99, .50];
console.log('Het totaal is' , total, '. De belasting is', tax);
