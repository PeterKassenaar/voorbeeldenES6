// class example - base class
class BaseLog {
	constructor() {
		this.logName = 'Log1';
	}

	log(msg) {
		console.log(this.logName + ': ' + msg);
	}
}

// subclass, inherits from base class
class Logger extends BaseLog {

	constructor(logName) {
		super(logName);
	}

	writeLine(msg) {
		super.log(msg + '\r\n');
	}
}

// new base class, with getters and setters
class Auto{
	_engine; // 'property', or 'field', or whatever
	constructor(engine){
		this._engine = engine;
	}

	get engine(){
		return this._engine;
	}
	set engine(val){
		this._engine = val;
	}
	start (){
		console.log('Engine started: ', this._engine);
	}
}
var mercedes = new Auto('V8');
mercedes.start();
console.log('Mercedes engine: ', mercedes.engine);