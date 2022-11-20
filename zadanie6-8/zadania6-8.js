// Zad6. (2 pkt)
// Stwórz kompozycję która na tablicy „books” zlicza ilość słów w tytule (title) nie licząc spacji, gdzie
// strony (pages) są parzyste oraz genre kończy się na literkę „y”.

// Zad7. (2 pkt)
// Stwórz kompozycję która na tablicy „books” zlicza ilość pozytywnych ocen (rating > 5), gdzie
// strony (pages) są liczbą nieparzystą oraz tytuł (title) zawiera liczbę.

// Zad8. (2 pkt)
// Stwórz kompozycję która na tablicy „books” zwraca drugi najdłuższy tytuł (title).

const books = [
    {title: 'Total loss', pages: 600, genre: 'fantasy', rating: 5},
    {title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 2},
    {title: 'Big loss', pages: 400, genre: 'fantasy', rating: 7},
    {title: '10th Joy', pages: 32, genre: 'action', rating: 8},
    {title: 'Quickfix', pages: 15, genre: 'fantasy', rating: 1},
    {title: 'World Ender', pages: 199, genre: 'fantasy', rating: 3},
    {title: 'Paranormal', pages: 200, genre: 'thriller', rating: 9},
    {title: '300', pages: 600, genre: 'criminology', rating: 10},
    {title: 'Renewer', pages: 472, genre: 'biology', rating: 2},
];

const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);

// Zad 6
const countLetters = (list) => {
	let temp = JSON.parse(JSON.stringify(list))
	temp.forEach(book => {
		let sum = 0;
		let words = book.title.split(' ')
		words.forEach(element => {
			sum += element.length
		});
		book.letters = sum
	});
	return temp
}

const filterPagesAreEven = (list) => list.filter(x => x.pages % 2 == 0)
const filterGenreEndsWithY = (list) => list.filter(x => x.genre.slice(-1) === 'y')
const countLettersOfSpecificBooks = compose(countLetters, filterPagesAreEven, filterGenreEndsWithY)

console.log(countLettersOfSpecificBooks(books));


// Zad 7
const filterGoodRatings = (books) => books.filter(book => book.rating > 5)
const filterPagesAreUneven = (books) => books.filter(x => x.pages % 2 != 0)
const filterTitleHasNumber = (books) => books.filter(book => /[0-9]/.test(book.title))

const filterGoodBooksWithUnevenPagesAndNumberInTitle = compose(filterGoodRatings, filterPagesAreUneven, filterTitleHasNumber)
console.log(filterGoodBooksWithUnevenPagesAndNumberInTitle(books));

// Zad 8
const getSecondLongest = (array) => {
	let arr = [...array]
	arr.sort((a, b) => a.title.length - b.title.length).reverse()
	return arr.length > 1 ? arr[1] : arr[0]
}

console.log(getSecondLongest(books));

//PRZYKŁADY:
//tworzymy funkcje
const filterTitleStartsWithTotal = (list) => list.filter((book) => book.title.startsWith('Total'));
const filterGenreIsFantasy = (list) => list.filter((book) => book.genre === 'fantasy');
const mapToPages = (list) => list.map(({pages}) => pages);
const sumPages = (book) => book.reduce((currSum, newPage) => currSum + newPage)
//tworzymy kompozycje
const badCompose = (fn1, fn2, fn3) => (x) => fn3(fn2(fn1(x)));
//tworzymy funkcję używającą kompozycji
const titleStartsWithTotalPages = compose(sumPages, mapToPages, filterTitleStartsWithTotal);
const genreIsFantasyPages = compose(sumPages, mapToPages, filterGenreIsFantasy);
//wypisujemy dla książek
console.log(titleStartsWithTotalPages(books));
console.log(genreIsFantasyPages(books));
