class
Node {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
        this.size = 0;
    }

    addValue(word) {
        let current = this.root;
        for (let char of word) {
            if (!current.children[char]) {
                current.children[char] = new Node();
                this.size++;
            }
            current = current.children[char];
        }
        if (!current.isEndOfWord) {
            current.isEndOfWord = true;
            this.size++;
        }
    }

    search(word) {
        if (!this.root.children || Object.keys(this.root.children).length === 0) {
            console.log("The trie is empty");
            return false;
        }
        let current = this.root;
        for (let char of word) {
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }
        return current.isEndOfWord;
    }

    getNodesCount() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    clear() {
        this.root = new Node();
        this.size = 0;
    }
}

let customtrie = new Trie();

customtrie.addValue("apple");
customtrie.addValue("iphone");
customtrie.addValue("banana");
customtrie.addValue("bat");
customtrie.addValue("ball");

console.log("testing search method : ");
console.log("searching for passed word 'banana': " + customtrie.search("banana"));
console.log("searching for passed word 'mango': " + customtrie.search("mango"));

console.log("testing getNodesCount method : ");
console.log("Number of nodes in the trie : " + customtrie.getNodesCount());

console.log("testing isEmpty method : ");
console.log("Trie is empty : " + customtrie.isEmpty());

console.log("testing clear method : ");
customtrie.clear();
console.log("Trie is empty after clear : " + customtrie.isEmpty());