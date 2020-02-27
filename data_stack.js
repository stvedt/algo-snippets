class StackNode {
  constructor(value){
    this.value = value;
    this.next = null;
  }

}
class Stack {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // more similar to push/pop to from linkedlists
  // better to remove from beginning faster to prevent traversal to end

  push(value){
    let newNode = new StackNode(value);
    if(this.size === 0){
      this.first = newNode;
      this.last = newNode;
    } else {
      let prevFirst = this.first;
      newNode.next = prevFirst;
      this.first = newNode;
    }
    this.size++;
    return this;
  }

  pop(){
    if(this.size <=0) return null;
    
    let removedFirst = this.first;
    if(removedFirst === this.last){
      this.last = null;
    }
    this.first = removedFirst.next;
    removedFirst.next = null;
    this.size--;
    return this;
  }
}

let stack = new Stack();