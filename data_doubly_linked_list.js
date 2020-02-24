class ListNode {
  constructor(val){
    this.value = val;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
    let newNode = new ListNode(val);
    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop(){
    if(this.length <= 0) return undefined;
    if(this.tail.previous){
      this.tail = this.tail.previous;
      this.tail.next = null;
    } else {
      this.tail = null;
      this.head = null;
    }
    this.length--;
    return this;

  }
}

let list = new DoublyLinkedList();

list.push(10);
list.push(11);
list.push(12);
list.push(13);