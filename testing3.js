
// function mergeSort(arr){
//     if(arr.length <2){
//         return arr;
//     }
//     let mid = Math.floor(arr.length/2)
//     let leftArr = arr.slice(0,mid)
//     let rightArr = arr.slice(mid)
//     return merge(mergeSort(leftArr),mergeSort(rightArr))
// }

// function merge(leftArr,rightArr){
//     let temp = []
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0] > rightArr[0]){
//             temp.push(rightArr.shift())
//         }else{
//             temp.push(leftArr.shift())
//         }
//     }
//     return [...temp,...leftArr,...rightArr]
// }

// let arr = [1,5,2,7,3]
// console.log(mergeSort(arr));

class Node {
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class tree {
    constructor(){
        this.root = null
    }

    insert(data){
       this.root = this.insertRec(this.root,data)
       
    }

    insertRec(root,data){
        if(root == null){
            root = new Node(data)
            return root;
        }
        if(data < root.data){
            root.left =  this.insertRec(root.left,data)
        }

        if(data > root.data){
           root.right = this.insertRec(root.right,data)
        }
        return root;
    }
    contains(data){
         this.containRec(this.root,data)
    }
    containRec(root,data){
        if(root == null) {
            console.log(false);
            return;
        }

        if(data<root.data){
            this.containRec(root.left,data)
        }else if(data>root.data){
            this.containRec(root.right,data)
        }else{
            console.log(true);
            return;
        }
    }
    height(){
        console.log(this.heightRec(this.root)); 
    }
    heightRec(root){
        if(root==null){
            return 0;
        }
        let left = this.heightRec(root.left);
        let right = this.heightRec(root.right);
        return Math.max(left,right)+1
    }

}

let tr = new tree()
tr.insert(20)
tr.insert(18)
tr.insert(17)
tr.insert(2)
tr.insert(40)
tr.contains(10)
tr.height(40)