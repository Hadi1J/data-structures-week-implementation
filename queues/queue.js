class Queue {
    constructor() {
        this.elements = [];
        this.length = 0;
    }

    // Add element to the rear of queue (FIFO)
    enqueue(element) {
        this.elements[this.length] = element;
        this.length++;
    }

    // Remove and return element from front of queue
    dequeue() {
        if (this.length === 0) {
            console.log("the queue is empty");
            return null;
        }

        const dequeuedElement = this.elements[0];

        // Shift all elements left to fill the gap
        for (let i = 0; i < this.length - 1; i++) {
            this.elements[i] = this.elements[i + 1];
        }

        this.length--;
        return dequeuedElement;
    }

    // Look at front element without removing it
    peek() {
        if (this.length === 0) {
            console.log("the queue is empty");
            return null;
        }
        return this.elements[0];
    }

    // Search for element in the queue
    contains(element) {
        if (this.length === 0) {
            console.log("the queue is empty");
            return false;
        }

        for (let i = 0; i < this.length; i++) {
            if (this.elements[i] === element) {
                return true;
            }
        }
        return false;
    }

    // Remove specific element from anywhere in queue
    removal(element) {
        if (this.length === 0) {
            console.log("the queue is empty");
            return false;
        }

        let found = false;
        for (let i = 0; i < this.length; i++) {
            if (this.elements[i] === element) {
                // Shift elements left to close the gap
                for (let j = i; j < this.length - 1; j++) {
                    this.elements[j] = this.elements[j + 1];
                }
                this.length--;
                found = true;
                break; // Remove only first occurrence
            }
        }

        if (!found) {
            console.log("the element is not in the queue");
        }
        return found;
    }

    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }

    // Visual representation showing queue direction
    print() {
        if (this.length === 0) {
            console.log("the queue is empty");
            return;
        }

        let result = 'Front -> ';
        for (let i = 0; i < this.length; i++) {
            result += this.elements[i] + ' -> ';
        }
        console.log(result + 'Rear');
    }
}

// Build queue and test FIFO operations
let queue = new Queue();

// Adding elements to rear: 10, 20, 30, 40, 50
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

console.log("Dequeued element: " + queue.dequeue()); // Should remove 10 from front

console.log("Peek: " + queue.peek()); // Should show 20 (new front)

console.log("Contains 30: " + queue.contains(30)); // Should find it
console.log("Contains 100: " + queue.contains(100)); // Should not find it

console.log("Remove 30: " + queue.removal(30)); // Should remove from middle
console.log("Remove 100: " + queue.removal(100)); // Should not find it

console.log("Is empty: " + queue.isEmpty());

queue.print(); // Shows current queue state

console.log("Size: " + queue.size());