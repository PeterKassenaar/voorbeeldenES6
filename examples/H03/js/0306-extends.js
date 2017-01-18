// 0306-extends.js

// 1. Basisklasse met gemeenschappelijke functionaliteit
class BaseLog{
	log(msg, type){
		return `${type} : ${msg}`;
	}
}


// 2. Subklasse, of afgeleide klasse met BaseLog als base class
class WarningLog extends BaseLog{
	warn(msg, type){
		// roep algemene methode aan op de base class via super()
		console.warn(super.log(msg, type));
	}
}

// 3. Subklasse, of afgeleide klasse met BaseLog als base class
class InfoLog extends BaseLog{
	info(msg, type){
		console.info(super.log(msg, type));
	}
}


// 4. Implementatie
let warning = new WarningLog();
let info=new InfoLog();

warning.warn('Dit is een waarschuwing', 'warning');
info.info('Dit is een informatieve melding', 'info');