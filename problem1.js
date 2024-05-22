/** @format */

// Creating the function that will return true if the email is valid and false if the email is not valid

function validEmail(email) {
	// Checking that the input given to the function is a string
	if (typeof email !== 'string') return false;

	// Removing any additional spaces at the beginning or end of the string

	// we can use the trim() but this is a built in method
	// let trimmedEmail = email.trim();

	let trimmedEmail = email;

	// Remove spaces from the beginning of the string
	while (trimmedEmail[0] === ' ') {
		trimmedEmail = trimmedEmail.slice(1);
	}

	// Remove spaces from the end of the string
	while (trimmedEmail[trimmedEmail.length - 1] === ' ') {
		trimmedEmail = trimmedEmail.slice(0, -1);
	}

	// Check if the email is less than 6 characters or more than 256 and then returns false
	if (trimmedEmail.length < 6 || trimmedEmail.length > 256) return false;

	// Check if there are empty spaces inside the email
	if (trimmedEmail.includes(' ')) return false;

	// Checking if the first or last characters are the '@', or if the email does not include the '@' charachter
	if (
		!trimmedEmail.includes('@') ||
		trimmedEmail[0] === '@' ||
		trimmedEmail[trimmedEmail.length - 1] === '@'
	)
		return false;

	// Checking if the first or last characters are the '.', or if the email does not include the '.' charachter
	if (
		!trimmedEmail.includes('.') ||
		trimmedEmail[0] === '.' ||
		trimmedEmail[trimmedEmail.length - 1] === '.'
	)
		return false;

	// get the characters after the @ and return false if there are no '.'
	let indexOfSpecial = trimmedEmail.indexOf('@');
	let afterSpecialSubstring = trimmedEmail.slice(indexOfSpecial, -1);
	if (!afterSpecialSubstring.includes('.')) return false;

	// This variable is used to check for multiple @ charachters in the string
	let multipleSpecial = 0;

	let isValidAfterDot = false;
	for (let i = 0; i < trimmedEmail.length - 1; i++) {
		let j = i + 1;

		// Search for all the @ charachters and increment the value of multipleSpecial
		if (trimmedEmail[i] === '@') {
			multipleSpecial++;
		}

		// If there is more than 1 '@' return false
		if (multipleSpecial > 1) {
			return false;
		}

		// Checking if the '.' is directly followed or preceded by the '@', and return false if it is
		if (
			(trimmedEmail[i] === '.' && trimmedEmail[j] === '@') ||
			(trimmedEmail[i] === '@' && trimmedEmail[j] === '.')
		)
			return false;

		if (trimmedEmail[i] === '.') {
			let temp = trimmedEmail.slice(i + 1, trimmedEmail.length);
			if (temp.length === 3) isValidAfterDot = true;
		}
	}
	if (!isValidAfterDot) return false;
	return true;
}

console.log(validEmail('@.com'));
console.log(validEmail('1@.com'));
console.log('-------------------------');
console.log(validEmail('jhon.doe@gmail.com'));
console.log(validEmail('jhson@doe@gmail.com'));
console.log(validEmail('jhon@gmail.c'));
console.log(validEmail('jhon@.com'));
