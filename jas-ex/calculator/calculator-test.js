it("should calculate the monthly rate correctly", function () {
	const testValues = {
		amount: 20000,
		years: 30,
		rate: 10,
	};
	expect(calculateMonthlyPayment(testValues)).toBe("175.51");
});

it("should return a result with 2 decimal places", function () {
	const testValues = {
		amount: 20000,
		years: 30,
		rate: 10,
	};
	expect(calculateMonthlyPayment(testValues).toBe("175.51"));
});

/// etc
