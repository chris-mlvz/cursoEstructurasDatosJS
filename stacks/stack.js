class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return (this.top != null) ? this.top.value : this.top;
    }
    push(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = this.top;
        } else {
            newNode.next = this.top
            this.top = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (this.length === 0) {
            return undefined;
        }
        if (this.length === 1) {
            this.bottom = null
        }
        const removedTop = this.top;
        const newTop = this.top.next;

        removedTop.next = null;
        this.top = newTop;

        this.length--;
        return removedTop.value;
    }
    print() {
        if (this.length === 0) {
            console.log("This stack is empty");
        }
        let probe = this.top;
        for (let i = 0; i < this.length; i++) {
            console.log(probe.value);
            probe = probe.next
        }
    }
}

const myStack = new Stack();
for (let i = 0; i < 10; i++) {
    myStack.push(i);
}
myStack.print();
console.log(myStack);
for (let i = 0; i < myStack.length + 10; i++) {
    myStack.pop(i)
}
myStack.print();
console.log(myStack);