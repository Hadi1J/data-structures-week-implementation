class Graph {
    constructor() {
        this.adjacencyList = {};  // Object stores connected vertex
        this.size = 0;
    }

    addValue(vertex, edge = null) {
        // Create vertex if it doesn't exist
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
            this.size++;
        }
        // Add edge connection (bidirectional)
        if (edge !== null && !this.adjacencyList[vertex].includes(edge)) {
            this.adjacencyList[vertex].push(edge);
            // Create the other vertex if needed
            if (!this.adjacencyList[edge]) {
                this.adjacencyList[edge] = [];
                this.size++;
            }
        }
    }

    search(vertex) {
        if (Object.keys(this.adjacencyList).length === 0) {
            console.log("The graph is empty");
            return false;
        }
        return vertex in this.adjacencyList;
    }

    getNodesCount() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    clear() {
        this.adjacencyList = {};
        this.size = 0;
    }
}

// Build and test the graph
let customgraph = new Graph();

// Adding connections - creates vertices and edges
customgraph.addValue(1, 2);  // 1 connects to 2
customgraph.addValue(1, 3);  // 1 connects to 3
customgraph.addValue(2, 4);  // 2 connects to 4
customgraph.addValue(3, 4);  // 3 connects to 4
customgraph.addValue(4, 5);  // 4 connects to 5

console.log("Testing search method:");
console.log("Searching for vertex 3: " + customgraph.search(3));
console.log("Searching for vertex 6: " + customgraph.search(6));

console.log("\nTesting getNodesCount method:");
console.log("Number of vertices in the graph: " + customgraph.getNodesCount());

console.log("\nTesting isEmpty method:");
console.log("Graph is empty: " + customgraph.isEmpty());

console.log("\nTesting clear method:");
customgraph.clear();
console.log("Graph is empty after clear: " + customgraph.isEmpty());