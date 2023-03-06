class TrieNode {
    constructor() {
        this.children = new Map()
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
        this.endSymbol = "*"
    }
    insertOne(word){
        let root = this.root
        for(let i=0;i<word.length;i++){
            let letter = word.charAt(i)
            if(!root.children.has(letter)){
                let newNode = new TrieNode()
                root.children.set(letter,newNode)
            }
            root = root.children.get(letter)
        }
        root.children.set(this.endSymbol,null)
    }

    insert(word) {
        for (let i = 0; i < word.length; i++) {
            this.insertStartngAt(i, word)
        }
    }
    insertStartngAt(index, word) {
        let root = this.root
        for (let i = index; i < word.length; i++) {
            let letter = word.charAt(i)
            if (!root.children.has(letter)) {
                let newNode = new TrieNode()
                root.children.set(letter, newNode)
            }
            root = root.children.get(letter)
        }
        root.children.set(this.endSymbol, null)
    }
    contains(word) {
        let root = this.root
        for (let i = 0; i < word.length; i++) {
            let letter = word.charAt(i)
            if (!root.children.has(letter)) {
                return false;
            }
            root = root.children.get(letter)
        }
        return root.children.has(this.endSymbol)
    }
}
let Tr = new Trie()
Tr.insert("mannan")
Tr.insertOne("hai")
console.log(Tr.contains("haii")); 
console.log(Tr);