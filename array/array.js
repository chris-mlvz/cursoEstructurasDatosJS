// const array = ["Diego", "Karen", "Oscar"];
// console.log(array[1]);
// array.push("Ana");
// console.log(array);

// * Array class - object base
class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data
    }
}

// Array Object
const myArray = new MyArray();

// Tests
console.log(myArray.push("Jose"));
// { '0': 'Jose' }
console.log(myArray.push("Adriana"));
// { '0': 'Jose', '1': 'Adriana' }
console.log(myArray.get(1))
// Adriana