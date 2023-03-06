// function largest(arr) {
//     let largest = arr[0]
//     for (i = 1; i < arr.length; i++) {
//         if (largest < arr[i]) {
//             second = largest
//             largest = arr[i]
//         } else if (arr[i] >second){
//             second = largest;
//         }
//     }
//     return [largest,second];
// }

// function removeDuplicates(arr) {
//     var uniqueElements = {};
//     var newArray = [];
//     for (var i = 0; i < arr.length; i++) {
//         console.log(!uniqueElements[arr[i]]);
//         if (!uniqueElements[arr[i]]) {
//         newArray.push(arr[i]);
//         uniqueElements[arr[i]] = true;
//       }
//     } 
//     return newArray;
// }
// // console.log(removeDuplicates([2,3, 5,3, 2,3, 1, 6,383])); 


// function display( root)
// {
// while (root != null) 
// {
//     document.write( root.data + " ");
//     root = root.next;
// }
// }


// // convert an array to a linked list
// function arrayToLinkedList(arr) {
//     let head = null;
//     let tail = null;
//     for (let i = 0; i < arr.length; i++) {
//        let node = {
//             data: arr[i],
//             next: null
//         };
//         if (tail) {
//             tail.next = node;
//         } else {
//             head = node;
//         }
//         tail = node;
//     }
//     return head;
// }
// console.log(arrayToLinkedList([3,4,2,6,9]));

// function mergeArray(array1,array2){
//     let mergedArray = []
//     for(i=0;i<array1.length;i++){
//         mergedArray.push(array1[i])
//     }
//     for(i=0;i<array2.length;i++){
//         mergedArray.push(array2[i])
//     }
//     console.log(mergedArray);
// }
// // console.log(mergeArray([1,2,3],[3,4,5]));

// function largest(array) {
//     let largest = array[0]
//     let second;
//     for (let i = 0; i < array.length; i++) {
//         if (largest < array[i]) {
//             second = largest
//             largest = array[i]
//         } else if (second < array[i]) {
//             second = array[i]
//         }
//     }
//     let ii= array.indexOf(second)
//     array.push(second)
//     array[ii] = 0;
//     return array;
// }

// // console.log(largest( [4, 6, 3, 2, 86, 43, 12]));


// function stringCount(str) {
//     let count = {}
//     for (let i = 0; i < str.length; i++) {
//         if (count[str[i]] === undefined) {
//             count[str[i]]=1
//         }else{
//             count[str[i]]+=1
//         }
//     }return count;
// }
// // console.log(stringCount("bsbb"));

// function palindrom(str) {
//     var clnstr = str.replace(/\s/g, "").toLowerCase();
//     for (let i = 0; i < clnstr.length/2; i++) {
//         if(clnstr[i]!=clnstr[clnstr.length-i-1]){
//             return false;
//         }
//     }
//     return true
// }
// console.log(palindrom("race car"));

// function unique(arr){ 
//     let unique = {}
//     let newArray = []
//     for(i=0;i<arr.length;i++){
//         if(unique[arr[i]]){
//             newArray.push(arr[i])
//             unique[arr[i]]= true
//         }
//     }
//     console.log(newArray);
// }
// // unique([3,7,9,3,5,7,])


// function arrayTolinked(array) {
//     let head = null
//     let tail = null
//     for (let i = 0; i < array.length; i++) {
//         let Node = {
//             data: array[i],
//             next: null
//         }
//         if (tail) {
//             tail.next = Node;
//         } else {
//             head = Node
//         }
//         tail = Node
//     }
//     return head;
// }

// console.log(arrayTolinked([21, 43, 32, 54, 67]));
// function arrayTolinked(array) {
//     let head = null
//     let tail = null
//     for (let i = 0; i < array.length; i++) {
//         let Node = {
//             data: array[i],
//             next: null
//         }
//         if (!head) {
//             head = Node;
//         } else {
//             tail.next = Node
//         }
//         tail = Node
//     }
//     return head;
// }

