class MinHeap {
    constructor() {
        this.heap = [null]; // Index 0 unused - heap starts at index 1 for easier math
        this.size = 0;
    }

    addValue(value) {
        this.heap.push(value);
        this.size++;
        this.bubbleUp(this.size); // Restore heap property after insertion
    }

    // Move newly added element up until heap property is satisfied
    bubbleUp(index) {
        while (index > 1) {
            let parentIndex = Math.floor(index / 2); // Parent is at index/2
            if (this.heap[index] >= this.heap[parentIndex]) break; // Heap property satisfied

            // Swap with parent if current value is smaller
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    // Linear search through heap array
    search(value) {
        if (!this.heap[1]) {
            console.log("The heap is empty");
            return false;
        }

        // Check all elements starting from index 1
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

    // Reset heap to empty state
    clear() {
        this.heap = [null]; // Keep null at index 0
        this.size = 0;
    }
}

// Build min heap and test heap property maintenance
let customminiHeap = new MinHeap();

// Adding values - each bubbles up to maintain min heap property
customminiHeap.addValue(10); // Root
customminiHeap.addValue(20); // Will stay as child since 20 > 10
customminiHeap.addValue(30);
customminiHeap.addValue(40);
customminiHeap.addValue(50);

console.log("testing search method : ");
console.log("searching for passed value 30: " + customminiHeap.search(30)); // Should find it
console.log("searching for passed value 60 : " + customminiHeap.search(60)); // Should not find it

console.log("testing getNodesCount method : ");
console.log("Number of elements in the heap : " + customminiHeap.getNodesCount());

console.log("testing isEmpty method : ");
console.log("Heap is empty : " + customminiHeap.isEmpty());

console.log("testing clear method : ");
customminiHeap.clear();
console.log("Heap is empty after clear : " + customminiHeap.isEmpty()); // Should be true now