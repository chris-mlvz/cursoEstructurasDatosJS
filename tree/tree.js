//    10
//  4    20
// 2 8 17 170

class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
    search(value) {
        if (this.root === null) {
            console.log("Binary tree is empty");
            return false;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value === currentNode.value) {
                    return currentNode;
                }
                else if (value < currentNode.value) {
                    if (!currentNode.left) {
                        console.log("Your value isn't in this tree");
                        return false;
                    }
                    if (value === currentNode.left) {
                        return currentNode.left;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        console.log("Your value isn't in this tree");
                        return false;
                    }
                    if (value === currentNode.right) {
                        return currentNode.right;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
}

const tree = new BinarySearchTree();

//  Testing BinarySearchTree
console.log(tree);
tree.insert(10);
console.log(tree);
tree.insert(4);
tree.insert(20);
console.log(tree);
tree.insert(2);
tree.insert(8);
tree.insert(17);
tree.insert(170);
console.log(tree);
console.log(tree.search(170));