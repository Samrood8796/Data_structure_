class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class Slinkedlist {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data) {
        let newNode = new Node(data)
        if (!this.head) {
            this.head = newNode;
            this.size++;
            return;
        }
        let current = this.head
        while (current.next) {
            current = current.next;
        }
        this.size++;
        current.next = newNode;

    }
    unshift(data) {
        let newNode = new Node(data)
        if (!this.head) {
            this.head = newNode
        } else {
            let temp = this.head
            newNode.next = temp
            this.head = newNode
        }
        this.size++;
        return;
    }

    delete(data) {
        let temp = this.head
        let prev = null;
        if (temp != null && data == temp.data) {
            this.head = temp.next;
            this.size--
            return;
        }
        while (temp.next != null && temp.next.data != data) {
            prev = temp;
            temp = temp.next;
        }
        if (temp.next) {
            let removeNode = temp.next;
            temp.next = removeNode.next;
            this.size--
            return;
        }
        return null;

    }
    addAfterNode(n, data) {
        let newNode = new Node(data)
        let temp = this.head

        while (temp != null && temp.data != n) {
            temp = temp.next
        }

        if (temp == null) {
            return;
        }
        newNode.next = temp.next;
        temp.next = newNode;
        this.size++;
    }

    display() {
        if (!this.head) {
            console.log("list is Enpty")
            return;
        }
        let temp = this.head
        while (temp) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
    reverseNode() {
        let prev = null;
        let current = this.head
        while (current) {
            let next = current.next
            current.next = prev
            next = next.next
            prev = current;
            current = next;
        }
        this.head = prev;
    }
    sort() {
        let current = this.head;
        let swapped = true
        while (swapped) {
        swapped = false
            while (current.next != null) {
            if (current.data > current.next.data) {
                // console.log(current);
                let temp = current.data
                current.data = current.next.data;
                current.next.data = temp
                swapped=true
            }
            current = current.next;
        }
        current = this.head
    }
}
}
let S1 = new Slinkedlist()
S1.unshift(60)
S1.unshift(1)
S1.unshift(940)
S1.unshift(27)
S1.unshift(13)
S1.unshift(18)
S1.unshift(14)
S1.sort()
S1.display()
