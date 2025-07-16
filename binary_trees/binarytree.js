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


}


let customTree = new BinaryTree();


customTree.addValue(10);
customTree.addValue(20);
customTree.addValue(30);
customTree.addValue(40);
customTree.addValue(50);
customTree.addValue(60);
customTree.addValue(70);

console.log("testing search method : ");
console.log("searching for passed value 30: " + customTree.search(30));
console.log("searching for passed value 100 : " + customTree.search(100));

console.log("testing getHeightOfTree method : ");
console.log("Tree height : " + customTree.getHeightOfTree());

console.log("testing getNodesCount method : ");
console.log("Number of nodes in the tree : " + customTree.getNodesCount());
