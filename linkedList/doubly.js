
class Node {
    constructor(value = null) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class MyDoublyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
            this.length = 1;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;

            return this;
        }
    }
    prepend(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
            this.length = 1;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
            this.length++;

            return this;
        }
    }
    insert(index, value) {
        if (index <= 0) {
            return this.prepend(value);
        } else if (index >= this.length) {
            return this.append(value);
        } else {
            const newNode = new Node(value);
            const beforeNode = this.getTheIndex(index - 1);
            const afterNode = this.getTheIndex(index);

            newNode.next = afterNode;
            newNode.prev = beforeNode;
            beforeNode.next = newNode;
            afterNode.prev = newNode;
            this.length++;

            return this;
        }
    }
    getTheIndex(index) {
        let probe = this.head;
        for (let i = 0; i < index; i++) {
            probe = probe.next;
        }
        return probe;
    }
    print(reverse = false) {
        if (this.isEmpty()) {
            return "The linked list is empty";
        }
        let result = "";
        if (!reverse) {
            let head = this.head;
            for (let i = 0; i < this.length; i++) {
                result += `${head.value.toString()} `;
                head = head.next;
            }
        } else {
            let tail = this.tail;
            for (let i = 0; i < this.length; i++) {
                result += `${tail.value.toString()} `;
                tail = tail.prev;
            }

        }
        return result
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }

        const lastNode = this.tail;
        const newTail = this.tail.prev;

        if (newTail != null) { newTail.next = null };
        lastNode.prev = null;
        this.tail = newTail;

        this.length--;
        return lastNode;
    }
    shift() {
        if (this.isEmpty()) {
            return undefined;
        }
        const firstNode = this.head;
        const newHead = this.head.next;

        firstNode.next = null;
        if (newHead != null) { newHead.prev = null };
        this.head = newHead;

        this.length--;
        return firstNode;
    }
    remove(index) {
        if (this.isEmpty()) {
            return undefined;
        }
        if (index <= 0) {
            return this.shift();
        } else if (index >= this.length) {
            return this.pop();
        } else {
            const beforeNode = this.getTheIndex(index - 1);
            const afterNode = this.getTheIndex(index + 1);
            const removedNode = this.getTheIndex(index);

            beforeNode.next = afterNode;
            afterNode.prev = beforeNode
            removedNode.next = null;
            removedNode.prev = null;

            this.length--;
            return removedNode;
        }
    }
    isEmpty() {
        return (this.length <= 0) ? true : false;
    }
}

let myDoublyLinkedList = new MyDoublyLinkedList(1);

// console.log();
myDoublyLinkedList.append(2);
myDoublyLinkedList.append(3);
console.log(myDoublyLinkedList.print());
myDoublyLinkedList.print(reverse = true);

myDoublyLinkedList.prepend(0);
myDoublyLinkedList.prepend(-1);
console.log(myDoublyLinkedList.print());
myDoublyLinkedList.print(reverse = true);

myDoublyLinkedList.insert(2, "Hi");
console.log(myDoublyLinkedList.print());
myDoublyLinkedList.print(reverse = true);

console.log(myDoublyLinkedList.remove(10));
console.log(myDoublyLinkedList.shift());
console.log(myDoublyLinkedList.shift());
console.log(myDoublyLinkedList.shift());
console.log(myDoublyLinkedList.shift());
console.log(myDoublyLinkedList.print());
console.log(myDoublyLinkedList.shift());
console.log(myDoublyLinkedList.shift());
console.log(myDoublyLinkedList.isEmpty());
console.log(myDoublyLinkedList.length);
console.log(myDoublyLinkedList.print());
console.log(myDoublyLinkedList.shift());
console.log(myDoublyLinkedList.length);
console.log(myDoublyLinkedList.remove(10));
console.log(myDoublyLinkedList.print());
// console.log(myDoublyLinkedList.append(20))
console.log(myDoublyLinkedList.prepend(1))
console.log(myDoublyLinkedList.print());
