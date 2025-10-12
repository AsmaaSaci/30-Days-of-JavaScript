class TrieNode {
    constructor() {
        this.isWord = false;
        this.children = new Map();
    }
}

class StreamChecker {
    constructor(words) {
        this.root = new TrieNode();
        this.words = [...words];
        this.chars = [];
        this.insert();
    }

    insert() {

        for (const word of this.words) {
            let curr = this.root;
            for (let i = word.length - 1; i > -1; i--) {
                if (!curr.children.has(word[i])) curr.children.set(word[i], new TrieNode());
                curr = curr.children.get(word[i]);
            }
            curr.isWord = true;
        }

    }

    query(letter) {

        this.chars.push(letter);

        let curr = this.root;

        for (let i = this.chars.length - 1; i > -1; i--) {
            if (!curr.children.has(this.chars[i])) return false;
            curr = curr.children.get(this.chars[i]);
            if (curr.isWord) return true;
        }

        return false;
    }
}

/** 
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */
