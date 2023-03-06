class Node {
    constructor(data,next =null,prev=null){
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}
 
class Dlinkedlist {
    constructor(){
        this.head = null;
        // this.tail = null;
        this.size = 0;
    }

    unshift(data){
        let newNode = new Node(data)
        if(!this.head){
            this.head = newNode;
        }else{
            let temp = this.head
            newNode.next = temp;
            temp.prev = newNode;
            this.head = newNode;
        }
        this.size++
    }
    Push(data){
        let newNode =new Node(data)
        let temp = this.head

        while(temp.next!=null){
            temp = temp.next;
        }
        temp.next = newNode;
        newNode.prev = temp;
        return;
    }
    RemoveDublicate(){
        let current = this.head;
        while (current!=null) {
               let next = current.next;
            while (next!=null && current.data==next.data) {
                next = next.next;
                this.size--
            }
            current.next = next;
            current= next
        }
    }
    display(){
        let temp =this.head
        if(!temp){
            console.log("empty");
        }
        while (temp) {
            console.log(temp.data);
            temp  = temp.next;
        }
    }
}
let Dl = new Dlinkedlist()
Dl.unshift(10);
Dl.unshift(10);
Dl.unshift(10);
Dl.unshift(20);
Dl.unshift(20);
Dl.unshift(30);


// Dl.Push(12)
// Dl.Push(22)
// Dl.Push(25)
Dl.RemoveDublicate()
Dl.display()
console.log(Dl);