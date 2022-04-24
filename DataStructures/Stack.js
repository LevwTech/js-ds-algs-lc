class Stack {
    constructor() { 
        this.arr = []
    }
    
    push(value) {
        this.arr.push(value)
    }
    
    pop() {
        this.arr.pop()
    }
    
    peek() {
        return this.arr[this.arr.length-1]
    }
    print() {
        console.log(this.arr)
    }
    
};

const myStack = new Stack()
myStack.push(5)
myStack.push(19)
myStack.push(7)
console.log(myStack.peek()) // 7
myStack.pop()
myStack.print() // 5 19
