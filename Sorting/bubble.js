//bubble Sort
function bubbleSort(arr) {
    for(i=0;i<arr.length-1;i++){
        for (let j = 0; j < arr.length-i-1; j++) {
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] =[arr[j+1],arr[j]]
            }
        }
    }
    return arr;
}
console.log(bubbleSort([5,2,4,1,9]));

//bubble Sort in recursion
function bubbleRecursion(arr, n) {
    console.log(arr, n);
    if (n == 0) {
        return;
    }
    for (let i = 0; i < n; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
        }
    }
    bubbleRecursion(arr, n - 1)
    return arr;
}
console.log( bubbleRecursion([5, 2, 7, 1, 4], 5));