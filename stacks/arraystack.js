class ArrayStack {
    constructor(){
        this.elements = [];
    }

    // Add element to top of stack (LIFO)
    push(element) {
        this.elements[this.elements.length] = element;
    }

    // Remove and return top element
    pop(){
        if (this.elements.length == 0) {
            console.log("the stack is empty");
            return null;
        }
        return this.elements.pop(); // Built-in pop removes last element
    }

    // Look at top element without removing it
    peek(){
        if (this.elements.length == 0) {
            console.log("the stack is empty");
            return null;
        }
        return this.elements[this.elements.length - 1]; // Last element is top
    }

    // Find element's position from bottom of stack
    search(element){
        if (this.elements.length == 0) {
            console.log("the stack is empty");
            return null;
        } else if(this.elements.indexOf(element) == -1) {
            console.log("the element is not in the stack");
        } else {
            return this.elements.indexOf(element); // Returns index from bottom
        }
    }

    size(){
        return this.elements.length;
    }
}

// Build stack and test LIFO operations
let arrstack = new ArrayStack();

// Pushing elements - last in, first out
arrstack.push(10); // Bottom
arrstack.push(20);
arrstack.push(30);
arrstack.push(40);
arrstack.push(50); // Top

console.log(arrstack.pop()); // Should remove and return 50

console.log(arrstack.peek()); // Should show 40 (new top)

console.log(arrstack.search(50)); // Should not find it (was popped)
console.log(arrstack.search(40)); // Should return index 3

console.log(arrstack.size()); // Should be 4 after popping one element