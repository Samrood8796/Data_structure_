function dfs(graph,start){
    const visited = new Set()
    const stack = [start]
    while (stack.length >0) {
            let node = stack.pop()
            if(!visited.has(node)){
                visited.add(node)
            }
            let neighbors = graph[node];
            for(const neighbor of neighbors){
                stack.push(neighbor)
        }
    }
}


function binary(arr,target){
    let startIndex = 0
    let lastIndex = arr.length-1
    // console.log(lastIndex);
    let middle;
    while (startIndex<= lastIndex) {
         middle =Math.floor((lastIndex+startIndex)/2)
        // console.log(middle);
        if(arr[middle] == target){
            // console.log("middle");
            return middle;
        }else if(arr[middle] > target){
            lastIndex= middle-1;
        }else{
            startIndex = middle+1
        }
    }
    return -1;
}
let arr = [1,2,3,4,5,6]
console.log(binary(arr,5));