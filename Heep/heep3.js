class Heap {
    constructor() {
        this.heap = []
    }
    getLeftChild(i) {
        return 2 * i + 1
    }
    getRightChild(i) {
        return 2 * i + 2
    }
    getParent(i) {
        return Math.floor((i - 1) / 2)
    }
    insertOne(data) {
        this.heap.push(data)
        this.heapifyUp()
    }
    delete() {
        this.heap[0] = this.heap[this.heap.length - 1]
        this.heap.pop(this.heap.length - 1)
        this.heapifyDown()
    }
    heapifyDown() {
        let idx = 0
        console.log(this.heap[0]);
        while (this.heap[this.getLeftChild(idx)] != undefined) {
            let small = this.getLeftChild(idx)
            if (this.heap[this.getRightChild(idx) != undefined] &&
                this.heap[this.getRightChild(idx)] < this.heap[this.getLeftChild(idx)]) {
                small = this.getRightChild(idx)
            }
            if (this.heap[small] < this.heap[idx]) {
                this.swap(small, idx)
                idx = small
            } else {
                return;
            }
        }
     
    }
    swap(i1, i2) {
        let temp = this.heap[i1]
        this.heap[i1] = this.heap[i2]
        this.heap[i2] = temp
    }
    heapifyUp() {
        let idx = this.heap.length - 1
        while (idx > 0 && this.heap[this.getParent(idx)] > this.heap[idx]) {
            let par = this.getParent(idx);
            [this.heap[par], this.heap[idx]] = [this.heap[idx], this.heap[par]]
            idx = par
        }
    }
}

let h = new Heap()
h.insertOne(20)
h.insertOne(40)
h.insertOne(80)
h.insertOne(22)
h.insertOne(1)
h.insertOne(52)
h.insertOne(2)
//  h.delete() 
console.log(h);
