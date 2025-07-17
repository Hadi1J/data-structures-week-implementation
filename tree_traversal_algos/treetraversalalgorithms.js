class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class TreeTraversalAlgorithms {
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

        const queue = [this.root];

        while (queue.length > 0) {
            const current = queue.shift();

            if (!current.left) {
                current.left = newNode;
                this.size++;
                return;
            } else if (!current.right) {
                current.right = newNode;
                this.size++;
                return;
            }

            queue.push(current.left);
            queue.push(current.right);
        }
    }

    search(value) {
        if (!this.root) {
            console.log("The tree is empty");
            return false;
        }

        const queue = [this.root];

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

    getHeightOfTree(node = this.root) {
        if (!node) return -1;

        const leftHeight = this.getHeightOfTree(node.left);
        const rightHeight = this.getHeightOfTree(node.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }

    getNodesCount() {
        return this.size;
    }

    inorderTraversal(node = this.root, result = []) {
        if (node) {
            this.inorderTraversal(node.left, result);
            result.push(node.value);
            this.inorderTraversal(node.right, result);
        }
        return result;
    }

    preorderTraversal(node = this.root, result = []) {
        if (node) {
            result.push(node.value);
            this.preorderTraversal(node.left, result);
            this.preorderTraversal(node.right, result);
        }
        return result;
    }

    postorderTraversal(node = this.root, result = []) {
        if (node) {
            this.postorderTraversal(node.left, result);
            this.postorderTraversal(node.right, result);
            result.push(node.value);
        }
        return result;
    }

    levelOrderTraversal() {
        if (!this.root) return [];

        const result = [];
        const queue = [this.root];

        while (queue.length > 0) {
            const current = queue.shift();
            result.push(current.value);

            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }

        return result;
    }

    searchNodeInorder(value) {
        const traversal = this.inorderTraversal();
        const index = traversal.indexOf(value);
        return index !== -1 ? `Found ${value} at inorder position ${index}` : `${value} not found`;
    }

    isEmpty() {
        return this.root === null;
    }

    clear() {
        this.root = null;
        this.size = 0;
    }

    displayAllTraversals() {
        if (!this.root) {
            console.log("Tree is empty");
            return;
        }

        console.log("Inorder: " + this.inorderTraversal().join(" -> "));
        console.log("Preorder: " + this.preorderTraversal().join(" -> "));
        console.log("Postorder: " + this.postorderTraversal().join(" -> "));
        console.log("Level-order: " + this.levelOrderTraversal().join(" -> "));
    }
}


let customtravercal = new TreeTraversalAlgorithms();

customtravercal.addValue(10);
customtravercal.addValue(20);
customtravercal.addValue(30);
customtravercal.addValue(40);
customtravercal.addValue(50);
customtravercal.addValue(60);
customtravercal.addValue(70);

console.log("testing search method : ");
console.log("searching for passed value 30: " + customtravercal.search(30));
console.log("searching for passed value 100 : " + customtravercal.search(100));

console.log("testing getHeightOfTree method : ");
console.log("Tree height : " + customtravercal.getHeightOfTree());

console.log("testing getNodesCount method : ");
console.log("Number of nodes in the tree : " + customtravercal.getNodesCount());

console.log("testing findNodeInorder method : ");
console.log(customtravercal.searchNodeInorder(30));
console.log(customtravercal.searchNodeInorder(100));

console.log("testing displayAllTraversals method : ");
customtravercal.displayAllTraversals();

console.log("testing individual traversal methods : ");
console.log("Inorder only: " + customtravercal.inorderTraversal().join(", "));
console.log("Preorder only: " + customtravercal.preorderTraversal().join(", "));
console.log("Postorder only: " + customtravercal.postorderTraversal().join(", "));