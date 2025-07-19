class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListStack {
    constructor() {
        this.top = null; // Points to the top node of stack
        this.length = 0;
    }

    // Add new element at top of stack (LIFO)
    push(element) {
        const newNode = new Node(element);
        newNode.next = this.top; // Link new node to current top
        this.top = newNode; // Update top pointer
        this.length++;
    }

    // Remove and return top element
    pop() {
        if (this.length == 0) {
            console.log("the stack is empty");
            return null;
        }

        const poppedData = this.top.data;
        this.top = this.top.next; // Move top pointer to next node
        this.length--;
        return poppedData;
    }

    // Look at top element without removing it
    peek() {
        if (this.length == 0) {
            console.log("the stack is empty");
            return null;
        }
        return this.top.data;
    }

    // Find element's position from top of stack
    search(element) {
        if (this.length == 0) {
            console.log("the stack is empty");
            return null;
        }

        let current = this.top;
        let index = 0; // Index 0 is top, increases going down

        // Traverse from top to bottom
        while (current != null) {
            if (current.data == element) {
                return index;
            }
            current = current.next;
            index++;
        }

        console.log("the element is not in the stack");
        return null;
    }

    size() {
        return this.length;
    }
}

// Build linked list stack and test LIFO operations
let linkedStack = new LinkedListStack();

// Pushing creates chain: 50 -> 40 -> 30 -> 20 -> 10 -> null
linkedStack.push(10); // First node (bottom)
linkedStack.push(20);
linkedStack.push(30);
linkedStack.push(40);
linkedStack.push(50); // Top node

console.log(linkedStack.pop()); // Should remove and return 50

console.log(linkedStack.peek()); // Should show 40 (new top)

console.log(linkedStack.search(50)); // Should not find it (was popped)
console.log(linkedStack.search(40)); // Should return 0 (top position)

console.log(linkedStack.size()); // Should be 4 after popping one element