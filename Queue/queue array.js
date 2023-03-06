class queue {
    constructor(){
        this.array = []
    }

    Enqueue(data){
        this.array.push(data)
    }

    Dequeue(){
        this.array.shift()
    }

    peek(){
        console.log(this.array[this.array.length-1]);
    }
    display(){
        console.log(this.array);
    }
}

const myQueue = new queue()
myQueue.Enqueue(12)
myQueue.Enqueue(13)
myQueue.Enqueue(16)
myQueue.Dequeue()
myQueue.display()
// myQueue.peek()
