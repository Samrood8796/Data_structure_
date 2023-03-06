// class Minheap {
//     constructor(){
//         this.heap = new Array()

//     }
//     peak(){
        
//     }
//     remove(){

//     }
//     insert(data){
//         this.heap[this.heap.length] = data
//         this.heapifyUp()
//     }
//     removeRoot(){
//         let maxValue = this.heap[0]
//         this.heap[0] =this.heap[this.heap.length-1]
//         this.heap.length--
//         this.heapifyDown()
//         return maxValue;
//        }
//     swap(i1,i2){
//         let temp = this.heap[i1]
//         this.heap[i1] = this.heap[i2]
//         this.heap[i2] = temp
//     }
//     heapifyUp(){
//         let currentIndex = this.heap.length-1
//         while(this.heap[currentIndex] > this.heap[this.parent(currentIndex)]){
//             this.swap(currentIndex,this.parent(currentIndex))
//             currentIndex = this.parent(currentIndex)
//         }
//     }
//     heapifyDown(){
//         let currentIndex =0
//         while(this.heap[this.leftChild(currentIndex)] != undefined){
//             let biggestChildIndex = this.leftChild(currentIndex)
//             if(this.heap[this.rightChild(currentIndex)] != undefined 
//             && this.heap[this.rightChild(currentIndex)] > this.heap[this.leftChild(currentIndex)]){
//                 biggestChildIndex = this.rightChild(currentIndex)
//             }

//             if( this.heap[currentIndex] < this.heap[biggestChildIndex]){
//                 this.swap(currentIndex,biggestChildIndex)
//                 currentIndex = biggestChildIndex
//             }else{
//                 return;
//             }
//         }
//     }
//     parent(index){
//         return Math.floor((index-1)/2)
//     }
//     leftChild(index){
//         return((2*index)+1)
//     }
//     rightChild(index){
//        return((2*index)+2)
//     }
// }

// let Min = new Minheap()
// Min.insert(20)
// Min.insert(40)
// Min.insert(50)
// Min.insert(22)
// Min.insert(42)
// Min.insert(52)
// console.log(Min);
// let a= []
// a.push(Min.removeRoot())
// a.push(Min.removeRoot())
// a.push(Min.removeRoot())
// a.push(Min.removeRoot())
// console.log(Min);
// console.log(a);




class heap {
    constructor() {
        this.heap = new Array()
    }
    leftIndex(index) {
        return 2 * index + 1
    }
    rightIndex(index) {
        return 2 * index + 2
    }

    parentIndex(index) {
        return Math.floor((index - 1) / 2)
    }
    swap(i1, i2) {
        let temp = this.heap[i1]
        this.heap[i1] = this.heap[i2]
        this.heap[i2] = temp
    }
    insert(data) {
        this.heap.push(data)
        this.heapifyUp()
    }
    delete() {
        this.heap[0] = this.heap[this.heap.length - 1]
        this.heap.pop(this.heap.length - 1)
        this.heapifyDown()
    }
    heapifyUp() {
        let currIndex = this.heap.length - 1
        while (currIndex > 0 && this.heap[currIndex] < this.heap[this.parentIndex(currIndex)]) {
            this.swap(currIndex, this.parentIndex(currIndex))
            currIndex = this.parentIndex(currIndex)
        }
    }
    heapifyDown() {
        let currentIndex = 0
        while (this.heap[this.leftIndex(currentIndex)] != undefined) {
            let small = this.leftIndex(currentIndex)
            if (this.heap[this.rightIndex(currentIndex)] != undefined &&
                this.heap[this.rightIndex(this.currentIndex)] < this.heap[small]) {
                small = this.rightIndex(currentIndex)
            }
            if (this.heap[small] > this.heap[currentIndex]) {
                return;
            }
            this.swap(small, currentIndex)
            currentIndex = small
        }
    }
}

let h = new heap()
h.insert(10)
h.insert(20)
h.insert(50)
h.insert(60)
