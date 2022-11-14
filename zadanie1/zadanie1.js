function calculateSum(form) {
	let num1 = parseInt(form.num1.value);
	let num2 = parseInt(form.num2.value);
	document.getElementById('calcResult').innerHTML = num1 + num2;
}

function calculateSubstraction(form) {
	let num1 = parseInt(form.num1.value);
	let num2 = parseInt(form.num2.value);
	document.getElementById('calcResult').innerHTML = num1 - num2;
}
function calculateMultiplication(form) {
	let num1 = parseInt(form.num1.value);
	let num2 = parseInt(form.num2.value);
	document.getElementById('calcResult').innerHTML = num1 * num2;
}
function calculateDivision(form) {
	let num1 = parseInt(form.num1.value);
	let num2 = parseInt(form.num2.value);
	document.getElementById('calcResult').innerHTML = num1 / num2;
}

// DODATKOWE

function handleCalculateLogarithm(form) {
	let x = parseFloat(form.num1.value);
	document.getElementById('calcResult').innerHTML = logarithm(x);
}

function logarithm(x) {
	return x > 1 ? 1 + logarithm(x / 2) : 0;
}

function handleCalculatePower(form) {
	let num1 = parseFloat(form.num1.value);
	let num2 = parseFloat(form.num2.value);
	document.getElementById('calcResult').innerHTML = power(num1, num2);
}

function power(base, expotent) {
	return expotent < 1 ? 1 : base * power(base, expotent - 1);
}

function handleModulo(form) {
	let num1 = parseFloat(form.num1.value);
	let num2 = parseFloat(form.num2.value);
	document.getElementById('calcResult').innerHTML = num1 % num2;
}
