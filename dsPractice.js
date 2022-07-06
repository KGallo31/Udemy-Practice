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
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
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
}

let Dlist = new DoubleLinkedList();
Dlist.unshift(1);
Dlist.unshift(2);
Dlist.unshift(3);
console.log(Dlist.head.next);
// Dlist.pop()
// console.log(Dlist)

let list = new SinglyLinkedList();
list.push("Hello");
list.push("World");
list.push("!");
console.log(list.reverse());
// console.log(list.set("people", 1));
// console.log(list.get(1));
