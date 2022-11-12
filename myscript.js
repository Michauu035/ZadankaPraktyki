function handleCalculatorForm(form) {
	let toDisplay = form.inputbox.value;
	document.getElementById('calcResult').innerHTML = calculate(toDisplay, '+-/*');
}

function handlePalindromeForm(form) {
	let formValue = form.inputbox2.value;
	document.getElementById('palindromeResult').innerHTML = palindrome(formValue);
	console.log('wow');
}

function calculate(var1, var2) {
	return 0;
}

function palindrome(var1) {
	let isPalindrome = true;
	let var2 = [];

	for (let i = var1.length - 1; i >= 0; i--) {
		var2.push(var1.charCodeAt(i));
	}
	for (let index = 0; index < var2.length; index++) {
		if (var2[index] != var1.charCodeAt(index)) {
			return false;
		}
	}

	return isPalindrome;
}

function handleAnagramForm(form) {
	let word1 = form.inputbox3.value;
	let word2 = form.inputbox4.value;
	document.getElementById('anagramResult').innerHTML = anagram(word1, word2);
}

function bubbleSort(arr) {
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				var temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}

function anagram(var1, var2) {
	let word1 = [];
	let word2 = [];
	let flag = true;

	word1ASCII = [];
	word2ASCII = [];

	word1 = var1.split('');
	word2 = var2.split('');

	if (word1.length == word2.length) {
		for (let i = 0; i < word1.length; i++) {
			word1ASCII[i] = word1[i].charCodeAt(0);
		}

		for (let i = 0; i < word2.length; i++) {
			word2ASCII[i] = word2[i].charCodeAt(0);
		}

		word1ASCII = bubbleSort(word1ASCII);
		word2ASCII = bubbleSort(word2ASCII);

		console.log(word1ASCII);
		console.log(word2ASCII);

		for (let i = 0; i < word1ASCII.length; i++) {
			if (word1ASCII[i] != word2ASCII[i]) {
				flag = false;
				break;
			}
		}
	} else {
		return false;
	}
	return flag;
}

console.log(anagram('siema', 'siemb'));
console.log('a'.charCodeAt(0));
console.log('b'.charCodeAt(0));
