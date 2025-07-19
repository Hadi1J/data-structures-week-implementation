class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;  // The magic - backward connection
    }
}

class DoublyLinkedList {

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
        }else {
            newNode.next = this.head;
            this.head.prev = newNode;  // Connect backward
            this.head = newNode;
        }
        this.length++;
    }

    addAtEnd(value){
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else {
            newNode.prev = this.tail;  // Connect backward
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
        while (current) {
            if (current.value === value) return index;
            current = current.next;
            index++;
        }
        return -1;
    }

    print() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.value + ' <-> ';
            current = current.next;
        }
        console.log(result + 'null');
    }

    size(){
        return this.length;
    }
}

// Build and test the doubly linked list
let customlist = new DoublyLinkedList();

customlist.addAtEnd(10);
customlist.addAtEnd(20);
customlist.addAtEnd(30);
customlist.addAtEnd(40);
customlist.addAtEnd(50);

customlist.addFirst(99);

console.log("Searching for value 30: " + customlist.search(30));
console.log("Searching for value 100: " + customlist.search(100));

customlist.print();

console.log("Size of the list is: " + customlist.size());