// class Stack {
//     constructor(){
//         this.items = []
//         this.count = 0
//     }

//     // add element in to an array
//     push(element){
//         this.items[this.count] = element
//         console.log(`${element} added to ${this.count} position`);
//         this.count ++
//         return this.count-1;
//     }

//     // delete an element
//     pop(){
//         if(this.count == 0 ) return undefined


//         let deleteitem = this.items[this.count - 1]
//         console.log(`${deleteitem} removed`);
//         this.count--

//         return;

//     }

// }

// const stack = new Stack()
// stack.push(100)
// stack.push(200)
// stack.pop()
// console.log(stack);


class Stack {
    constructor(size) {
        this.array = new Array(size)
    }
    push(data) {
        this.array.push(data)
    }
    pop() {
        console.log(this.array.length);
        this.array.pop()
    }
    peek(){
        console.log(this.array[this.array.length - 1]); 
    }
    display() {
        if (this.array.length == 0) {
            console.log("stack is empty");
        } else {
            console.log(this.array);
        }
    }
}
const stack = new Stack(10)

// stack.push(10)
// stack.push(11)
// stack.peek()
stack.pop()
// stack.display()