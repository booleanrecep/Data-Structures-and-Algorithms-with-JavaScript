function Node() {
  this.element = element;
  this.next = null;
}

function LList() {
  this.head = new Node("head");
  this.head.next=this.head;
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.display = display;
  this.findPrevious = findPrevious;
}

function find(item) {
  let currNode = this.head;
  while (currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode;
}


function insert(newElement, item) {
  const newNode = new Node(newElement);
  const current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}


function display() {
  let currNode = this.head;
  while (!(currNode.next == null)) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}

function findPrevious(item) {
  let currNode = this.head;
  while (!(currNode.next == null) && (currNode.next.element != item)) {
    currNode = currNode.next;
  }
  // console.log(currNode)
  return currNode;
}


function remove(item) {
  let prevNode = this.findPrevious(item);
  console.log(prevNode)
  if (!(prevNode.next == null)) {
    prevNode.next = prevNode.next.next
  }
}

// const cities = new LList();
// cities.insert("Conway", "head");
// cities.insert("Russelville", "Conway");
// cities.insert("Carlisle", "Russelville");
// cities.insert("Alma", "Russelville");
// cities.display()
//     // findPrevious("Alma")
// cities.remove("Carlisle")
// console.log(`
// CITIES => ${cities.display()}
// `)
// cities.display()