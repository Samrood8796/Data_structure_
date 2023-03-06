// class Node {
//     constructor(data){
//         this.value = data
//         this.next =null
//     }
// }

// class Queue {
//     constructor(){
//         this.first = null
//         this.last = null
//         this.length = 0
//     }
//     Enqueue(data){
//         const newNode = new Node(data)
//         if(this.length == 0){
//             this.first =newNode
//             this.last = newNode
//         }else{
//             this.last.next =newNode
//             this.last = newNode
//         }
//         this.length++
//     }
//     display(){
//         console.log(this.first);
//         console.log(this.last);
//     }
//     dequeue(){
//         this.first = this.first.next
//         this.length++;
//     }
// }


// const queue =new Queue()
// queue.Enqueue(10)
// queue.Enqueue(20)
// queue.Enqueue(30)
// queue.dequeue()
// queue.display()
class Node {
    constructor(data,next = null){
        this.data = data
        this.next = next
    }
}

class queue {
    constructor(){
        this.front = null
        this.rear =  null
    }

    enque(data){
        let newNode = new Node(data)
        if(this.rear == null ){
            this.front = this.rear = newNode
            return;
        }
        this.rear.next = newNode
        this.rear = newNode
        return;
    }
    deque(){
        if (this.rear == null) {
            console.log("que is empty");
        }else{
            this.front = this.front.next
        }
        if(this.front == null){
            this.rear =null
        }
        
    }
    display(){
        if(this.rear == null){
            console.log("empty");
            return;
        }
        let current = this.front
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }

}
let qq = new queue()
qq.enque(1)
qq.enque(2)
qq.enque(3)
qq.deque()
qq.deque()
qq.deque()
qq.display()