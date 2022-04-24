class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}
// Slightly better time complexity for traversing o(n/2) but more memory space complexity to hold the prev pointer
class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }  
    append(value) {
        const newNode = new Node(value)
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this 
    }
     prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head.prev = newNode
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
         tmpNode.next.prev = newNode
         tmpNode.next = newNode
         newNode.prev = tmpNode
    }
    remove(index) {
         let tmpNode = this.head
        for(let i = 0;i<index-1;i++) {
            tmpNode = tmpNode.next
        }
        let toBeDeleted = tmpNode.next
        tmpNode.next = toBeDeleted.next
        this.length--
        toBeDeleted = null // or use delete operator
    }
}   
const myDoublyLinkedList = new DoublyLinkedList(10)
myDoublyLinkedList.append(5)
myDoublyLinkedList.append(16)
myDoublyLinkedList.prepend(1)
myDoublyLinkedList.insert(2,7) 
myDoublyLinkedList.remove(3)
myDoublyLinkedList.printList()
