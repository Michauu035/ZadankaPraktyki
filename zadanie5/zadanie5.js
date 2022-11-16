/*
Zadanie 5 (5pkt)
Przerabiamy zadanie ze spotkania 2 na funkcyjne

Używając funkcji strzałkowych (funkcje jako zmienne):
1.  ... / .concat()   -  łączenie tablic arr1 oraz arr2
2.  ... i .reverse()  -  ostatni element w tablicy
3.  .filter()         -  zastosuj filter w tablicy arr2
Mała pomoc:
const filterArray = (array, arg) => array.filter(

);
4.  .reduce()         -  suma elementów w tablicy numbers
5.  .map()            -  .map() po tablicy numbers i każdy element n^2+3

Zadanie dodatkowe (3pkt):
1. Dodaj drugą funkcję strzałkową używając .filter(), która odnajdzie tylko imiona w arr2, które mają mniej lub równo 5 liter i kończą się na 'ek'  1pkt
2. Dodaj drugą funkcję strzałkową używając .filter(), która odnajdzie wyłącznie liczby parzyste w numbers  1pkt
3. Napisz funkcję rekurencyjną strzałkową, która odnajdzie najmniejszy element w tablicy numbers  1pkt
*/

const arr1 = ["Anna", "Maria"];
const arr2 = ["Adam", "Marek", "Bartek", "Tomek"];
const numbers = [1, 2, 3, 4, 5];

// 1
const joinArrays = (array1, array2) => [...array1, array2]
console.log("=== Zad 1 ===");
console.log(joinArrays(arr1, arr2));

// 2
const lastElement = (array) => {
	[last] = [...array].reverse();
	return last;
}
console.log("=== Zad 2 ===");
console.log(lastElement(arr2));

//3
const filterArray = (array, arg) => array.filter(x => x == arg)
console.log("=== Zad 3 ===");
console.log(filterArray(arr2, "Bartek"));

//4
const sumArray = (array) => array.reduce((previous, current) => previous + current, 0)
console.log("=== Zad 4 ===");
console.log(sumArray(numbers));

//5
const mapArray = (array) => array.map(x => x * x + 3)
console.log("=== Zad 5 ===");
console.log(mapArray(numbers));

// Dodatkowe 1
const filterImiona = (array) => array.filter(x => x.length <= 5 && x.slice(-2) == 'ek')
console.log("=== Dodatkowe 1 ===");
console.log(filterImiona(arr2));

//Dodatkowe 2
console.log("=== Dodatkowe 2 ===");
const filterEven = (array) => array.filter(x => x % 2 == 0)
console.log(filterEven(numbers));

//Dodatkowe 3
console.log("=== Dodatkowe 3 ===");
const min = (array, size) => {
	if (size == 1) return array[0]

	if(array[size - 1] < min(array, size - 1))
		return array[size - 1]
	else
		return min(array, size - 1)
}
console.log(min(numbers, numbers.length));