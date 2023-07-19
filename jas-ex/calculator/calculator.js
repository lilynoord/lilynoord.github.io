window.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("calc-form");
	if (form) {
		setupIntialValues();
		form.addEventListener("submit", function (e) {
			e.preventDefault();
			update();
		});
	}
});

function getCurrentUIValues() {
	return {
		amount: +document.getElementById("loan-amount").value,
		years: +document.getElementById("loan-years").value,
		rate: +document.getElementById("loan-rate").value,
	};
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
	let amount = document.getElementById("loan-amount");
	let years = document.getElementById("loan-years");
	let rate = document.getElementById("loan-rate");
	amount.value = 10000;
	years.value = 8;
	rate.value = 5.8;
	update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
	let values = getCurrentUIValues();
	let monthlyPayment = calculateMonthlyPayment(values);
	let monthlyPaymentDisplay = document.getElementById("monthly-payment");
	monthlyPaymentDisplay.innerText = monthlyPayment;
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
	let principal = values.amount;
	let term = values.years;
	let rate = values.rate;
	rate = rate / 100 / 12;
	let upper = principal * rate;
	let lower = 1 - Math.pow(1 + rate, -term * 12);
	let monthlyPayment = upper / lower;
	return monthlyPayment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {}
