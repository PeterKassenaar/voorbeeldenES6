// De parameter z is optioneel.
function addES6(x = 0, y = 0, z = undefined) {
	// z is expliciet undefined. Alsnog checking noodzakelijk, anders wordt onbedoeld NaN geretourneerd.
	z = z || 0;
	return x + y + z;
}
console.log(addES6(10,20));