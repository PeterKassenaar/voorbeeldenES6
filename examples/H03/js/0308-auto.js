// 0308-auto.js

class Auto {
	constructor(merk, wielen) {
		this._merk = merk;
		this._wielen = wielen;
	}

	// Getter en Setter voor Merk
	get merk() {
		return this._merk;
	}

	set merk(value) {
		this._merk = value;
	}

	// Getter voor wielen (geen setter, aantal kan dus niet via officiele wijze aangepast worden.
	get wielen(){
		return this._wielen;
	}


	start() {
		console.log(`${this.merk} is gestart`);
	}
}

class Vrachtwagen extends Auto{
	constructor(merk, wielen, kleur){
		super(merk, wielen);
		this._kleur = kleur;
	}

	get kleur(){
		return this._kleur;
	}
	set kleur(value){
		this._kleur = value;
	}

}

// Auto rechtstreeks gebruiken
let auto = new Auto('Ford', 4);
console.log(`Het merk van mijn auto is: ${auto.merk}, hij heet ${auto.wielen} wielen`);
auto.start();

// Afgeleide klasse Vrachtwagen gebruiken
let vrachtwagen = new Vrachtwagen('DAF', 16, 'rood');
console.log(`Mijn vrachtwagen is een ${vrachtwagen.merk}, heeft ${vrachtwagen.wielen} wielen en hij is ${vrachtwagen.kleur}`);
vrachtwagen.start();