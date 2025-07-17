class MinHeap {
    constructor() {
        this.heap = [null];
        this.size = 0;
    }

    addValue(value) {
        this.heap.push(value);
        this.size++;
        this.bubbleUp(this.size);
    }

    bubbleUp(index) {
        while (index > 1) {
            let parentIndex = Math.floor(index / 2);
            if (this.heap[index] >= this.heap[parentIndex]) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    search(value) {
        if (!this.heap[1]) {
            console.log("The heap is empty");
            return false;
        }
        for (let i = 1; i <= this.size; i++) {
            if (this.heap[i] === value) return true;
        }
        return false;
    }

    getNodesCount() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    clear() {
        this.heap = [null];
        this.size = 0;
    }
}

let customminiHeap = new MinHeap();

customminiHeap.addValue(10);
customminiHeap.addValue(20);
customminiHeap.addValue(30);
customminiHeap.addValue(40);
customminiHeap.addValue(50);

console.log("testing search method : ");
console.log("searching for passed value 30: " + customminiHeap.search(30));
console.log("searching for passed value 60 : " + customminiHeap.search(60));

console.log("testing getNodesCount method : ");
console.log("Number of elements in the heap : " + customminiHeap.getNodesCount());

console.log("testing isEmpty method : ");
console.log("Heap is empty : " + customminiHeap.isEmpty());

console.log("testing clear method : ");
customminiHeap.clear();
console.log("Heap is empty after clear : " + customminiHeap.isEmpty());