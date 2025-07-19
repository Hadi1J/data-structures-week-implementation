class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {

    constructor(){
        this.length = 0;
        this.head = null;
    }

    size(){
        return this.length;
    }

    addAtEnd(value){
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.length++; // Fixed: increment length for first node
        } else {
            // Traverse to find the last node
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
            this.length++;
        }
    }

    addFirst(value){
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.length++; // Fixed: increment length for first node
        } else {
            // Point new node to current head, then update head
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }
    }

    removeAt(index) {
        if (index < 0 || index >= this.length) return null;

        // Special case: removing head node
        if (index === 0) {
            const removed = this.head;
            this.head = this.head.next;
            this.length--;
            return removed.value;
        }

        // Traverse to node before target
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        // Skip over the target node
        const removed = current.next;
        current.next = removed.next;
        this.length--;
        return removed.value;
    }

    // Returns index of first occurrence, -1 if not found
    indexOf(value) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.value === value) return index;
            current = current.next;
            index++;
        }
        return -1; // Value not found
    }

    // Visual representation of the list
    print() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.value + ' → ';
            current = current.next;
        }
        console.log(result + 'null');
    }

    // Get value at specific index
    get(index) {
        if (index < 0 || index >= this.length) return null;

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.value;
    }
}

// Build and test the linked list
let customlist = new LinkedList();

// Adding nodes at the end: 10 → 20 → 30 → 40 → 50
customlist.addAtEnd(10);
customlist.addAtEnd(20);
customlist.addAtEnd(30);
customlist.addAtEnd(40);
customlist.addAtEnd(50);

// Adding at front: 99 → 10 → 20 → 30 → 40 → 50
customlist.addFirst(99);

console.log("the value of the index in the list is : " + customlist.get(3)); // Should be 30

console.log("the index of the value is :" + customlist.indexOf(30)); // Should be 3
console.log("the index of the value is :" + customlist.indexOf(100)); // Should be -1 (not found)

customlist.removeAt(2); // Removes value 20

customlist.print(); // Shows current state of list

console.log("size of the list is : " + customlist.size());