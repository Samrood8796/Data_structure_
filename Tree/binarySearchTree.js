class Node
{
    constructor(item)
    {
        this.key = item;
        this.left = this.right = null;
    }
}

let root=null;
 function inorder()
{
    inorderRec(root);
}
 
function inorderRec(root)
{   
    if (root != null) {
        inorderRec(root.left);
        console.log(root.key + " ");
        inorderRec(root.right);
    }
}
function deleteKey(key)
{
    root = deleteRec(root, key);
}

function deleteRec(root,key)
{
        if (root == null){
            return root;
        }
        if (key < root.key){
            root.left = deleteRec(root.left, key);
        }
        else if (key > root.key){
            root.right = deleteRec(root.right, key);
        }
        else {
            if (root.left == null){
                return root.right;
            }
            else if (root.right == null)
                return root.left;
  
            root.key = minValue(root.right);
  
            root.right = deleteRec(root.right, root.key);
        }
  
        return root;
}
 
function minValue(root)
{
    if(root.left == null){
        return root.key
    }else{
        return minValue(root.left)
    }
}
 
function insert(key)
{
    root = insertRec(root, key);
}

function insertRec(root,key)
{
        if (root == null) {
            root = new Node(key);
            return root;
        }
        if (key < root.key)
            root.left = insertRec(root.left, key);
        else if (key > root.key)
            root.right = insertRec(root.right, key);
        return root;
}
function inorder()
{
    inorderRec(root);
}
 
function inorderRec(root)
{
    if (root != null) {
        inorderRec(root.left);
        console.log(root.key + " ");
        inorderRec(root.right);
    }
}


insert(10)
insert(8)
insert(12)
insert(11)
insert(14)
insert(7)
insert(8.5)
insert(8.2)
insert(9)

inorder()
// deleteKey(8)
console.log(root);
// insert(50);
// insert(30);
// insert(20);
// insert(40);
// insert(70);
// insert(60);
// insert(80);
 
// console.log(
// "Inorder traversal of the given tree<br>");
// inorder();
 
// console.log("<br>Delete 20<br>");
// deleteKey(20);
// console.log(
// "Inorder traversal of the modified tree<br>");
// inorder();
 
// console.log("<br>Delete 30<br>");
// deleteKey(30);
// console.log(
// "Inorder traversal of the modified tree<br>");
// inorder();
 
// console.log("<br>Delete 50<br>");
// deleteKey(50);
// console.log(
// "Inorder traversal of the modified tree<br>");
// inorder();
     
// This code is contributed by avanitrachhadiya2155



// class Node {
//     constructor(data) {
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
// }
// class binarySearchTree {
//     constructor() {
//         this.root = null;
//     }

//     Insert(data) {
//         let currentNode = this.root
//         if (currentNode == null) {
//             this.root = new Node(data)
//             return;
//         }
//         while (true) {
//             if (currentNode.data > data) {
//                 if (currentNode.left === null) {
//                     currentNode.left = new Node(data)
//                     return;
//                 }
//                 currentNode = currentNode.left
//             } else {
//                 if (currentNode.right === null) {
//                     currentNode.right = new Node(data)
//                     return;
//                 }
//                 currentNode = currentNode.right
//             }
//         }

//     }

//     Contains(data) {
//         let currentNode = this.root;
//         if (currentNode.data == data) {
//             return true;
//         }
//         while (currentNode != null) {
//             if (currentNode.data > data) {
//                 currentNode = currentNode.left
//             } else if (currentNode.data < data) {
//                 currentNode = currentNode.right
//             } else {
//                 return true;
//             }
//         }
//         return false;
//     }
//     removeNode(data) {
//         let currentNode = this.root
//         this.removeHelper(data, currentNode, null)
//     }
//     removeHelper(data, currentNode, parentNode) {
//         while (currentNode != null) {
//             if (data < currentNode.data) {
//                 parentNode = currentNode
//                 currentNode = currentNode.left
//             } else if (data > currentNode.data){
//                 parentNode = currentNode
//                 currentNode = currentNode.right
//             }else{
//                 if(currentNode.left != null && currentNode.right != null){
//                 currentNode.data = getMinimumValue(currentNode.right)
//               return this.removeHelper(currentNode.data,currentNode.right,currentNode)
//             }else{
//                 console.log("ff");
//                 console.log(currentNode);
//                 currentNode.data = null;
//                 return
//             }
//         }
//         }
//     }
//     getMinimumValue(currentNode){
//         if(currentNode.left == null){
//             return currentNode.data
//         }else{
//            return this.getMinimumValue(currentNode.left)
//         }
//     }
// }

// let tree = new binarySearchTree()
// tree.Insert(20)
// tree.Insert(40)
// tree.Insert(10)
// tree.removeNode(10)
// // tree.Insert(15)
// // console.log(tree.Contains(100));
// console.log(tree);