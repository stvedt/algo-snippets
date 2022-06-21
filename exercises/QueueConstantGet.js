// Implement a queue (first-in-first-out)
// the following operations should be created:
// enqueue, dequeue, and get, which can be used to return the nth element without removing it from the queue.
// get lookup should run in constant time

// enqueue(1): 1
// enqueue(2): 1, 2
// get(0): -> 1:  1, 2
// dequeue(): -> 1: 2
// get(0): -> 2

class Queue {
  constructor() {
    this.data = {};
    this.length = 0;
    this.start = 0;
  }

  enqueue(value) {
    const newIndex = this.length;
    this.data[newIndex] = value;

    this.length = this.length + 1;
  }

  dequeue() {
    if (this.length === 0) new Error("Empty Queue"); // missed doing a === which was resulting in 'this.legth = 0' doing an assignment.

    const returnVal = this.data[this.start];
    const newLength = this.length - 1;
    console.log("newLength", newLength);

    this.start = this.start + 1;
    this.length = newLength;

    return returnVal;
  }

  get(index) {
    const value = this.data[this.start + index];
    return value ? value : new Error("not found");
    // return value based on an index.
  }
}

let testQueue = new Queue();

testQueue.enqueue(1);
testQueue.enqueue(2);
testQueue.enqueue(3);
testQueue.enqueue(4);
testQueue.dequeue();
testQueue.dequeue();
testQueue.dequeue();
console.log(testQueue);

console.log(testQueue.get(0)); //3
