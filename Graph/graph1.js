let graph = new Map();

function addNode(v) {
  if (graph.has(v)) {
    console.log(v + " is already present in graph");
  } else {
    graph.set(v, []);
  }
}

function addEdge(v1, v2) {
  if (!graph.has(v1)) {
    console.log(v1 + " not present");
  } else if (!graph.has(v2)) {
    console.log(v2 + " not present");
  } else {
    graph.get(v1).push(v2);
    graph.get(v2).push(v1);
  }
}

function deleteNode(v) {
  if (!graph.has(v)) {
    console.log(v + " not present in graph");
  } else {
    graph.delete(v);
    for (let [key, value] of graph.entries()) {
      let index = value.indexOf(v);
      if (index !== -1) {
        value.splice(index, 1);
        graph.set(key, value);
      }
    }
  }
}

function deleteEdge(v1, v2) {
  if (!graph.has(v1)) {
    console.log(v1 + " is not present in graph");
  } else if (!graph.has(v2)) {
    console.log(v2 + " is not present in graph");
  } else {
    let index1 = graph.get(v1).indexOf(v2);
    let index2 = graph.get(v2).indexOf(v1);
    if (index1 !== -1) {
      graph.get(v1).splice(index1, 1);
    }
    if (index2 !== -1) {
      graph.get(v2).splice(index2, 1);
    }
  }
}

function DFS(node, graph) {
  let visited = new Set();
  if (!graph.has(node)) {
    console.log("The node is not in the graph");
    return;
  }
  let stack = [];
  stack.push(node);
  while (stack.length > 0) {
    let current = stack.pop();
    if (!visited.has(current)) {
      console.log(current + " -->");
      visited.add(current);
      let neighbors = graph.get(current);
      for (let neighbor of neighbors) {
        stack.push(neighbor);
      }
    }
  }
}
``
function BFS(node, graph) {
  let visited = new Set();
  if (!graph.has(node)) {
    console.log("The node is not in the graph");
    return;
  }
  let queue = [];
  queue.push(node);
  while (queue.length > 0) {
    let current = queue.shift();
    if (!visited.has(current)) {
      console.log(current + " -->");
      visited.add(current);
      let neighbors = graph.get(current);
      for (let neighbor of neighbors) {
        queue.push(neighbor);
      }
    }
  }
}

addNode("A");
addNode("B");
addNode("C");
addNode("D");
addNode("E");

addEdge("A", "B");
addEdge("B", "E");
addEdge("A", "C");
addEdge("A", "D");
addEdge("B", "D");
addEdge("C", "D");
addEdge("E", "D");

console.log(graph);

// deleteNode("C");
// console.log("After node deletion");
// console.log(graph);

// console.log("After edge deletion");
// deleteEdge("B", "D");
// console.log(graph);

// console.log("DFS");
// DFS("A", graph);

// console.log("BFS");
// BFS("A", graph);