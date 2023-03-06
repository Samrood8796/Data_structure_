function Doublylinkedlist(){

    let Node = function(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }   
    let head = null;
    let tail = null;
    length =0;

    this.append() = function (data){
        let node = new Node(data)
        if(head == null){
            head = node;
            tail = node;
        }else{
        tail.next = node;
        node.prev = tail;
        tail = node;
        }
        length++;
    }
}



