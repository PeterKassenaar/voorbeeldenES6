/*****************************
 * Maps
 * Online documentatie: https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Map
 ******************************/
console.group('Map');
let map = new Map();
map.set('Financien', 'Rekeningen verwerken');
map.set('HR', 'Human Resources en personeelsbeleid');
map.set('HR', 'Human Resources en personeelsbeleid'); //Duplicaat genegeerd
map.set('CEO', 'Peter Kassenaar');
map.set('CTO', 'Tommy de Tester');
console.log('Wat zit er in HR? : ' + map.get('HR'));
console.log('Omvang van Map: ', map.size);

if (map.has('CEO')) {
	console.log('Gevonden! CEO: ', map.get('CEO'));
}
map.delete('Financien'); //Enkel item verwijderen
// over complete map itereren:
for (let entry of map.entries()) {
	console.log('entry: ', entry[0], entry[1]);
}
console.groupEnd('Map');

/*****************************
 * Sets
 * Online documentatie: https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Set
 ******************************/
console.group('Set');
let kleurArray = ['red', 'green', 'green', 'blue', 'blue', 'blue', 'yellow', 'red'];
// duplicaten niet toegestaan in een set
let colorSet = new Set(kleurArray);
console.log('items in colorSet: ', colorSet);
console.groupEnd('Set');