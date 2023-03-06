class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // function to add a new node to the list
    add(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // function to split the list in two
    split(head) {
        let slow = head;
        let fast = head.next;
        while (fast) {
            fast = fast.next;
            if (fast) {
                slow = slow.next;
                fast = fast.next;
            }
        }
        let second = slow.next;
        slow.next = null;
        return second;
    }

    // function to merge two sorted lists
    merge(first, second) {
        console.log(first,second);
        let dummy = new Node(0);
        let current = dummy;
        while (first && second) {
            if (first.value <= second.value) {
                current.next = first;
                first = first.next;
            } else {
                current.next = second;
                second = second.next;
            }
            current = current.next;
        }
        if (first) {
            current.next = first;
        }
        if (second) {
            current.next = second;
        }
        return dummy.next;
    }

    // function to sort the list using merge sort
    sort() {
        console.log("ffffff");
        if (!this.head || !this.head.next) {
            return this.head;
        }
        console.log("fff");
        let second = this.split(this.head);
        console.log(".........");
        let first = this.head;
        first = this.sort(first);
        second = this.sort(second);
        console.log(first);
        console.log(second);
        return this.merge(first, second);
    }


}

let ll =new LinkedList()
ll.add(29)
ll.add(27)
ll.add(22)
ll.add(23)
console.log('ff');
ll.sort()

console.log(ll);