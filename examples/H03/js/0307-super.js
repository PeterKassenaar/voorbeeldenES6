// 0307-super.js

// 1. Basisklasse met constructor. Roep deze aan
// via super() van de afgeleide klassen
class BaseLog {
	constructor(name) {
		this.name = name;
	}

	log(msg, type) {
		return `Naam: ${this.name}, ${type} : ${msg}`;
	}
}

// 2. Subklasse, of afgeleide klasse met BaseLog als base class
class WarningLog extends BaseLog {
	constructor() {
		super('BaseLog'); //super() moet worden aangeroepen, anders is this.name niet bekend
		console.log('Naam: ', this.name);
	}

	warn(msg, type) {
		// roep algemene methode aan op de base class via super()
		console.warn(super.log(msg, type));
	}
}

// 4. Implementatie
let warning = new WarningLog();

warning.warn('Dit is een waarschuwing', 'warning');