// function search(array, target) {
//     let i = 0
//     let j = array.length - 1
//     while (i <= j) {
//         mid = Math.floor((i + j )/ 2)
//         if (target == array[mid]) {
//            return mid
//         }
//         if (target > array[mid]) {
//             i = mid + 1
//         } else {
//             j = mid - 1
//         }
//     }
//     return -1
// }
// let array = [1, 3, 4, 6, 8]
// let target = 4
// console.log(search(array, target)); 

// var searchInsert = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] >= target) {
//             return i;
//         }
//     }
//     return nums.length;

// }
// let array = [1, 3, 4, 6, 8]
// let target = 2
// console.log(searchInsert(array, target)); 

// let myString = "This is a string with spaces";
// let noSpacesString = myString.replace(/\s/g, "");
// console.log(noSpacesString); // Output: "Thisisastringwithspaces"

// mystr = "hai good morning"
// console.log(mystr.match("h","g")); 

// function lastThree(arr){
//     if(arr.length<3){
//         return -1;
//     }
//     let first = arr[0]
//     let second =arr[0]
//     let third = arr[0]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] > first){
//             third = second;
//             second = first
//             first = arr[i]
//         }else if (arr[i]>second){
//             third = second
//             second = arr[i]
//         }else if(arr[i] > third){
//             third = arr[i]
//         }
       
//     }
// return[first,second,third]
// }

// let arr=[1,2,3,45,30,100]
// let [a,b,c] = lastThree(arr)
// console.log(a,b,c);

// console.log(addelementafter([1,5,3,7],7,50));
// function addelementafter(arr,data,value){
//     let i;
//     for(i=0;i<arr.length;i++){
//         if(arr[i]==data){
//             break;
//         }
//     }
//     let length = arr.length-1
//     console.log(i);
//     for(k=length;k>i;k--){
//         arr[k+1] = arr[k]
//     }
//     console.log(k);
//     arr[k+1] = value
//     console.log(arr);
// }

// let son = {
//     name: 'John',
//   };

//   let dad = {
//     name: 'Johnson',
//   }

//   son.dad = dad;
//   dad.son = son;

//   son = null;
//   dad = null;
//   console.log(son);
//   console.log(dad);

// function primeNumber(arr) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         if (isPrime(arr[i])) {
//             console.log(arr[i]);
//         }
//     }
//     return result;
// }

// console.log(primeNumber(arr));

// function isPrime(num, i = 2) {
    //     if (num <= 1) return false;
    //     if (num === 2 || num === i) return true;
    //     if (num % i === 0) return false;
    //     return isPrime(num, i + 1);
    // }
    
    // let result =[]
    // for(i=0;i<arr.length;i++){
//     // console.log(i);
//     for(j=0;j<arr.length;j++){
    //         console.log(j);
//         if(arr[j]!=arr[j+1]){
//             result.push(arr[i])
//         }
//     }
// }
// console.log(result);

// let arr = [1,1,4,2,5,2,3,7,5,3,5]
// unique(arr)
// function unique(arr){
//     let unique = {}
//     let newArray = []
//     for(i=0;i<arr.length;i++){
//        for(j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
            
//         }
//        }
//     }
//     console.log(newArray);
// }

// function nthLargest(arr, n) {
//     arr.sort((a, b) => b - a);
//     console.log(arr);
//     return arr[n - 1];
//   }

//   console.log(nthLargest([1,4,2,7,9,5,8],3));

// let array= [4,2,6,9,4,90,80,45,76,34,23,12,1]
// for (let index = 0; index < array.length; index++) {
//     for (let j = 0; j < array.length; j++) {
//         if(array[j]>array[j+1]){
//             let temp = array[j]
//             array[j]=array[j+1]
//             array[j+1]= temp
//         }        
//     }    
// }
// console.log(array)