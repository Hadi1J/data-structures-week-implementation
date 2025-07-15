class ArrayStack {
    constructor(){
        this.elements = [];
    }

    push(element) {
        this.elements[this.elements.length] = element;
    }

    pop(){
        if (this.elements.length == 0) {
            console.log("the stack is empty");
            return null;
        }
        return this.elements.pop();
    }

    peek(){
        if (this.elements.length == 0) {
            console.log("the stack is empty");
            return null;
        }
        return this.elements[this.elements.length - 1];
    }

    search(element){
        if (this.elements.length == 0) {
            console.log("the stack is empty");
            return null;
        }else if( this.elements.indexOf(element) == -1)
        {
            console.log("the element is not in the stack");
        }
        else
        {
            return this.elements.indexOf(element);
        }
    }

    size(){
        return this.elements.length;
    }
}

let arrstack = new ArrayStack();

arrstack.push(10);
arrstack.push(20);
arrstack.push(30);
arrstack.push(40);
arrstack.push(50);

console.log(arrstack.pop());

console.log(arrstack.peek());

console.log(arrstack.search(50));

console.log(arrstack.size());

