function findSndLargest(array) {
	let temp = array[0];
	let id = 0;
	if (typeof temp == 'string') {
		temp = temp.length;
	}
	let max = temp;

	// max
	for (let index = 0; index < array.length; index++) {
		let element = array[index];
		if (typeof element == 'string') element = element.length;
		if (max < element) max = element;
	}

	// snd max
	for (let index = 0; index < array.length; index++) {
		let element = array[index];
		if (typeof element == 'string') element = element.length;
		if (temp < element && element < max) {
			temp = element;
			id = index;
		}
	}

	return typeof array[id] == 'string' ? array[id] : temp;
}

console.log('snd largest: ');
console.log(findSndLargest([1, 5, 10, 15]));
console.log(findSndLargest([1, 1, 3, 3, 4, 4]));
console.log(findSndLargest(['ala', 'robert', 'stanislaw']));

result.innerHTML +=
	findSndLargest([1, 5, 10, 15]) +
	'<br>' +
	findSndLargest([1, 1, 3, 3, 4, 4]) +
	'<br>' +
	findSndLargest(['ala', 'robert', 'stanislaw']);
