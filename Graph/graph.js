
// class graph {
//   constructor() {
//       this.map = new Map()
//   }

//   AddVertex(vertex) {
//       if (!this.map.has(vertex)) {
//           let set = new Set()
//           this.map.set(vertex, set)
//       }
//   }
//   AddEdge(vertex1, vertex2) {
//       if (!this.map.has(vertex1)) {
//           this.AddVertex(vertex1)
//       }
//       if (!this.map.has(vertex2)) {
//           this.AddVertex(vertex2)
//       }
//       this.map.get(vertex1).add(vertex2)
//       this.map.get(vertex2).add(vertex1)

//   }
//   removeEdge(vertex1,vertex2){
//       this.map.get(vertex1).delete(vertex2)
//       this.map.get(vertex2).delete(vertex1)
     
//   }
//   removeVertex(vertex){
//       if(!this.map.get(vertex)){
//           console.log(`${vertex} is not found to remove`);
//           return;
//       }
//       for(const edge of this.map.get(vertex)){
//           this.removeEdge(vertex,edge)
//       }
//        this.map.delete(vertex)
      
      
//   }
//   printgraph() {
//       for (const vertex of this.map) {
//           console.log(vertex);
//       }
//   }
// }
// let gr = new graph()
// gr.AddVertex("G")
// gr.AddEdge("A","E")
// gr.AddEdge("A", "C")
// // gr.removeVertex("A")
// // gr.removeEdge("A","E")
// gr.printgraph()

class Graph {
    constructor() {
      this.adjList = new Map();
    }
  
    addVertex(vertex) {
      this.adjList.set(vertex, []);
    }
  
    addEdge(vertex1, vertex2) {
      this.adjList.get(vertex1).push(vertex2);
      this.adjList.get(vertex2).push(vertex1);
    }
    
    printGraph() {
      for (let [vertex, edges] of this.adjList) {
        console.log(vertex + " -> " + edges.join(", "));
      }
    }
  }
  
  // Example usage:
  const graph = new Graph();
  graph.addVertex(1);
  graph.addVertex(2);
  graph.addVertex(3);
  graph.addEdge(1, 2);
  graph.addEdge(2, 3);
  graph.printGraph();

  // DFS function
function dfs(graph, start) {
    const visited = new Set();
    const stack = [start];
    while (stack.length > 0) {
      const node = stack.pop();
      if (!visited.has(node)) {
        visited.add(node);
        console.log(node);
        const neighbors = graph[node];
        for (const neighbor of neighbors) {
          stack.push(neighbor);
        }
      }
    }
  }
  // Example usage
  dfs(graph, 'A');