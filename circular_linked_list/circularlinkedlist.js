class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CircularLinkedList {

    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    addFirst(value){
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode; // Points to itself - creates the circle
        }else {
            newNode.next = this.head;
            this.head = newNode;
            this.tail.next = this.head; // Maintain the circle
        }
        this.length++;
    }

    addAtEnd(value){
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode; // Points to itself - creates the circle
        }else {
            newNode.next = this.head; // New tail points back to head
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    search(value) {
        if (!this.head) {
            console.log("the list is empty");
            return -1;
        }

        let current = this.head;
        let index = 0;

        // Loop until we come back to head - avoids infinite loop
        while (true) {
            if (current.value == value) return index;
            current = current.next;
            index++;
            if (current === this.head) break;
        }

        return -1;
    }

    print() {
        if (!this.head) {
            console.log("the list is empty");
            return;
        }

        let current = this.head;
        let result = '';

        // Traverse once around the circle
        while (true) {
            result += current.value + ' -> ';
            current = current.next;
            if (current === this.head) break;
        }

        console.log(result + '(back to ' + this.head.value + ')');
    }

    size(){
        return this.length;
    }
}

// Build and test the circular list
let customlist = new CircularLinkedList();

customlist.addAtEnd(10);
customlist.addAtEnd(20);
customlist.addAtEnd(30);
customlist.addAtEnd(40);
customlist.addAtEnd(50);

customlist.addFirst(99);

console.log("The index for the value is: " + customlist.search(30));
console.log("The index for the value is: " + customlist.search(100));

customlist.print();

console.log("The size of the list is: " + customlist.size());