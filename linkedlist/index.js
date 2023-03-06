
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

    // Insert first Node
    insertFirst(data){
        this.head = new Node(data,this.head)
        this.size++;
        // var node = new Node(data)
        // if(!this.head){
        //     this.head = node;
        // }else{
        //     node.next = this.head;
        //     this.head = node;
        // }
    }
    //insert last node
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
    //insert At _index
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
    //getting index

    getAt(index){
        let current = this.head
        let count =0;
        while(current){
            if(count == index){
                console.log(current.data);
            }
            count++;
            current = current.next;

        }
        return;
    }
    //remove at index
    removeAt(index){

        let current = this.head;
        let previous = 0
        let count =0;
        if(index <0 && index > this.size){
            console.log('out of index');
            return;
        }else{
            while(count  < index){
                count++;
                previous = current;
                current = current.next;
            }
                previous.next = current.next;
        }
        this.size--;

    }

    //print all data

    display(){

        let current = this.head;
        
        while(current){
            console.log(current.data);
            current = current.next;
        }
      
    }

    distinct() {
        current = this.head;
        temp = current.next;
        while(current!=null){
             if(current.data == temp.data){
                console.log(current.data);
             }
            current =crrent.next;
        }
    }



    removeData(value){
        let previous;
        let current = this.head;
        while(current){
            if(current.data == value){
                previous = current;
                current = current.next;
                this.size--;
            }
            current=current.next
        }
        // console.log(previous);
       previous.next =current;
        return;
    }
}

const list = new linkedlist()
list.insertFirst(10)
list.insertFirst(20)
list.insertFirst(50)
list.insertLast(43)
list.removeData(50)
// list.insertAt(67,0)
// list.getAt(2)
// list.removeAt(2)
list.display()
































































// class Node{
//     constructor(data,next = null){
//         this.data =data;
//         this.next = next;
//     }
// }

// class LinkedList {
//     constructor(){
//         this.head =null;
//         this.size = 0;
//     }

//     //insert first node
//     insertFirst(data) {
//         this.head =new Node(data,this.head);
//         this.size++
//     }

//     //insert last node 
//     insertLast(data){
//         let node = new Node(data)
//         let current;

//         // if empty make head
//         if(!this.head){
//             this.head = node;

//         }else{
//             current = this.head;

//             while (current.next) {
//                 current= current.next
//             }
//             current.next = node;
//         }
//         this.size++
//     }

//     //insert at index
//     insertAt(data,index){
//         if(index >0 && index > this.size){
//         return;
//     }
//     if(index === 0){
//         this.head =new Node(data,this.head);
//         return;
//     }
//     const node = new Node(data);
//     let current,previous;

//     //set current to first
//     current = this.head;
//     let count = 0;

//     while(count<index){
//         previous = current  //node before index
//         count++
//         current = current.next;  //node after the index

//     }
//     node.next = current;
//     previous.next = node;
// }
   
//     //get at index
//     getAt(index){
//         let current = this.head;
//         let count=0;

//         while(current){

//             if(count == index){
//                 console.log(current.data);

//             }
//             count++;
//             current =current.next;

//         }
//         return null;

        
        

        
//     }
//     //remove index
//     removeAt(index){
//         if(index > 0 &&  index >this.size){
//             return;
//         }
//         let current = this.head;
//         let previous;
//         let count;

//         //remove first
//         if(index === 0){
//             this.head = current.next;

//         }else{
//             while (count <index) {
//                 count++;
//                 previous = current;
//                 current = current.next;
//             }

//             previous = current.next;
//         }
//         this.size--;
//     }

//     //print list data
//     printListData(){
//         let current = this.head;
//         while(current){
//             console.log(current.data);
//             current = current.next;
//         }
//     }
// }

// const ll =new LinkedList()
// ll.insertFirst(10)
// ll.insertFirst(20)
// ll.insertFirst(30)
// // ll.insertLast(50)
// // ll.removeAt(2)
// ll.printListData()
// // ll.insertAt(500,2)
// // ll.getAt()