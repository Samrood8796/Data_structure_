function mergeSort(arr) {
  if(arr.length <2){
    return arr;
  }
  const mid = Math.floor(arr.length/2)
  let leftArr = arr.slice(0,mid)
  let rightArr = arr.slice(mid)
 return merge(mergeSort(leftArr),mergeSort(rightArr))
}

function merge(leftArr,rightArr){
  let  temp = []
  while (leftArr.length && rightArr.length) {
      if(leftArr[0]<=rightArr[0]){
          temp.push(leftArr.shift())
      }else{
          temp.push(rightArr.shift())
      }
  } 
  return [...temp,...leftArr,...rightArr]       
}

let arr = [4,2,1,6,3,7]
console.log(mergeSort(arr));  