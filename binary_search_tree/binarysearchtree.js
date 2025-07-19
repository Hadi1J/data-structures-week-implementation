class Node {
    constructor(value) {
        this.value = value;
        this.left = null;   // Left child (smaller values)
        this.right = null;  // Right child (larger values)
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    addValue(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
        } else {
            this.addValueNode(this.root, newNode);
        }

        this.size++;
    }

    // Recursively finding where to put the new node
    addValueNode(node, newNode) {
        // smaller values go left, larger go right
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                // Keep looking
                this.addValueNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                // Keep looking
                this.addValueNode(node.right, newNode);
            }
        }
    }

    search(value) {
        if (!this.root) {
            console.log("The tree is empty");
            return false;
        }

        return this.searchNode(this.root, value);
    }

    // eliminate half the tree with each comparison!
    searchNode(node, value) {
        if (!node) return false;

        if (value === node.value) {
            return true;
        } else if (value < node.value) {
            return this.searchNode(node.left, value);
        } else {
            return this.searchNode(node.right, value);
        }
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

    isEmpty() {
        return this.root === null;
    }

    clear() {
        this.root = null;
        this.size = 0;
    }
}

// Build a tree and test it
let customBST = new BinarySearchTree();

// Adding values - they organize themselves according to BST rules
customBST.addValue(50);  // Root
customBST.addValue(30);
customBST.addValue(70);
customBST.addValue(20);
customBST.addValue(40);
customBST.addValue(60);
customBST.addValue(80);

console.log("Testing search method:");
console.log("Searching for value 30: " + customBST.search(30));
console.log("Searching for value 100: " + customBST.search(100));

console.log("\nTesting getHeightOfTree method:");
console.log("Tree height: " + customBST.getHeightOfTree()); // Should output 2

console.log("\nTesting getNodesCount method:");
console.log("Number of nodes in the tree: " + customBST.getNodesCount());

console.log("\nTesting isEmpty method:");
console.log("Tree is empty: " + customBST.isEmpty());

console.log("\nTesting clear method:");
customBST.clear();
console.log("Tree is empty after clear: " + customBST.isEmpty());