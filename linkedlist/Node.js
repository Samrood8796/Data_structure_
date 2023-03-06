class Node{
    constructor(data){
        this.data = data;
        this.next =null;
    }
}

class linkedlist{
    constructer(){
        this.head = null;
        this.size = 0;
    }

    push(data){
        let node = new Node(data)
        if(!this.head){
            this.head = node;
            this.size++;
            return;
        }
        let current = this.head
        while(current.next){
            current = current.next;
            this.size++
        }
        current.next = node
    }
    print(){
       let current = this.head;
       
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }



}
var ll = new linkedlist()
ll.push(10)
ll.push(1045)
ll.push(104)
ll.print()
console.log(ll.size);