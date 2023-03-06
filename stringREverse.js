// function stringReverse(str){
//     let reversed = ''
//     for(let i=str.length-1;i>=0;i--){
//         reversed+=str[i]
//     }
//     return reversed
// }
// console.log(stringReverse("hai"));

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let mergedArray =[]
// let index = 0;
// for (let i = 0; i < array1.length; i++) {
//   mergedArray[index] = array1[i];
//   index++;
// }


// for (let i = 0; i < array2.length; i++) {
//   mergedArray[index] = array2[i];
//   index++;
// }
// console.log(mergedArray);


// function bubbleSort(arr,n) {
//     for (let i = 0; i < arr.length-1; i++) {
//         for (let j = 0; j < arr.length - 1-i; j++) {
//             if (arr[j] > arr[j+1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//                 console.log(arr[j+1],"  ",arr[j])
//             }
//         }
//         console.log('dddddd');
//     }
//     return arr;
// }
// let numbers = [4, 2, 9, 1, 3];
// console.log(bubbleSort(numbers,2)); 