class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class linkedlist{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size
    }

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    print(){
        if(this.isEmpty()) {
            console.log('list is Empty');
            return;
        }else{
            var current = this.head;
            while(current){
                console.log(current.next);
                current = current.next;
            }
        }
    }
}

const list = new linkedlist()
// console.log("list is empty",list.isEmpty())
// console.log("size",list.getSize())
list.prepend(21)
list.print()