// // class trieNode {
// //     constructor(){
// //         this.children = new Map()
// //         this.endOfword = false
// //     }
// // }

// // class trie{
// //     constructor(){
// //         this.root = new trieNode
// //     }

// //     insert(word){
// //         let root = this.root
// //         for(let i=0;i<word.length;i++){
// //             let letter = word.charAt(i)
// //             if(!root.children.has(letter)){
// //                 let newTrie  = new trieNode()
// //                 root.children.set(letter,newTrie)
// //             }
// //             root = root.children.get(letter)
// //         }
// //         root.endOfword = true
// //     }
// //     searchWord(word){
// //         let root = this.root
// //         for(let i=0;i<word.length;i++){
// //             let letter = word.charAt(i)
// //             if(!root.children.has(letter)){
// //                 console.log(false);
// //                 return ;
// //             }
// //             root = root.children.get(letter)
// //         }
// //         if(root.endOfword == true){
// //             console.log(true);
// //         }else{
// //             console.log(false);
// //         }
// //     }

// // }
// // let tr = new trie()
// // tr.insert("hai")
// // tr.searchWord("hai")
// // console.log(tr);

// // class graph {
// //     constructor() {
// //         this.map = new Map()
// //     }

// //     AddVertex(vertex) {
// //         if (!this.map.has(vertex)) {
// //             let set = new Set()
// //             this.map.set(vertex, set)
// //         }
// //     }
// //     AddEdge(vertex1, vertex2) {
// //         if (!this.map.has(vertex1)) {
// //             this.AddVertex(vertex1)
// //         }
// //         if (!this.map.has(vertex2)) {
// //             this.AddVertex(vertex2)
// //         }
// //         this.map.get(vertex1).add(vertex2)
// //         this.map.get(vertex2).add(vertex1)

// //     }
// //     removeEdge(vertex1, vertex2) {
// //         this.map.get(vertex1).delete(vertex2)
// //         this.map.get(vertex2).delete(vertex1)

// //     }
// //     removeVertex(vertex) {
// //         if (!this.map.get(vertex)) {
// //             console.log(`${vertex} is not found to remove`);
// //             return;
// //         }
// //         for (const edge of this.map.get(vertex)) {
// //             this.removeEdge(vertex, edge)
// //         }
// //         this.map.delete(vertex)


// //     }
// //     printgraph() {
// //         for (const vertex of this.map) {
// //             console.log(vertex);
// //         }
// //     }
// //     dfs(start) {
// //         let visited = new Set()
// //         let stack = [start]
// //         while (stack.length > 0) {
// //             let node = stack.pop()
// //             if (!visited.has(node)) {
// //                 visited.add(node)
// //                 console.log(node);
// //                 const neighbors = this.map.get(node)
// //                 for(const neighbor of neighbors){
// //                     stack.push(neighbor)
// //                 }
// //             }
// //         }
// //     }
// //     bfs(start){
// //         let visited = new Set()
// //         let que = [start]
// //         while(que.length > 0){
// //             let current  = que.shift()
// //             if(!visited.has(current)){
// //                 visited.add(current)
// //                 // console.log(current);
// //                 let neighbors = this.map.get(current)
// //                 for(const neighbor of neighbors){
// //                     que.push(neighbor)
// //                 }
// //             }
// //         }
// //         console.log(visited);
// //     }
// // }
// // let gr = new graph()
// // gr.AddVertex("G")
// // gr.AddVertex("A")
// // gr.AddVertex("B")
// // gr.AddEdge("A", "E")
// // gr.AddEdge("A", "C")
// // // gr.removeVertex("A")
// // // gr.removeEdge("A","E")
// // gr.bfs("A")
// // // gr.printgraph()

// class Node {
//     constructor(data) {
//         this.data = data
//         this.left = null
//         this.right = null
//     }
// }

// class tree {
//     constructor() {
//         this.root = null
//     }
//     insertNode(data) {
//         if (this.root == null) {
//             this.root = new Node(data)
//             return;
//         }
//         let root = this.root
//         while (true) {
//             if (data < root.data) {
//                 if (root.left == null) {
//                     root.left = new Node(data)
//                     return;
//                 } else {
//                     root = root.left;
//                 }
//             } else {
//                 if (root.right == null) {
//                     root.right = new Node(data)
//                     return;
//                 } else {
//                     root = root.right;
//                 }
//             }
//         }

//     }
//     remove(data){
//        this.root = this.deleteNode(this.root, data)
//     }
//     deleteNode(node, data) {
//             if (node === null) {
//               return node;
//             }
        
//             if (data < node.data) {
//               node.left = this.deleteNode(node.left, data);
//             } else if (data > node.data) {
//               node.right = this.deleteNode(node.right, data);
//             } else {
//               if (node.left === null) {
//                 return node.right;
//               } else if (node.right === null) {
//                 return node.left;
//               }
        
//               node.data = this.minimumValue(node.right);
        
//               node.right = this.deleteNode(node.right, node.data);
//             }
        
//             return node;
//     }
//     minimumValue(root){
//         if(root.left != null){
//             this.minimumValue(root.left)
//         }
//         return root.data
//     }

//     pre() {
//         return this.preOrder(this.root, [])
//     }
//     preOrder(root, result) {
//         if (root != null) {
//             result.push(root.data)
//             this.preOrder(root.left, result)
//             this.preOrder(root.right, result)
//         }
//         return result;
//     }
// }

// let tr = new tree()
// tr.insertNode(10)
// tr.insertNode(20)
// tr.insertNode(30)
// tr.insertNode(5)
// tr.insertNode(3)
// // tr.insertNode(40)
// tr.remove(30)
// console.log(tr.pre());
// // console.log(tr);
// const arr = [1,2,5,3,8,9]
// let arr =arr1.map((X)=>X*2)
// let arr1 = arr.filter((x)=>x%2)
// let output = arr.reduce(function(acc,curr){
//     if(acc <curr){
//         acc = curr
//     }
//     return acc;
// },0)
// console.log(output);

// let abc = users.map((user)=>{
//     return (user.firstName+" "+user.lastName)
// })

// let agesort = users.filter((user)=>{
//     return user.age<22
// })
// console.log(agesort);
// let minage = users.reduce((acc,user)=>{
//     if(acc<user.age){
//         acc = user.age
//     }
//     return acc;
// },-Infinity)
// console.log(minage);

    const users = [
        {firstName:"samrood",lastName:"abcd",age:23},
        {firstName:"muhammed",lastName:"rabeeh",age:23},
        {firstName:"mohammed",lastName:"shahid",age:25},
        {firstName:"mhd",lastName:"sadik",age:27},
    ]

    const output  =users.reduce((acc,curr)=>{
        if(curr.age <25){
       acc.push(curr.firstName+ " " + curr.lastName)
        }
        return acc
    },[])

    console.log(output);