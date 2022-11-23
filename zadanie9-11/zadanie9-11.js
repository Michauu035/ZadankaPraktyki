// Zadanie 9. (1pkt)
// Stwórz obiekt klasy Promise -> niech zakończy się powodzeniem (resolve) po 5 sekundach i zwróci string 'Udało się!'.
// Jako callback (wywołanie w konsoli) niech wypisze zwrócony string w konsoli.

// Zadanie 10. (2pkt)
// Napisz funkcję multiplyAsync(x,y), która zwraca obiekt klasy Promise, kończący się porażką, gdy któryś za argumentów jest niepoprawny (nie jest liczbą). W przeciwnym przypadku zwraca iloczyn dwóch liczb. Napisz callback (wywołanie w konsoli), który wypisuje wynik w konsoli.

// Zadanie 11. dodatkowe (2pkt)
// Wykonaj funkcję get dla następującego url: https://jsonplaceholder.typicode.com/posts
// Jako pierwszy callback (wywołanie w konsoli) - sprawdź czy response jest poprawny (status równy 200). Jeśli tak, to zwróć response, w przeciwnym wypadku wypisz błąd w konsoli.
// Jako następny callback (wywołanie w konsoli) - użyj destrukturyzacji obiektów, aby wypisać w konsoli zmienną 'title' i 'body' każdego z postów.

var promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('Udało się');
	}, 5000);
})

promise.then((value) => console.log(value))

// Zad 10
var multiplyAsync = (x, y) => new Promise((resolve, reject) => {
	if(isNaN(x) || isNaN(y)) {
		reject("Porażka! Argument nie jest liczbą")
	} else resolve(x*y)
})

multiplyAsync(3, 6).then(value => console.log(value))
multiplyAsync(3, "asd").then(value => console.log(value))

// Zad 11
fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'GET'
})
.then((response) => {
	if (!response.ok) {
		throw new Error("Błąd!!!")
	}
	return response.json()
}).then((json) => {
	[...json].forEach(element => {
		let {title, body} = element
		console.log("Title: " + title + "\n" + "Body: " + body);
	});
})