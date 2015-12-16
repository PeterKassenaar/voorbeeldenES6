var age = 55;

// Old: using var
for (var j = 0; j < 5; j++) {
	age += 5;
}

try {
	console.log('j still exists: ', j);
} catch (e) {
	console.log('j is out of scope');
}

// New: Using let
for (let i = 0; i < 5; i++) {
	age += 5;
}

try {
	console.log(i);
} catch (e) {
	console.log('i is out of scope due to using let!');
}

// const
let foo = 'foo';
foo = 'bar';
console.log(foo); // 'bar'

const bar = 'baz';
//bar = 'qux'; // TypeError: "bar is read-only"