function stringConverter(str,key){
    let newkey = key % 26;
    let arr = ""
    console.log(str.length);
    for(i=0;i<str.length;i++){
        let p = str.charCodeAt(i)+newkey
        console.log(p);
        if(p <=122){
            arr += String.fromCharCode(p)
        }else{
            arr += String.fromCharCode(96+p%122)
        }
    }
    return arr;
}
console.log(stringConverter("hai",2));