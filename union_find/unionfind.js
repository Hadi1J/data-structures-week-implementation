class UnionFind {
    constructor() {
        this.parent = {};
        this.rank = {};
        this.size = 0;
    }

    addValue(element) {
        if (!(element in this.parent)) {
            this.parent[element] = element;
            this.rank[element] = 0;
            this.size++;
        }
    }

    find(element) {
        if (!(element in this.parent)) {
            return null;
        }
        if (this.parent[element] !== element) {
            this.parent[element] = this.find(this.parent[element]);
        }
        return this.parent[element];
    }

    union(element1, element2) {
        let root1 = this.find(element1);
        let root2 = this.find(element2);
        if (root1 === null || root2 === null || root1 === root2) {
            return;
        }
        if (this.rank[root1] < this.rank[root2]) {
            this.parent[root1] = root2;
        } else if (this.rank[root1] > this.rank[root2]) {
            this.parent[root2] = root1;
        } else {
            this.parent[root2] = root1;
            this.rank[root1]++;
        }
    }

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

    clear() {
        this.parent = {};
        this.rank = {};
        this.size = 0;
    }
}

let customunionfind = new UnionFind();

customunionfind.addValue(0);
customunionfind.addValue(1);
customunionfind.addValue(2);
customunionfind.addValue(3);
customunionfind.addValue(4);

customunionfind.union(0, 1);
customunionfind.union(2, 3);
customunionfind.union(3, 4);

console.log("testing search method : ");
console.log("searching for passed element 2: " + customunionfind.search(2));
console.log("searching for passed element 5: " + customunionfind.search(5));

console.log("testing find method : ");
console.log("find root for element 4: " + customunionfind.find(4));

console.log("testing getNodesCount method : ");
console.log("Number of elements in the union-find : " + customunionfind.getNodesCount());

console.log("testing isEmpty method : ");
console.log("Union-find is empty : " + customunionfind.isEmpty());

console.log("testing clear method : ");
customunionfind.clear();
console.log("Union-find is empty after clear : " + customunionfind.isEmpty());