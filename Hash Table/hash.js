// class HashTable {
//     constructor(size){
//         this.table = new Array(size)
//         this.size =size
//     }

//     Hash(key){
//         let total  =0;
//         for (let i = 0; i < key.length; i++) {
//             total+=key.charCodeAt(i)
//         }
//         return total % this.size
//     }   
//     set(key,value){
//         const index = this.Hash(key)
//         this.table[index] =value
//     }
//     get(key){
//         let index = this.Hash(key)
//         return this.table[index]
//     }

//     remove(key){
//         let index = this.Hash(key)
//         this.table[index] = undefined
//     }
//     display(){
//         for (let i = 0; i < this.table.length; i++) {
//             console.log(i,"-->",this.table[i]);
//         }
//     }
// }
// let Hash = new HashTable(50)
// Hash.set("id","sam")
// Hash.set("age",22)
// Hash.display()
// Hash.remove("age")
// console.log(Hash.get("id"))
// console.log(Hash.get("age"))




class HashTable {
    constructor(size){
        this.table = new Array(size)
        this.size =size
    }

    Hash(key){
        let total  =0;
        for (let i = 0; i < key.length; i++) {
            total+=key.charCodeAt(i)
        }
        return total % this.size
    }   
    set(key,value){
        const index = this.Hash(key)
        // this.table[index] =value
        const bucket  = this.table[index]
        console.log("jjjjjjj");
        if(!bucket){
            bucket = [[key,value]]
        }else{
            const samekeyitem = bucket.find(item =>item[0]===key )
            console.log(samekeyitem);
            if(samekeyitem){
                samekeyitem[1]=value
            }else{
                bucket.push([key,value])
            }
        }
    }
    get(key){
        let index = this.Hash(key)
        return this.table[index]
    }

    remove(key){
        let index = this.Hash(key)
        this.table[index] = undefined
    }
    display(){
        for (let i = 0; i < this.table.length; i++) {
            if(this.table[i])
            console.log(i,"-->",this.table[i]);
        }
    }
}
let Hash = new HashTable(50)
Hash.set("id","sam")
Hash.set("age",22)
Hash.display()