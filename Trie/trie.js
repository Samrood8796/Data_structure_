class TrieNode {
    constructor() {
      this.children = new Map();
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }

    insert(word) {
      let current = this.root;
  
      for (let i = 0; i < word.length; i++) {
        const char = word.charAt(i);
        let node = current.children.get(char);
        if (!node) {
          node = new TrieNode();
          current.children.set(char, node);
        }
        current = node;
      }
      current.isEndOfWord = true;
    }
  
    search(word) {
      let current = this.root;
  
      for (let i = 0; i < word.length; i++) {
        const char = word.charAt(i);
        const node = current.children.get(char);
  
        if (!node) {
          return false;
        }
        current = node;
      }
      return current.isEndOfWord;
    }
  
    startsWith(prefix) {
      let current = this.root;
      for (let i = 0; i < prefix.length; i++) {
        const char = prefix.charAt(i);
        const node = current.children.get(char);
  
        if (!node) {
          return false;
        }
        current = node;
      }
      return true;
    }
  }