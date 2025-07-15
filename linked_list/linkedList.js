class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {

    constructor(){
        this.length = 0;
        this.head =null;
    }

    size(){
        return this.length;
    }

    addAtEnd(value){
        const newNode = new Node(value);

        if(!this.head){
            this.head =newNode;
        }else {
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next =newNode
            this.length++;

        }

    }

    addFirst(value){
        const newNode = new Node(value);

        if(!this.head){
            this.head =newNode;
        }else {
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }


    }

    removeAt(index) {
        if (index < 0 || index >= this.length) return null;

        if (index === 0) {
            const removed = this.head;
            this.head = this.head.next;
            this.length--;
            return removed.value;
        }

        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        const removed = current.next;
        current.next = removed.next;
        this.length--;
        return removed.value;
    }

    indexOf(value) {
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
            result += current.value + ' → ';
            current = current.next;
        }
        console.log(result + 'null');
    }


    get(index) {
        if (index < 0 || index >= this.length) return null;
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.value;
    }



}

let customlist = new LinkedList();

customlist.addAtEnd(10);
customlist.addAtEnd(20);
customlist.addAtEnd(30);
customlist.addAtEnd(40);
customlist.addAtEnd(50);

customlist.addFirst(99);

console.log("the value of the index in the list is : "+customlist.get(3));

console.log("the index of the value is :"+customlist.indexOf(30))

console.log("the index of the value is :"+customlist.indexOf(100))

customlist.removeAt(2);

customlist.print();

console.log("size of the list is : "+customlist.size());