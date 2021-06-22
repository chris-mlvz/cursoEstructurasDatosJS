// 1 --> 2 --> 3 --> 4 --> 5 --> null

// let singlyLinkedList = {
//     head: {
//         value: 1,
//         next: {
//             value: 2,
//             next: {
//                 value: 3,
//                 next: {
//                     value 4,
//                     next: null
//                 }
//             }
//         }
//     }
// }

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MySinglyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.constructor(value);
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;

            return this;
        }
    }
    prepend(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.constructor(value);
        } else {
            newNode.next = this.head;
            this.head = newNode
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
            const probe = this.getTheIndex(index - 1)

            newNode.next = probe.next
            probe.next = newNode;
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
    print() {
        let probe = this.head;
        let result = new String();
        for (let i = 0; i < this.length; i++) {
            result += `${probe.value.toString()} `;
            probe = probe.next
        }
        console.log(result)
    }
    pop() {
        const lastNode = this.tail;
        const newTail = this.getTheIndex(this.length - 2)
        newTail.next = null;
        this.tail = newTail;

        this.length--;
        return lastNode
    }
    shift() {
        const firstNode = this.head;
        const newHead = this.head.next
        this.head.next = null
        this.head = newHead;

        this.length--;
        return firstNode;
    }
    remove(index) {
        if (index <= 0) {
            return this.shift();
        } else if (index >= this.length) {
            return this.pop();
        } else {
            const beforeNode = this.getTheIndex(index - 1);
            const afterNode = this.getTheIndex(index + 1);
            const removedNode = this.getTheIndex(index);
            beforeNode.next = afterNode
            removedNode.next = null

            this.length--;
            return removedNode;
        }
    }
}

let myLinkedList = new MySinglyLinkedList(1);

// console.log();
console.log(MySinglyLinkedList);
console.log(myLinkedList.append(2));
console.log(myLinkedList.append(3));

console.log(myLinkedList.prepend(0));
console.log(myLinkedList.prepend(-1));

console.log(myLinkedList.insert(3, "Hi"));
myLinkedList.print();
console.log(myLinkedList.remove(-3));
myLinkedList.print();