
class Graph {
    constructor() {
        this.adjacencyList = {};
        this.size = 0;
    }

    addValue(vertex, edge = null) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
            this.size++;
        }
        if (edge !== null && !this.adjacencyList[vertex].includes(edge)) {
            this.adjacencyList[vertex].push(edge);
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

let customgraph = new Graph();

customgraph.addValue(1, 2);
customgraph.addValue(1, 3);
customgraph.addValue(2, 4);
customgraph.addValue(3, 4);
customgraph.addValue(4, 5);

console.log("testing search method : ");
console.log("searching for passed vertex 3: " + customgraph.search(3));
console.log("searching for passed vertex 6 : " + customgraph.search(6));

console.log("testing getNodesCount method : ");
console.log("Number of vertices in the graph : " + customgraph.getNodesCount());

console.log("testing isEmpty method : ");
console.log("Graph is empty : " + customgraph.isEmpty());

console.log("testing clear method : ");
customgraph.clear();
console.log("Graph is empty after clear : " + customgraph.isEmpty());


