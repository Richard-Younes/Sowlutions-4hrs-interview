/** @format */

class Node {
	constructor(data) {
		this.value = data;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	addNode(data) {
		const newNode = new Node(data);

		if (!this.head) {
			this.head = newNode;
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = newNode;
		}
	}

	removeNodes(data) {
		// Not optimal way by removing the hole linked list and creating a new one
		// let current = this.head;
		// let newNodeValues = [];
		// while (current) {
		// 	if (current.value <= data) {
		// 		newNodeValues.push(current.value);
		// 	}
		// 	current = current.next;
		// }
		// this.head = null;
		// this.next = null;
		// if (newNodeValues.length !== 0) {
		// 	for (let i = 0; i < newNodeValues.length; i++) {
		// 		this.addNode(newNodeValues[i]);
		// 	}
		// }

		// Optimal
		let current = this.head;
		let previous = null;
		while (current) {
			if (current.value > data) {
				if (previous) {
					// Skip over the current node
					previous.next = current.next;
				} else {
					// If there's no previous node the head is equal to the next
					this.head = current.next;
				}
			} else {
				// the previous equal current when not updating the node
				previous = current;
			}

			current = current.next;
		}
	}

	print() {
		let current = this.head;
		let result = '';

		while (current) {
			result += current.value + ' -> ';
			current = current.next;
		}
		result += 'null';
		console.log(result);
	}
}

// Example usage:
const list = new LinkedList();
list.addNode(10);
list.addNode(5);
list.addNode(12);
list.addNode(7);
list.addNode(3);
list.addNode(9);
list.addNode(10);
list.print();
list.removeNodes(7);
list.print();
