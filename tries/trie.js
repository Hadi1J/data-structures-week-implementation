class Node {
    constructor() {
        this.children = {}; // Store child nodes as key-value pairs
        this.isEndOfWord = false; // Flag to mark complete words
    }
}

class Trie {
    constructor() {
        this.root = new Node();
        this.size = 0; // Track total nodes for efficiency
    }

    // Insert a word by traversing character by character
    addValue(word) {
        let current = this.root;
        for (let char of word) {
            // Create new node if path doesn't exist
            if (!current.children[char]) {
                current.children[char] = new Node();
                this.size++;
            }
            current = current.children[char];
        }
        // Mark end of word only if not already marked
        if (!current.isEndOfWord) {
            current.isEndOfWord = true;
            this.size++; // Count word endings as nodes too
        }
    }

    // Find if complete word exists in trie
    search(word) {
        // Handle empty trie case
        if (!this.root.children || Object.keys(this.root.children).length === 0) {
            console.log("The trie is empty");
            return false;
        }

        let current = this.root;
        // Follow the path for each character
        for (let char of word) {
            if (!current.children[char]) {
                return false; // Path doesn't exist
            }
            current = current.children[char];
        }
        // Word exists only if we end at a word boundary
        return current.isEndOfWord;
    }

    getNodesCount() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    // Reset trie to initial empty state
    clear() {
        this.root = new Node();
        this.size = 0;
    }
}

// Demo usage with test data
let customtrie = new Trie();

// Build trie with sample words
customtrie.addValue("apple");
customtrie.addValue("iphone");
customtrie.addValue("banana");
customtrie.addValue("bat");
customtrie.addValue("ball");

console.log("testing search method : ");
console.log("searching for passed word 'banana': " + customtrie.search("banana")); // Should find it
console.log("searching for passed word 'mango': " + customtrie.search("mango")); // Should not find it

console.log("testing getNodesCount method : ");
console.log("Number of nodes in the trie : " + customtrie.getNodesCount());

console.log("testing isEmpty method : ");
console.log("Trie is empty : " + customtrie.isEmpty());

console.log("testing clear method : ");
customtrie.clear();
console.log("Trie is empty after clear : " + customtrie.isEmpty());