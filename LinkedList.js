class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }  
    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this 
    }
     prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this 
    }
    printList(){
        const arr = []
        let currentNode = this.head
        while(currentNode !==null){
            arr.push(currentNode.value)
          currentNode =  currentNode.next
        }
        console.log(arr)
        return arr
    }
    insert (index,value) {
        let newNode = new Node(value)
        let tmpNode = this.head
        for(let i = 0;i<index-1;i++) { 
            tmpNode = tmpNode.next
        }
         newNode.next = tmpNode.next
         tmpNode.next = newNode
    }
    remove(index) {
         let tmpNode = this.head
        for(let i = 0;i<index-1;i++) {
            tmpNode = tmpNode.next
        }
        let toBeDeleted = tmpNode.next
        tmpNode.next = toBeDeleted.next
        toBeDeleted = null // or use delete operator
    }
}   
const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(2,7) 
myLinkedList.remove(3)
myLinkedList.printList()
