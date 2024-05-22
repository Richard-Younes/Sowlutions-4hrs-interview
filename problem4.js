/** @format */

function isValidBracketSequence(sequence) {
	// initializing an empty stack
	let stack = [];

	// This variable is used to check that the input is a bracket
	let brackets = ['(', ')', '{', '}', '[', ']'];
	// this is the bracket with their corresponding closing brackets
	let bracketsCombination = { '(': ')', '{': '}', '[': ']' };

	for (let index = 0; index < sequence.length; index++) {
		// check that the charachter at the index is a bracket
		if (brackets.includes(sequence[index])) {
			// if this is a opening bracket push to the stack
			if (bracketsCombination[sequence[index]]) {
				stack.push(sequence[index]);

				// else if it's not an opening bracket pop from the stack and compare if they are matching, if not matching return false, if matching continue the loop
			} else {
				const stackPop = stack.pop();
				if (sequence[index] !== bracketsCombination[stackPop]) {
					return false;
				}
			}
		}
	}
	return stack.length === 0;
}

console.log(isValidBracketSequence('()[]{}'));
console.log(isValidBracketSequence('([{}])'));
console.log(isValidBracketSequence('('));
console.log(isValidBracketSequence('[(])'));
console.log(isValidBracketSequence('{[}]'));
