// class Node {
//     constructor(data){
//         this.value = data
//         this.next = null
//     }
// }

// class Stack {
//     constructor(){
//         this.top =null
//         this.length = 0
//     }

//     //append a node
//     append(data) {
//         const node = new Node(data)
//         if (this.length == 0) {
//             this.top = node 
//         }else{
//             let temp = this.top
//             this.top = node
//             node.next = temp
//         }
//         this.length ++
//     }

//     display(){
//         console.log(this.top);
//     }

//     remove(){
//         const newTop = this.top.next;
//         this.top = newTop
//         this.length--;
//     }
// }

// const myStack = new Stack()
// myStack.append(10)
// myStack.append(40)
// myStack.append(20)
// myStack.remove()
// myStack.display()

class Node {
    constructor(data,next = null){
        this.data = data 
        this.next = next
    }
}

class Stack {
    constructor(){
        this.top = null
    }

    push(data){
        let newNode = new Node(data)
        if(this.top == null){
            this.top = newNode
        }else{
            newNode.next = this.top
            this.top = newNode
        }
    }
    pop() {
        if (this.top ==null ) {
            console.log("stack is underflow");
            return;
        }else{
           
           this.top = this.top.next
        }
    }
    display (){
        if(this.top == null){
            console.log("stack is underflow");
        }
        let current = this.top
        while (current) {
            console.log(current.data);
            current= current.next
        }
    }
}

let ss = new Stack()
ss.push(1)
ss.push(2)
ss.push(3)
ss.pop()
console.log(ss);

ss.display()