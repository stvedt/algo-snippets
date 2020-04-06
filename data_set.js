const assertEquals = ((i = 1) => (result, expected) =>
  console.log(
    `Assertion#${i++}: ${
      result === expected
        ? "Passed"
        : `FAILED! expected ${result} to equal ${expected}`
    }`
  ))();

// Set implementation ////////////////
class MySet {
  // single list no duplicates
  // does not need to be sorted
  constructor(array) {
    this.values = [];
    this.size = 0;

    if (array) {
      console.log("has array");
      array.forEach(value => {
        console.log(value);
        this.add(value);
      });
    }
  }

  add(value) {
    if (this.has(value) && this.size > 0) return null;
    console.log("add");
    this.values.push(value);
    this.size++;
    return this;
  }

  has(value) {
    return this.values.indexOf(value) >= 0;
  }

  remove(value) {
    let foundIndex = this.values.indexOf(value);
    if (foundIndex >= 0) {
      this.values.splice(foundIndex, 1);
      this.size--;
    }
  }

  union(otherSet) {
    let unionedSet = new MySet(this.values);
    otherSet.values.forEach(value => unionedSet.add(value));
    return unionedSet;
    // returns new set
  }

  intersection(otherSet) {
    let intersectedSet = new MySet();
    // if different lengths - check which set is larger and loop through that set
    for (let i = 0; i < this.values.length; i++) {
      if (otherSet.has(this.values[i])) {
        intersectedSet.add(this.values[i]);
      }
    }
    return intersectedSet;
  }

  difference(otherSet) {
    // elements in the first set but not second. (not all unique between two sets)
    let differedSet = new MySet();
    // if different lengths - check which set is larger and loop through that set
    for (let i = 0; i < this.values.length; i++) {
      if (!otherSet.has(this.values[i])) {
        differedSet.add(this.values[i]);
      }
    }
    return differedSet;
  }
}

// Tests ////////////////
console.log("Test 1");
const set1 = new MySet();
assertEquals(set1.size, 0);

console.log("Test 2");
const set2 = new MySet();
set2.add(1);
assertEquals(set2.size, 1);

console.log("Test 3");
const set3 = new MySet();
set3.add(1);
assertEquals(set3.has(1), true);
assertEquals(set3.has(2), false);

console.log("Test 4");
const set4 = new MySet([1, 2, 3]);
assertEquals(set4.size, 3);
assertEquals(set4.has(1), true);
assertEquals(set4.has(2), true);
assertEquals(set4.has(3), true);

console.log("Test 5");
const set5 = new MySet();
set5.add(1);
assertEquals(set5.has(1), true);
assertEquals(set5.size, 1);
set5.remove(1);
assertEquals(set5.size, 0);

console.log("Test 6");
const set6 = new MySet();
set6.add(1);
set6.add(1);
assertEquals(set6.has(1), true);
assertEquals(set6.size, 1);

console.log("Test 7");
const set7a = new MySet();
const set7b = new MySet();
set7a.add(1);
set7a.add(2);
set7b.add(2);
set7b.add(4);
const set7c = set7a.union(set7b);
assertEquals(set7c.has(1), true);
assertEquals(set7c.has(2), true);
assertEquals(set7c.has(3), false);
assertEquals(set7c.has(4), true);
assertEquals(set7a.size, 2);
assertEquals(set7b.size, 2);

console.log("Test 8");
const set8a = new MySet();
const set8b = new MySet();
set8a.add(1);
set8a.add(2);
set8b.add(2);
set8b.add(4);
const set8c = set8a.intersection(set8b);
assertEquals(set8c.has(1), false);
assertEquals(set8c.has(2), true);
assertEquals(set8c.has(3), false);
assertEquals(set8c.has(4), false);
assertEquals(set8a.size, 2);
assertEquals(set8b.size, 2);

// // Test 9
const set9a = new MySet();
const set9b = new MySet();
set9a.add(1);
set9a.add(2);
set9a.add(3);
set9b.add(3);
set9b.add(4);
set9b.add(5);
const set9c = set9a.difference(set9b);
assertEquals(set9c.has(1), true);
assertEquals(set9c.has(2), true);
assertEquals(set9c.has(3), false);
assertEquals(set9c.has(4), false);
assertEquals(set9c.has(5), false);
assertEquals(set9a.size, 3);
assertEquals(set9b.size, 3);

// add chain
console.log("Test 10");
const set10 = new MySet();

set10.add(1).add(2);

assertEquals(set10.has(1), true);
assertEquals(set10.has(2), true);
