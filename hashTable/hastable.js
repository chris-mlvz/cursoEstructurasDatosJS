class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }
    hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
    set(key, value) {
        const address = this.hashMethod(key);
        if (!this.data[address]) {
            this.data[address] = [];

        }
        this.data[address].push([key, value])
        return this.data;
    }
    get(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1]
                }
            }
        }
        return undefined;
    }
    remove(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    let removedValue = currentBucket[i][1];
                    currentBucket.splice(i, 1);
                    return removedValue;
                }
            }
        }
        return undefined;
    }
    getAllKeys() {
        const allKeys = []
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                for (let j = 0; j < this.data[i].length; j++) {
                    allKeys.push(this.data[i][j][0])
                }
            }
        }
        if (allKeys.length === 0) {
            return undefined
        }
        return allKeys
    }
}

const myHashTable = new HashTable(50);


// Console
console.log(myHashTable.set("Diego", 1990));
console.log(myHashTable.set("Mariana", 1998));
console.log(myHashTable.set("Adriana", 2000));

console.log(myHashTable.get("Diego"))
console.log(myHashTable.get("Mariana"))
console.log(myHashTable.get("Adriana"))

console.log(myHashTable.remove("Adriana"));
console.log(myHashTable)
console.log(myHashTable.get("Diego"))
console.log(myHashTable.set("Adriana", 2500))

console.log(myHashTable.set("Juan", 1995))
console.log(myHashTable.getAllKeys())