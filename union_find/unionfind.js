class UnionFind {
    constructor() {
        this.parent = {}; // Each element points to its parent (root points to itself)
        this.rank = {}; // Track tree depth for efficient merging
        this.size = 0;
    }

    // Add element as its own separate set
    addValue(element) {
        if (!(element in this.parent)) {
            this.parent[element] = element; // Element is its own root initially
            this.rank[element] = 0; // Single element has rank 0
            this.size++;
        }
    }

    // Find root of element's set with path compression
    find(element) {
        if (!(element in this.parent)) {
            return null; // Element doesn't exist
        }
        // Path compression: make element point directly to root
        if (this.parent[element] !== element) {
            this.parent[element] = this.find(this.parent[element]);
        }
        return this.parent[element];
    }

    // Merge two sets using union by rank
    union(element1, element2) {
        let root1 = this.find(element1);
        let root2 = this.find(element2);

        // Skip if elements don't exist or already in same set
        if (root1 === null || root2 === null || root1 === root2) {
            return;
        }

        // Attach smaller tree under root of taller tree
        if (this.rank[root1] < this.rank[root2]) {
            this.parent[root1] = root2;
        } else if (this.rank[root1] > this.rank[root2]) {
            this.parent[root2] = root1;
        } else {
            // Equal ranks: pick one and increase its rank
            this.parent[root2] = root1;
            this.rank[root1]++;
        }
    }

    // Check if element exists in the data structure
    search(element) {
        if (Object.keys(this.parent).length === 0) {
            console.log("The union-find is empty");
            return false;
        }
        return element in this.parent;
    }

    getNodesCount() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    // Reset to empty state
    clear() {
        this.parent = {};
        this.rank = {};
        this.size = 0;
    }
}

// Demo with network connectivity scenario
let customunionfind = new UnionFind();

// Add individual nodes
customunionfind.addValue(0);
customunionfind.addValue(1);
customunionfind.addValue(2);
customunionfind.addValue(3);
customunionfind.addValue(4);

// Create connections: {0,1} and {2,3,4} will be separate groups
customunionfind.union(0, 1);
customunionfind.union(2, 3);
customunionfind.union(3, 4);

console.log("testing search method : ");
console.log("searching for passed element 2: " + customunionfind.search(2)); // Should exist
console.log("searching for passed element 5: " + customunionfind.search(5)); // Should not exist

console.log("testing find method : ");
console.log("find root for element 4: " + customunionfind.find(4)); // Should be 2 (root of {2,3,4})

console.log("testing getNodesCount method : ");
console.log("Number of elements in the union-find : " + customunionfind.getNodesCount());

console.log("testing isEmpty method : ");
console.log("Union-find is empty : " + customunionfind.isEmpty());

console.log("testing clear method : ");
customunionfind.clear();
console.log("Union-find is empty after clear : " + customunionfind.isEmpty());