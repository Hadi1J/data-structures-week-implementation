class Queue {
    constructor() {
        this.elements = [];
        this.length = 0;
    }

    enqueue(element) {
        this.elements[this.length] = element;
        this.length++;
    }

    dequeue() {
        if (this.length === 0) {
            console.log("the queue is empty");
            return null;
        }

        const dequeuedElement = this.elements[0];


        for (let i = 0; i < this.length - 1; i++) {
            this.elements[i] = this.elements[i + 1];
        }

        this.length--;
        return dequeuedElement;
    }

    peek() {
        if (this.length === 0) {
            console.log("the queue is empty");
            return null;
        }
        return this.elements[0];
    }

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

    removal(element) {
        if (this.length === 0) {
            console.log("the queue is empty");
            return false;
        }

        let found = false;
        for (let i = 0; i < this.length; i++) {
            if (this.elements[i] === element) {

                for (let j = i; j < this.length - 1; j++) {
                    this.elements[j] = this.elements[j + 1];
                }
                this.length--;
                found = true;
                break;
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

let queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

console.log("Dequeued element: " + queue.dequeue());

console.log("Peek: " + queue.peek());

console.log("Contains 30: " + queue.contains(30));
console.log("Contains 100: " + queue.contains(100));

console.log("Remove 30: " + queue.removal(30));
console.log("Remove 100: " + queue.removal(100));

console.log("Is empty: " + queue.isEmpty());

queue.print();

console.log("Size: " + queue.size());