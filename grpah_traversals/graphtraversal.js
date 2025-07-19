class GraphTraversal {
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
            for (let neighbor of this.adjacencyList[current]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
        return result;
    }

    dfsTraversal(startVertex) {
        if (!(startVertex in this.adjacencyList)) {
            return [];
        }
        let result = [];
        let visited = {};
        this.dfsHelper(startVertex, visited, result);
        return result;
    }

    dfsHelper(vertex, visited, result) {
        visited[vertex] = true;
        result.push(vertex);
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

    clear() {
        this.adjacencyList = {};
        this.size = 0;
    }
}

let customgraphtraversal = new GraphTraversal();

customgraphtraversal.addValue(0, 1);
customgraphtraversal.addValue(0, 2);
customgraphtraversal.addValue(1, 3);
customgraphtraversal.addValue(2, 3);
customgraphtraversal.addValue(3, 4);

console.log("testing search method : ");
console.log("searching for passed vertex 3: " + customgraphtraversal.search(3));
console.log("searching for passed vertex 5: " + customgraphtraversal.search(5));

console.log("testing bfsTraversal method : ");
console.log("BFS traversal starting from vertex 0: " + customgraphtraversal.bfsTraversal(0));

console.log("testing dfsTraversal method : ");
console.log("DFS traversal starting from vertex 0: " + customgraphtraversal.dfsTraversal(0));

console.log("testing getNodesCount method : ");
console.log("Number of vertices in the graph : " + customgraphtraversal.getNodesCount());

console.log("testing isEmpty method : ");
console.log("Graph is empty : " + customgraphtraversal.isEmpty());

console.log("testing clear method : ");
customgraphtraversal.clear();
console.log("Graph is empty after clear : " + customgraphtraversal.isEmpty());