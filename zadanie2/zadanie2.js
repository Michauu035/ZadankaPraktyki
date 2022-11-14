function handlePalindromeForm(form) {
	let formValue = form.inputbox2.value;
	document.getElementById('palindromeResult').innerHTML =
		'Is palindrome?: ' + palindrome(formValue);
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
