module.exports = function zeros(expression) {
	let exp = expression.split(/[*]+/);
	let returned = '';

	let zeros = {
		two: 0,
		five: 0
	};

	const REGEX_TWO = RegExp('!!');
	const REGEX_ONE = RegExp('!');


	for (let i = 0; i < exp.length; i++) {
		let tmp = exp[i].replace(/[^-0-9]/gim,'');

		if (REGEX_TWO.test(exp[i])) {
			returned = doubleFactorial(tmp);

			zeros.two += returned.two;
			zeros.five += returned.five;
		}

		else if (REGEX_ONE.test(exp[i])) {
			returned = zeroCounter(tmp);

			zeros.two += returned.two;
			zeros.five += returned.five;
		}
	}

	return Math.min(zeros.two, zeros.five);
}

function zeroCounter(n) {
    let twoCounter = 0;
	let fiveCounter = 0;

	for(let i = 1; i <= n; i++) {
		
		if (i % 2 == 0)  { twoCounter++; }	
		if (i % 4 == 0)  { twoCounter++; }
		if (i % 8 == 0)  { twoCounter++; }

		if (i % 5  == 0) { fiveCounter++; }
		if (i % 25 == 0) { fiveCounter++; }
	}

	return { 
		two: twoCounter,
		five: fiveCounter
	};

}

function doubleFactorial(n) {
	let twoCounter = 0;
	let fiveCounter = 0;
	
	if (n % 2 == 0) {
		for(let i = 2; i <= n; i += 2) {
			
			if (i % 2  == 0) { twoCounter++; }
			if (i % 4  == 0) { twoCounter++; }
			if (i % 8  == 0) { twoCounter++; }
			if (i % 10 == 0) { fiveCounter++ }
			if (i % 25 == 0) { fiveCounter++ }
		}
	}

	else {
		for (let i = 1; i <= n; i += 2) {

			if (i % 5  == 0) { fiveCounter++; }
			if (i % 25 == 0) { fiveCounter++; }
		}
	}
	
	return { 
		two: twoCounter,
		five: fiveCounter
	};
}