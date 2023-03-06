function quickSort(arr){
    console.log(arr.length);
    if(arr.length <2){
        console.log("df");
        return arr;
    }
    let pivot = arr[arr.length - 1]
    let left =[]
    let right =[]
    for(let i=0;i<arr.length - 1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

let arr =[3,1,6,4,9,2]
console.log(quickSort(arr));