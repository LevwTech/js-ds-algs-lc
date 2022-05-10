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
    BFS() {
        let currentNode = this.root;
        const list = []
        const queue = []
        queue.push(currentNode)
        while(queue.length) {
            currentNode = queue.shift()
            list.push(currentNode.value)
            if(currentNode.left) queue.push(currentNode.left)
            if(currentNode.right) queue.push(currentNode.right)
        }
        return list;
    }
    DFSInorder() {
        return this.traverseInorder(this.root,[])
    }   
    DFSPostorder() {
         return this.traversePostorder(this.root,[])
    }
    DFSPreorder() {
         return this.traversePreorder(this.root,[])
    }
    traverseInorder(node,list){
        if(node.left) {
             this.traverseInorder(node.left,list)
        }
        list.push(node.value)
        if(node.right) {
             this.traverseInorder(node.right,list)
        }
        return list;
    }
    traversePostorder(node,list){
        if(node.left) {
             this.traversePostorder(node.left,list)
        }
        if(node.right) {
             this.traversePostorder(node.right,list)
        }
        list.push(node.value)
        return list;
    }
    traversePreorder(node,list){
        list.push(node.value)
        if(node.left) {
             this.traversePreorder(node.left,list)
        }
          if(node.right) {
             this.traversePostorder(node.right,list)
        }
        return list;
    }
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
console.log(myBST.BFS())
console.log(myBST.DFSInorder())
console.log(myBST.DFSPreorder())
console.log(myBST.DFSPostorder())
function traverse(node){
    const tree = {value: node.value};
    tree.left = node.left === null ? null :
    traverse(node.left)
    tree.right = node.right === null ? null :
    traverse(node.right)
    return tree;
}

// BFS VS DFS
// Both O(logn)
// BFS better for shorted path but more memory
// DFS better for determining wether a path exists slower and better memory
