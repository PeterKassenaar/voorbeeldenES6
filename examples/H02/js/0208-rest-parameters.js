/*// Rest parameters

// ES5: omslachtig werken via de (onzichtbare) array arguments die
// bij elke functie-aanroep aanwezig was.
function logAllArguments() {
	for (var i = 0; i < arguments.length; i++) {
		console.log(arguments[i]);
	}
}

logAllArguments(1, 2, 3, 4, 5);

//******************************************
// ES6 Voorbeeld 1: nieuwe spread-operator en rest parameters (= 'de rest' van alle parameters)
//******************************************
function logAllArgumentsES6(...args) {
	// args is direct een array, er hoeft geen [].slice.call(args) te worden gebruikt.
	args.forEach(arg => {
		console.log('ES6 argument: ', arg);
	})
}

logAllArgumentsES6(10, 20, 30, 40, 50);

//******************************************
// ES6 Voorbeeld 2: rest parameter na afloop van de andere parameters
//******************************************
function restParameterFunction(a, b, ...c) {
	console.log(a); // 100
	console.log(b); // 200
	console.log(c);	// [300, 400, 500]
}

restParameterFunction(100, 200, 300, 400, 500);
*/

//******************************************
// ES6 Voorbeeld 3: Auto object configureren
//******************************************

function Car(merk="onbekend", model="onbekend", ...accessoires){
	this.getDetails = function () {
		console.log('merk: ', merk);
		console.log('model: ', model);
		if (accessoires){
			for (let i of accessoires)
			console.log('accesoire: ', i );
		}
	}
}

let myCar = new Car ('Mercedes', 'SL500', 'navigatie', 'stoelverwarming', 'autopilot');
myCar.getDetails();