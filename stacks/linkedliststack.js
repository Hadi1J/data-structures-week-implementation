class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListStack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(element) {
        const newNode = new Node(element);
        newNode.next = this.top;
        this.top = newNode;
        this.length++;
    }

    pop() {
        if (this.length == 0) {
            console.log("the stack is empty");
            return null;
        }
        const poppedData = this.top.data;
        this.top = this.top.next;
        this.length--;
        return poppedData;
    }

    peek() {
        if (this.length == 0) {
            console.log("the stack is empty");
            return null;
        }
        return this.top.data;
    }

    search(element) {
        if (this.length == 0) {
            console.log("the stack is empty");
            return null;
        }

        let current = this.top;
        let index = 0;

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

let linkedStack = new LinkedListStack();

linkedStack.push(10);
linkedStack.push(20);
linkedStack.push(30);
linkedStack.push(40);
linkedStack.push(50);

console.log(linkedStack.pop());

console.log(linkedStack.peek());

console.log(linkedStack.search(50));

console.log(linkedStack.size());