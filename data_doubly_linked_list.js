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
    let poppedNode = this.tail;
    if(this.tail.previous){
      this.tail = poppedNode.previous;
      this.tail.next = null;
      poppedNode.previous = null;
    } else {
      this.tail = null;
      this.head = null;
    }
    this.length--;
    return poppedNode;

  }

  shift(){
    if(this.length <= 0) return undefined;
    let shiftedNode = this.head;
    if(shiftedNode.next){
      this.head = shiftedNode.next;
      this.head.previous = null;
      shiftedNode.next = null;
    } else {
      this.tail = null;
      this.head = null;
    }
    this.length--;
    return shiftedNode;

  }

  unShift(val){
    let newNode = new ListNode(val);
    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;

  }

  get(position){
    if(position < 0 || position >= this.length) return null;

    let leftToRight = (position - 1 < this.length/2);

    let traverseCount = leftToRight ? 0 : this.length - 1;
    let current =       leftToRight ? this.head : this.tail;

    while(traverseCount !== position){
      if(leftToRight){
        current = current.next;
        traverseCount++  
      } else {
        current = current.previous;
        traverseCount--;  
      }
    }
    return current;
  }

  set(val, position){
    let foundNode = this.get(position);
    if(foundNode){
      foundNode.value = val;
      return  foundNode
    }
    return false;
  }

  insert(val, position){
    if(position < 0 || position > this.length) return false;
    if(position === 0) return !!this.unShift(val);
    if(position === this.length) return !!this.push(val);

    let foundNode = this.get(position);
    let newNode = new ListNode(val);

    newNode.next = foundNode;
    newNode.previous = foundNode.previous;

    foundNode.previous.next = newNode;
    foundNode.previous = newNode;

    this.length++;
    return  true;

  }

  remove(position){
    if(position < 0 || position > this.length) return undefined;
    if(position === 0) return this.shift();
    if(position === this.length - 1) return this.pop();
    
    let foundNode = this.get(position);
    let beforeNode = foundNode.previous;
    let afterNode = foundNode.next;

    beforeNode.next = afterNode;
    afterNode.previous = beforeNode;
    this.length--;

    foundNode.next = null;
    foundNode.previous = null;
    return foundNode;
  }
}

let list = new DoublyLinkedList();

list.push(9);
list.push(11);
list.push(12);
list.push(13);