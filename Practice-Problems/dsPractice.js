// Single Linked List Node
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let currentNode = new Node(val);
    if (this.head === null) {
      this.head = currentNode;
      this.tail = currentNode;
    } else {
      this.tail.next = currentNode;
      this.tail = currentNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    // Udemy Solution
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
    // My solution to pop function
    // let newTail = this.head;
    // let tail = this.tail;
    // for (let i = 1; i < this.length - 1; i++) {
    //   newTail = newTail.next;
    // }
    // newTail.next = null
    // this.tail = newTail
    // this.length--;
    // return tail;
  }
  shift() {
    if (this.length === 0) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index >= this.length || index < 0) return null;
    // Udemy Solution
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
    // My solution
    // let current = this.head;
    // for (let i = 0; i < index; i++) {
    //   current = current.next;
    // }
    // return current;
  }
  set(val, index) {
    let changedNode = this.get(index);
    if (!changedNode) return false;
    changedNode.val = val;
    return true;
  }
  insert(val, index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      this.push(val);
      return true;
    }
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    let newNode = new Node(val);
    let pvNode = this.get(index - 1);
    let nextNode = pv.next;
    pvNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) return this.pop;
    if (index === 0) this.shift;
    let pvNode = this.get(index - 1);
    let temp = pvNode.next;
    pvNode.next = temp.next;
    this.length--;
    return temp;
  }
  reverse() {
    let oldTail = this.tail;
    this.tail = this.head;
    this.head = oldTail;
    let next = this.tail.next;
    let node = this.head;
    while (next.next) {
      node.next = next;
      next = next.next;
    }
    return this;
  }
}

// Doubly Linked List Node
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//     this.prev = null;
//   }
// }
class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    // Udemy Solution
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;

    // My solution
    // let newTail = new Node(val);
    // if(this.length === 0){
    //   this.tail = newTail
    //   this.head = newTail
    // }else{
    //   let oldTail = this.tail;
    //   this.tail.next = newTail;
    //   this.tail = newTail;
    //   this.tail.prev = oldTail;
    // }
    // this.length++
    // console.log(this.head.next)
    // return this;
  }
  pop() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let temp = this.tail;
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    console.log(this.tail);
    return temp;
  }
  shift() {
    if (length === 0) return undefined;
    let currentHead = this.head;
    if (length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = currentHead.next;
      this.head.prev = null;
      currentHead.next = null;
    }
    this.length--;
    return this;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let currentNode;
    if (index < Math.floor(this.length / 2)) {
      currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
    } else {
      currentNode = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        currentNode = currentNode.prev;
      }
    }
    return currentNode;
  }
  set(val, index) {
    let node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }
  insert(val, index) {
    if (index > this.length || index < 0) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return this.push(val);
    let newNode = new Node(val);
    let pvNode = this.get(index - 1);
    newNode.next = pvNode.next;
    pvNode.next.prev = newNode;
    pvNode.next = newNode;
    newNode.prev = pvNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index >= this.length || index < 0) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let removedNode = this.get(index);
    let pvNode = removedNode.prev;
    let nextNode = removedNode.next;
    pvNode.next = nextNode;
    nextNode.prev = pvNode;
    (removedNode.next = null), (removedNode.prev = null);
    this.length--;
    return removedNode;
  }
}

// Stack and Queue Node
// class Node{
//   constructor(val){
//     this.val = val
//     this.next = null
//   }
// }

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    // Udemy Solution
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;

    // My solution
    // let newNode = new Node(val)
    // if(this.size === 0){
    //   this.first = newNode
    //   this.last = newNode
    // }else{
    //   let oldFirst = this.first
    //   newNode.next = oldFirst
    //   this.first = newNode
    // }
    // this.size++
    // return this.size
  }

  pop() {
    // Udemy Solution
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;

    // My solution
    // if(this.size === 0) return null
    // let first = this.first
    // if(this.size === 1){
    //   this.first = null
    //   this.last = null
    // }else{
    //   this.first = first.next
    //   first.next = null
    // }
    // this.size--
    // return first
  }
}

class Queue {
  constructor() {
    this.first = null;
    thus.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (this.size === 0) return null;
    let temp = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = temp.next;
      temp.next = null;
    }
    this.size--;
    return temp;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.val) return undefined;
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else if (val > current.val) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }
  find(val) {
    if (this.root === null) return false;
    let current = this.root;
    while (true) {
      console.log(current);
      if (current.val === val) return true;
      if (val < current.val) {
        if (current.left === null) return false;
        current = current.left;
      } else {
        if (current.right === null) return false;
        current = current.right;
      }
    }
  }
  BFS() {
    let node = this.root;
    let finalData = [];
    let queue = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      finalData.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return finalData;
  }
  DFSPreorder() {
    let final = [];
    let current = this.root;
    const helper = (node) => {
      if (!node) return;
      final.push(node.val);
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
    };
    helper(current);
    return final;
  }
  DFSPostOrder(){
    let data = []
    let current = this.root
    const helper = (node) => {
      if(node.left) helper(node.left)
      if(node.right) helper(node.right)
      data.push(node.val)
    }
    helper(current)
    return data
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.DFSPostOrder());

// let Dlist = new DoubleLinkedList();
// Dlist.unshift(1);
// Dlist.unshift(2);
// Dlist.unshift(3);
// Dlist.unshift(4);
// Dlist.unshift(5);
// Dlist.unshift(6);
// Dlist.insert(99,2)
// console.log(Dlist.get(2));
// Dlist.pop()
// console.log(Dlist)

// let list = new SinglyLinkedList();
// list.push("Hello");

// list.push("World");
// list.push("!");
// console.log(list.reverse());
// console.log(list.set("people", 1));
// console.log(list.get(1));
