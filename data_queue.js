class queueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  // FIFO
  constructor(value) {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    let newNode = new queueNode(value);
    if (!this.last) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }

  dequeue() {
    if (this.size === 0) return null;

    let tempFirst = this.first;

    this.first = tempFirst.next;
    tempFirst.next = null;
    if (this.size === 1) this.last = null;

    this.size--;
    return tempFirst;
  }
}

let q = new Queue();
