function binarySearch(list, start, stop, search) {
	if(start > stop) { return "Nie ma elementu w ciągu"}
	else {
		let q = parseInt((start + stop) / 2);
		if (list[q] === search) {
			return q;
		}

		if (list[q] > search) {
			return binarySearch(list, start, q-1, search)
		} else if (list[q] < search) {
			return binarySearch(list, q+1, stop, search)
		}
	}
}

var lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

binaryResult.innerHTML += binarySearch(lista, 0, lista.length - 1, 1)
binaryResult.innerHTML += "<br>" + binarySearch(lista, 0, lista.length - 1, 31)