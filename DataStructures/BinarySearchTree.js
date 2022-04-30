class Node {
  constructor(value){
      this.value = value;
      this.left = null;
      this.right = null
  }
};

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(value) {
        const newNode = new Node(value)
        if(!this.root) {
            this.root = newNode
            return this;
        }
        let currentNode = this.root
        while(true) {
            if (value<currentNode.value) {
                if(!currentNode.left) {
                    currentNode.left = newNode
                    return this;
                }
                currentNode = currentNode.left
            }
            else {
                if(!currentNode.right){
                    currentNode.right = newNode
                    return this;
                }
                currentNode = currentNode.right
            }
        }  
    }
    lookup(value) {
        if(!this.root) return false;
        let currentNode = this.root
        while(currentNode) {
            if(value<currentNode.value) {
                currentNode = currentNode.left
            }
            else if(value>currentNode.value) {
                currentNode = currentNode.right
            }
            else if(value===currentNode.value) {
                return currentNode
            }
        }
        return false;
    }
    //  remove(value) {
    // }
};

//      9
//   4   20
// 1  6 15 170
const myBST = new BinarySearchTree()
myBST.insert(9)
myBST.insert(4)
myBST.insert(6)
myBST.insert(20)
myBST.insert(170)
myBST.insert(15)
myBST.insert(1)
console.log(myBST.lookup(6))
console.log(JSON.stringify(traverse(myBST.root)))

function traverse(node){
    const tree = {value: node.value};
    tree.left = node.left === null ? null :
    traverse(node.left)
    tree.right = node.right === null ? null :
    traverse(node.right)
    return tree;
}
