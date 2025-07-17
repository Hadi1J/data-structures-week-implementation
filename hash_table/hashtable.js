class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HashTable {
    constructor(size = 10) {
        this.buckets = new Array(size).fill(null);
        this.size = 0;
    }

    hash(key) {
        let sum = 0;
        for (let char of String(key)) {
            sum += char.charCodeAt(0);
        }
        return sum % this.buckets.length;
    }


    addValue(key, value) {
        const index = this.hash(key);
        if (!this.buckets[index]) {
            this.buckets[index] = new Node(key, value);
            this.size++;
            return;
        }
        let current = this.buckets[index];
        while (current) {
            if (current.key === key) {
                current.value = value;
                return;
            }
            if (!current.next) break;
            current = current.next;
        }
        current.next = new HashNode(key, value);
        this.size++;
    }

    search(key) {
        const index = this.hash(key);
        let current = this.buckets[index];
        while (current) {
            if (current.key === key) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // Time: O(1)
    // Space: O(1)
    getNodesCount() {
        return this.size;
    }

    // Time: O(1)
    // Space: O(1)
    isEmpty() {
        return this.size === 0;
    }

    // Time: O(1)
    // Space: O(1)
    clear() {
        this.buckets = new Array(this.buckets.length).fill(null);
        this.size = 0;
    }
}


let customhashTable = new HashTable();

customhashTable.addValue("apple", 1);
customhashTable.addValue("banana", 2);
customhashTable.addValue("orange", 3);
customhashTable.addValue("pear", 4);
customhashTable.addValue("grape", 5);

console.log("testing search method : ");
console.log("searching for passed key 'banana': " + customhashTable.search("banana"));
console.log("searching for passed key 'mango': " + customhashTable.search("mango"));

console.log("testing getNodesCount method : ");
console.log("Number of key-value pairs in the table : " + customhashTable.getNodesCount());

console.log("testing isEmpty method : ");
console.log("Table is empty : " + customhashTable.isEmpty());

console.log("testing clear method : ");
customhashTable.clear();
console.log("Table is empty after clear : " + customhashTable.isEmpty());