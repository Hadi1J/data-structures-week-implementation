class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    addValue(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            this.size++;
            return;
        }

        // Use queue to find the first available spot level by level
        const queue = [this.root];

        while (queue.length > 0) {
            const current = queue.shift();

            // Fill left first, then right
            if (!current.left) {
                current.left = newNode;
                this.size++;
                return;
            } else if (!current.right) {
                current.right = newNode;
                this.size++;
                return;
            }

            // Both spots filled, check next level
            queue.push(current.left);
            queue.push(current.right);
        }
    }

    search(value) {
        if (!this.root) {
            console.log("The tree is empty");
            return false;
        }

        return this.searchNodes(this.root, value);
    }

    // Check every node level by level
    searchNodes(root, value) {
        const queue = [root];

        while (queue.length > 0) {
            const current = queue.shift();

            if (current.value === value) {
                return true;
            }

            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }

        return false;
    }

    // Calculating height recursively
    getHeightOfTree(node = this.root) {
        // Empty node has height -1 so the single node tree has height 0
        if (!node) return -1;

        const leftHeight = this.getHeightOfTree(node.left);
        const rightHeight = this.getHeightOfTree(node.right);

        // Height is tallest subtree + 1 for current level
        return Math.max(leftHeight, rightHeight) + 1;
    }

    getNodesCount() {
        return this.size;
    }
}

// Build a tree and test it
let customTree = new BinaryTree();

// Adding values - they fill level by level, left to right
customTree.addValue(10);  // Root
customTree.addValue(20);
customTree.addValue(30);
customTree.addValue(40);
customTree.addValue(50);
customTree.addValue(60);
customTree.addValue(70);

console.log("Testing search method:");
console.log("Searching for value 30: " + customTree.search(30));
console.log("Searching for value 100: " + customTree.search(100));

console.log("\nTesting getHeightOfTree method:");
console.log("Tree height: " + customTree.getHeightOfTree()); // Should output 2

console.log("\nTesting getNodesCount method:");
console.log("Number of nodes in the tree: " + customTree.getNodesCount());