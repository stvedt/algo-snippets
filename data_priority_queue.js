class PriorityNode {
  constructor(val, priority){
    this.value = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority){
    let node = new PriorityNode(val, priority);
    this.values.push(node);
    this.bubbleUp();
  }
  bubbleUp(){
    let index = this.values.length - 1;
    const element = this.values[index];
    while(index > 0){
      let parentIndex = Math.floor((index - 1)/2);
      let parent = this.values[parentIndex];

      if(element.priority >= parent.priority) break;

      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  dequeue(){
    const min = this.values[0];
    const end = this.values.pop();
    if(this.values.length > 0){
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown(){
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    while(true){
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if(leftChildIndex < length){
        leftChild = this.values[leftChildIndex];
        if(leftChild.priority < element.priority){
          swap = leftChildIndex
        }
      }

      if(rightChildIndex < length){
        rightChild = this.values[rightChildIndex];

        if(
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ){
          swap = leftChildIndex  
        }
      }

      if(swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

let heap = new PriorityQueue();

heap.enqueue(41, 3);
heap.enqueue(39, 2);
heap.enqueue(33, 3);
heap.enqueue(18, 1);
heap.enqueue(27, 0);
heap.enqueue(12, 0);
heap.enqueue(55, 1);