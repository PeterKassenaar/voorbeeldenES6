//Using Sets (*Simple example)
var set = new Set();
set.add('Finance');
set.add('Staff');
set.add('HR');
console.log(set);
console.log('\n');

// num items in set
console.log('num items in set:', set.size);
console.log('\n');

// duplicates are ignored:
var colorSet = new Set(['red', 'green', 'green', 'blue', 'blue', 'yellow', 'red']);
console.log('items in colorSet: ', colorSet);
console.log('\n');

// new Set() HAS to have zero or one parameters. The parameter must be iterable
// so this is invalid:	var s = new Set('item1', 'item2').
// this is correct: 	var s = new Set(['item1', 'item2])
// or: 					var s = new Set([{'name' : 'Peter'}]);
