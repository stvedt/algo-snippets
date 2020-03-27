class ListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let newNode = new ListNode(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    let current = this.head;

    if (this.length <= 1) {
      this.length = 0;
      this.head = null;
      this.tail = null;
      return;
    }

    while (current.next !== this.tail) {
      current = current.next;
    }
    console.log("found right before tail:", current.next.value);

    // future tail should not have a next
    current.next = null;

    this.tail = current;
    this.length--;

    return current;
  }

  shift() {
    if (!this.head) return;
    let headToRemove = this.head;
    this.head = headToRemove.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return headToRemove;
  }

  unShift(val) {
    let newNode = new ListNode(val);
    if (!this.head) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }

    this.head = newNode;
    this.length++;
    return this;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
  get(position) {
    if (position < 0 || position >= this.length) return null;

    let traverseCount = 0;
    let current = this.head;

    while (traverseCount < position) {
      current = current.next;
      traverseCount++;
    }

    return current;
  }

  set(val, position) {
    let existingNode = this.get(position);
    if (existingNode) {
      existingNode.value = val;
      return true;
    }
    return false;
  }

  insert(val, position) {
    if (position < 0 || position > this.length) return false;

    switch (position) {
      case 0:
        return !!this.unShift(val, position);

      case this.length:
        return !!this.push(val);

      default:
        let newNode = new ListNode(val);
        let beforeInsert = this.get(position - 1);
        let afterInsert = this.get(position);
        beforeInsert.next = newNode;
        newNode.next = afterInsert;
        this.length++;
        return true;
    }
  }

  remove(position) {
    if (position < 0 || position > this.length) return false;

    switch (position) {
      case 0:
        return !!this.shift();

      case this.length - 1:
        return !!this.pop();
      default:
        let afterRemoved = this.get(position + 1);
        let beforeRemoved = this.get(position - 1);
        beforeRemoved.next = afterRemoved;
        this.length--;
        return true;
    }
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev,
      next = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

let myList = new SinglyLinkedList();

// myList.pop();
myList.push("hi");
myList.push("there");
myList.push("love");
myList.push("!!");

myList.reverse();
