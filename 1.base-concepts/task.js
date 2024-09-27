"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let d = Math.pow(b, 2) - 4 * a * c;

	if (d === 0) {
		let root = -b / (2 * a);
		arr.push(root);
	} else if (d > 0) {
		let root1 = (-b + Math.sqrt(d)) / (2 * a);
		let root2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(root1, root2);
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let interes = percent / 100 / 12;

	let principal = amount - contribution;

	let monthlyPayment = principal * (interes + interes / ((1 + interes) ** countMonths - 1));

	let total = monthlyPayment * countMonths;

	return parseFloat(total.toFixed(2));
}