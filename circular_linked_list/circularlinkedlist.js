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
            newNode.next = newNode;
        }else {
            newNode.next = this.head;
            this.head = newNode;
            this.tail.next = this.head;
        }
        this.length++;
    }

    addAtEnd(value){
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode;
        }else {
            newNode.next = this.head;
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

    size(){
        return this.length;
    }

}

let customlist = new CircularLinkedList();

customlist.addAtEnd(10);
customlist.addAtEnd(20);
customlist.addAtEnd(30);
customlist.addAtEnd(40);
customlist.addAtEnd(50);

customlist.addFirst(99);

console.log("the index for the value is : " + customlist.search(30));
console.log("the index for the value is : " + customlist.search(100));

customlist.print();

console.log("the size of the list is : " + customlist.size());