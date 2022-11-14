function writeRange(a, b) {
	console.log(a);
	return a >= b ? b : writeRange(a + 1, b);
}

console.log('Zadanie 4');
writeRange(1, 5);
console.log('=========');
writeRange(8, 11);
console.log('=========');
