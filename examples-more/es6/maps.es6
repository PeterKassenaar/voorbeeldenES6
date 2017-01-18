//Using Map (*Simple example)
var map = new Map();
map.set('Finance','Process bills');
map.set('HR', 'Human Resources and Healthcare');
map.set('HR', 'Human Resources and Healthcare'); //Duplicate ignored
map.set('CEO', 'Peter Kassenaar');
map.set('CTO', 'Tommy de Tester');
console.log('Getting HR: ' + map.get('HR'));
console.log(map.size);

if (map.has('Finance')){
    console.log('Found it!');
}
map.delete('Finance'); //Delete single item

// iterate over all keys
for (let k of map.keys()){
    console.log('key: ', k);
}
console.log('\n');

// iterate over all values
for (let v of map.values()){
	console.log('value: ', v);
}
console.log('\n');

// iterate over all entries
for (let e of map.entries()){
	console.log('entry: ', e[0], e[1]);
}
console.log('\n');
// OR: use a destructuring technique
for (let [key, value] of map.entries()){
	console.log('entry via destructuring: ', key, value);
}
map.clear(); //Clear all items
