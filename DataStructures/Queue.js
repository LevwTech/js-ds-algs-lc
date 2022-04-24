class Queue {
    // It is easier but bad to implement Queues using Arrays instead of LinkedLists because it makes the enqueue o(n) instead of o(1).
    
    constructor() { 
        this.arr = []
    }
    
    enqueue(value) {
        this.arr.push(value)
    }
    
    dequeue() {
        this.arr.shift()
    }
    
    peek() {
        return this.arr[0]
    }
    print() {
        console.log(this.arr)
    }
    
};

const myQueue = new Queue()
myQueue.enqueue(5)
myQueue.enqueue(19)
myQueue.enqueue(7)
console.log(myQueue.peek()) // 5
myQueue.dequeue()
myQueue.print() // 19 7
