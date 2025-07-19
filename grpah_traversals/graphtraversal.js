class GraphTraversal {
    constructor() {
        this.adjacencyList = {};
        this.size = 0;
    }

    addValue(vertex, edge = null) {
        // Create vertex if it doesn't exist
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
            this.size++;
        }

        // Add edge connection and ensure both vertices exist
        if (edge !== null && !this.adjacencyList[vertex].includes(edge)) {
            this.adjacencyList[vertex].push(edge);
            if (!this.adjacencyList[edge]) {
                this.adjacencyList[edge] = [];
                this.size++;
            }
        }
    }

    // Breadth-first search - explores level by level using queue
    bfsTraversal(startVertex) {
        if (!(startVertex in this.adjacencyList)) {
            return [];
        }

        let result = [];
        let visited = {};
        let queue = [startVertex];
        visited[startVertex] = true;

        while (queue.length > 0) {
            let current = queue.shift();
            result.push(current);

            // Add unvisited neighbors to queue
            for (let neighbor of this.adjacencyList[current]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
        return result;
    }

    // Depth-first search - explores as deep as possible before backtracking
    dfsTraversal(startVertex) {
        if (!(startVertex in this.adjacencyList)) {
            return [];
        }

        let result = [];
        let visited = {};
        this.dfsHelper(startVertex, visited, result);
        return result;
    }

    // Recursive helper for DFS traversal
    dfsHelper(vertex, visited, result) {
        visited[vertex] = true;
        result.push(vertex);

        // Recursively visit all unvisited neighbors
        for (let neighbor of this.adjacencyList[vertex]) {
            if (!visited[neighbor]) {
                this.dfsHelper(neighbor, visited, result);
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

    // Reset graph to empty state
    clear() {
        this.adjacencyList = {};
        this.size = 0;
    }
}

// Build a graph and test all methods
let customgraphtraversal = new GraphTraversal();

// Creating connections: 0-1, 0-2, 1-3, 2-3, 3-4
customgraphtraversal.addValue(0, 1);
customgraphtraversal.addValue(0, 2);
customgraphtraversal.addValue(1, 3);
customgraphtraversal.addValue(2, 3);
customgraphtraversal.addValue(3, 4);

console.log("testing search method : ");
console.log("searching for passed vertex 3: " + customgraphtraversal.search(3)); // Should find it
console.log("searching for passed vertex 5: " + customgraphtraversal.search(5)); // Should not find it

console.log("testing bfsTraversal method : ");
console.log("BFS traversal starting from vertex 0: " + customgraphtraversal.bfsTraversal(0)); // Level-by-level exploration

console.log("testing dfsTraversal method : ");
console.log("DFS traversal starting from vertex 0: " + customgraphtraversal.dfsTraversal(0)); // Deep exploration first

console.log("testing getNodesCount method : ");
console.log("Number of vertices in the graph : " + customgraphtraversal.getNodesCount());

console.log("testing isEmpty method : ");
console.log("Graph is empty : " + customgraphtraversal.isEmpty());

console.log("testing clear method : ");
customgraphtraversal.clear();
console.log("Graph is empty after clear : " + customgraphtraversal.isEmpty()); // Should be true now