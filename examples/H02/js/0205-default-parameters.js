// Default parameters in ES6

// 1.  ES5 : geen standaardwaarden voor parameters mogelijk.
// Vaak daarom - type- en valuechecking binnen de functie.
function addES5(x, y) {
    x = x || 0;
    y = y || 0;
    return x + y;
}

// 2. ES6: de parameters x en y hebben een standaardwaarde
function addES6(x = 0, y = 0) {
    return x + y;
}

// invoking:
console.log(addES5(10, 10));// 20
console.log(addES5());		// 0, Indien we niet aan parameterchecking hadden gedaan zou NaN zijn geretourneerd.
console.log(addES6(20, 20));// 40
console.log(addES6());		// 0

// 3. Uitgebreider voorbeeld, met ES6 class
class Car {
    currentYear() {
        return new Date().getFullYear();
    }

    // all parameters have defaults
    setDetails(make = 'No Make', model = 'No Model', year = this.currentYear()) {
        console.log(make + ' ' + model + ' ' + year);
    }
}

var car = new Car();

//Testing default parameters
car.setDetails('Toyota', 'Tundra');
car.setDetails();
