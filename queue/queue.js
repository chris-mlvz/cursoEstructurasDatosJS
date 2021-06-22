class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.length = 0;
    }
    peek() {
        return (this.front != null) ? this.front.value : this.front;
    }
    enqueue(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.front = newNode;
            this.back = this.front;
        } else {
            this.back.next = newNode;
            this.back = newNode;
        }
        this.length++;
        return this;
    }
    dequeue() {
        if (this.length === 0) {
            return undefined;
        }
        if (this.length === 1) {
            this.back = null;
        }
        const removedFront = this.front;
        const newFront = this.front.next;

        if (removedFront.next != null) { removedFront.next = null };
        this.front = newFront;

        this.length--;
        return removedFront.value;
    }
    print() {
        if (this.length === 0) {
            console.log("This queue is empty");
        }
        let probe = this.front;
        for (let i = 0; i < this.length; i++) {
            console.log(probe.value);
            probe = probe.next;
        }
    }
}

const myQueue = new Queue();

console.log(myQueue.peek());
for (let i = 0; i < 10; i++) {
    myQueue.enqueue(i);
}

myQueue.print();
console.log(myQueue);


for (let i = 0; i < myQueue.length + 10; i++) {
    myQueue.dequeue(i)
}

myQueue.dequeue();
myQueue.dequeue();
myQueue.print();
console.log(myQueue);
console.log(myQueue.peek());