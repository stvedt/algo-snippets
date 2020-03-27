class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let hash = this.hash(key);

    if (!this.keyMap[hash]) this.keyMap[hash] = [];
    if (!this.keyMap[hash].includes(key)) this.keyMap[hash].push([key, value]);
    return hash;
  }

  get(key) {
    let hash = this.hash(key);
    if (this.keyMap[hash])
      return this.keyMap[hash].find(element => element[0] === key);
    return undefined;
  }

  keys() {
    if (this.keyMap.length <= 0) return undefined;
    let keys = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (!this.keyMap[i]) continue;

      for (let j = 0; j < this.keyMap[i].length; j++) {
        keys.push(this.keyMap[i][j][0]);
      }
    }
    return keys;
  }

  values() {
    if (this.keyMap.length <= 0) return undefined;
    let values = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (!this.keyMap[i]) continue;
      for (let j = 0; j < this.keyMap[i].length; j++) {
        let singleValue = this.keyMap[i][j][1];
        if (!values.includes(singleValue)) values.push(singleValue);
      }
    }
    return values;
  }
}

let ht = new HashTable();

ht.set("yellow", "y");
ht.set("green", "g");
ht.set("blue", "b");
ht.set("maroon", "m");
ht.set("test", "m");
ht.keys();
ht.values();
