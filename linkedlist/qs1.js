// // Representation of a node
// class Node {
//     constructor() {
//             var data;
//             var next;
//          }
//     }
      
      
// Function to insert node
function insert( root, item)
{
var temp = new Node();
var ptr;
temp.data = item;
temp.next = null;

if (root == null)
    root = temp;
else 
{
    ptr = root;
    while (ptr.next != null)
        ptr = ptr.next;
    ptr.next = temp;
}
return root;
}

// function display( root)
// {
// while (root != null) 
// {
//     document.write( root.data + " ");
//     root = root.next;
// }
// }

function arrayToList( arr)
{
var root = null;
for (let i = 0; i < arr.length; i++)
    root = insert(root, arr[i]);
return root;
}

// // Driver Code
//  let arr = [ 1, 2, 3, 4, 5 ];
// let n = arr.length;
// var root = arrayToList(arr, n);
// display(root);

class Node {
    constructor(data,next = null){
        this.data = data;
        this.next = next;
    }
}

class linkedlist {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    //insert last
    insertLast(data){
        let node = new Node(data)
        let current;
        if(!this.head){
            this.head = node;
        }else{
            current = this.head
            while(current.next){
                current = current.next;

            }
            current.next = node;
        }
        this.size++;

    }

    //array adding
    insertLastInArray(array){
        let i =0;
        for (i=0;i<array.length;i++){

            let node = new Node(array[i])
        let current;
        if(!this.head){
            this.head = node;
        }else{
            current = this.head
            while(current.next){
                current = current.next;

            }
            current.next = node;
        }
        this.size++;
        }
    }

        //reverse linked list
        reverse() {
            let first =  this.head;
            this.tail = this.head;
            let second = first.next;

            while(second) {
               let temp = second.next;
                second.next =first

                first =second;
                second = temp;
            }
            this.head.next = null;
            this.head = first;
        }


      //print all data

      display(){

        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }

    // adding a node after element
    insertNode(data,indexdata){
        let current = this.head;
        let temp;
        let node = new Node(data)
        while(current) {
            if(current.data == indexdata){
                temp =current.next;
                current.next = node;
                node.next = temp;
            }
            current=current.next;
        }
        this.size++
    }
    insertAt(data, index){
        let node = new Node(data,this.head)
        if (index >0 && index >this.size){
            return;
        }
        if(index == 0){
            this.head = node;
            return;
        }
        var current,previous;
        current = this.head;
        let count =0;

        while(count < index){
            previous = current;
            count++;
            current= current.next;
        }
       node.next = current;
       previous.next = node;

       this.size++

        
    }
}

let cars = [10,20,4,4,5,6,7]
const ll = new linkedlist()
ll.insertLastInArray(cars)
// ll.reverse()
ll.insertNode(3,4)

ll.display()