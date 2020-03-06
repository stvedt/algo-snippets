class TreeNode {
  constructor(value){
    this.value = value;
    this.left = null
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  insert(val){
    let newNode = new TreeNode(val);
    
    if(!this.root) {
      this.root = newNode;
      return this;
    }
    
    let currentNode = this.root;
    while(true){
      const position = (val < currentNode.value) ? 'left' : 'right';
      if(val === currentNode.value) return undefined;

      if(currentNode[position] === null){
        currentNode[position] = newNode;
        return this;
      }
      currentNode = currentNode[position];

      /* - long solution, first pass
      if(val > currentNode.value) {
        console.log('right');
        if(currentNode.right){
          currentNode = currentNode.right;
          continue;
        } else {
          currentNode.right = newNode
          foundInsertPlace = true;
        }
      } else {
        if(currentNode.left){
          currentNode = currentNode.left;
          continue;
        } else {
          currentNode.left = newNode
          foundInsertPlace = true;
        }
      }
      */
    }// end while
  }

  find(val){
    let currentNode = this.root;
    if(!currentNode) return false; // empty tree
    
    while(true){
      if(val === currentNode.value) return true;
      
      if(val > currentNode.value){
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
      
      if(currentNode === null) return false;
    }
  }

  BFSearch(){ // Breadth First Search
    let queue = [],
        storedVals = [];
    
    queue.push(this.root);

    while(queue.length > 0){
      let currentNode = queue.shift();;
      storedVals.push(currentNode.value)
      if(currentNode.left) queue.push(currentNode.left)
      if(currentNode.right) queue.push(currentNode.right)
      
    }
    return storedVals;
  }

  DFSPre(){ // Depth First Search Pre-order
    let storedVals = [];
    function traverse(node){
      storedVals.push(node.value);
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
    }

    traverse(this.root)
    return  storedVals;
  }
  DFSPost(){ // Depth First Search Post-order
    let storedVals = [];
    function traverse(node){
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
      storedVals.push(node.value);
    }

    traverse(this.root)
    return  storedVals;
  }
  
  DFSInOrder(){ // Depth First Search In-order
    let storedVals = [];
    function traverse(node){
      if(node.left) traverse(node.left)
      storedVals.push(node.value);
      if(node.right) traverse(node.right)
    }

    traverse(this.root)
    return  storedVals;
  }
}

let bst = new BinarySearchTree();

bst.insert(10);
bst.insert(6);
bst.insert(3);
bst.insert(8);
bst.insert(15)
bst.insert(20);