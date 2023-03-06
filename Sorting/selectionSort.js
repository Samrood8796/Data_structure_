// Selection sort
function selection(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minindex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minindex]) {
                minindex = j
            }
        }
        if(minindex !==i){
            [arr[i],arr[minindex]] = [arr[minindex],arr[i]]
        }
        
    }
}
let arr = [5,6,1,3,2,4]
selection(arr)
console.log(arr);