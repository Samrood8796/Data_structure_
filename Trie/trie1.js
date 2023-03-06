class TrieNode {
    constructor() {
        this.children = new Map()
        this.endOfWord = false
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }
    insert(word) {
        let root = this.root
        for (let i = 0; i < word.length; i++) {
            let letter = word.charAt(i)
            if (!root.children.has(letter)) {
                let newNode = new TrieNode
                root.children.set(letter, newNode)
            }
            root = root.children.get(letter)
        }
        root.endOfWord = true
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
        // return root.children.endOfword
        if (root.endOfWord) {
            return true
        } else {
            return false
        }
    }

    autoComplete(word) {
        let root = this.root;
        for (let letter of word) {
            // console.log(letter);
            if (!root.children.has(letter)) {
                console.log(letter);
                return [];
            }
            root = root.children.get(letter);
            console.log(root);
        }
        return this._dfs(root, word)
    }

    _dfs(node, word) {
        let result = [];
        if (node.endOfWord) {
            result.push(word);
        }
        for (let [letter, child] of node.children) {
            result.push(...this._dfs(child, word + letter));
        }
        return result;
    }
}

let Tr = new Trie()
Tr.insert("hai")
Tr.insert("haii")
console.log(Tr.contains("ha"));
console.log(Tr.autoComplete("hai"));
