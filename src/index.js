module.exports = function toReadable (number) {
  // let units = parseInt(number%10)
	// console.log(units);

	let units = parseInt(number % 10),
			twenty = parseInt(number % 20),
			thens = parseInt((number % 100) / 10),
			hundred = parseInt(number / 100),
			result = '';

	if (hundred) {
		switch(hundred) {
			case 1: result += 'one' + ' hundred'
			break;
			case 2: result += 'two' + ' hundred'
			break;
			case 3: result += 'three' + ' hundred'
			break;
			case 4: result += 'four' + ' hundred'
			break;
			case 5: result += 'five' + ' hundred'
			break;
			case 6: result += 'six' + ' hundred'
			break;
			case 7: result += 'seven' + ' hundred'
			break;
			case 8: result += 'eight' + ' hundred'
			break;
			case 9: result += 'nine' + ' hundred'
			break;			
		}
		if (thens || twenty) {
			result += ' '
		}
	}



	if (thens >= 2 && thens <= 9) {
		switch(thens) {
			case 2: result += 'twenty'
			break;
			case 3: result += 'thirty'
			break;
			case 4: result += 'forty'
			break;
			case 5: result += 'fifty'
			break;
			case 6: result += 'sixty'
			break;
			case 7: result += 'seventy'
			break;
			case 8: result += 'eighty'
			break;
			case 9: result += 'ninety'
			break;
		}
		if (units) {
			result += ' '
		}
	} else if (thens == 1) {
		switch(twenty) {
		case 10: result += 'ten'
		break;
		case 11: result += 'eleven'
		break;
		case 12: result += 'twelve'
		break;
		case 13: result += 'thirteen'
		break;
		case 14: result += 'fourteen'
		break;
		case 15: result += 'fifteen'
		break;
		case 16: result += 'sixteen'
		break;
		case 17: result += 'seventeen'
		break;
		case 18: result += 'eighteen'
		break;
		case 19: result += 'nineteen'
		break;
	}
	} 
	if (units && thens != 1) {
				switch(units) {
					case 1: result += 'one'
					break;
					case 2: result += 'two'
					break;
					case 3: result += 'three'
					break;
					case 4: result += 'four'
					break;
					case 5: result += 'five'
					break;
					case 6: result += 'six'
					break;
					case 7: result += 'seven'
					break;
					case 8: result += 'eight'
					break;
					case 9: result += 'nine'
					break;
				}
	}
	if (number == 0) {
		result += 'zero'
	}

	// console.log(hundred, thens, twenty, units);
	return result;
}