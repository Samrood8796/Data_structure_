// function Result(arr,target){
//     for(i=0;i<arr.length;i++){
//         for(j=i+1;j<arr.length-1;j++){
//             if(arr[i]+arr[j] == target){
//                 return[i,j]
//             }
//         }
//     }
// }

// console.log(Result([1,2,4,7,3],6))

// function Result(arr,target){
//     let set = []
//         for(i=0;i<arr.length;i++){
//             let num = arr[i]
//             let match = target-num
//             if(set.includes(match)){
//              return([match,num])   
//             }else{
//             set.push(arr[i])
//             }
//      }
//     }

// dublicate add in to last

// function PrintLast (arr,target) {
//     let length = arr.length/2;
//     for(i=0,j=arr.length-1;i<length;i++){
//         if(arr[j] == target){
//             j--
//         }

//         if(arr[i]== target){
//             console.log(arr[j]);
//             temp = arr[j]
//             arr[j] = arr[i]
//             arr[i]= temp
//             console.log(arr[j]);
//         }

//     }
//     return arr;
// }

// let arr=[7,1,6,5,6,1,5,6,3,0,6,4]
// console.log(PrintLast(arr,6)); 

//  function PrintLast (arr,target) {
//     let i=0;
//     let j = arr.length - 1

//     while (i<j) {
//         while(i<j && arr[j] == target){
//             j--
//         }

//         if(arr[i] == target){
//             temp = arr[j]
//             arr[j]= arr[i]
//             arr[i] = temp
//         }
//         i++;
//     }
//     return arr;
// }

// function Sort(arr) {
//     for(i=0;i<arr.length-1;i++){
//         for (let j = i+1; j < arr.length; j++) {
//             if(arr[i]>arr[j]){
//             let temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//             }
//         }
//     }
//     console.log(arr);
// }
// let arr =[2,4,1,3,78,34,34,32,9,0,5,1,23]
// Sort(arr)

function target(array,target  ) {
    let result = []
    let i=0;
    for (let index = 0; index < array.length; index++) {
        if(target- array[index]==array[index]){
            result[i] = array[index]
        }        
    }
    return result
}

console.log(target([32,3,2,14],5));