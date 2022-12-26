function node(value) {
  let next = null;
  return { value, next };
}

function linkedList() {
  let HEAD = node("HEAD");
  function addNode(value) {
    let newNode = node(value);
    let TAIL = HEAD;

    while (TAIL.next !== null) {
      TAIL = TAIL.next;
    }
    TAIL.next = newNode;
  }
  function prepend(value) {
    let newNode = node(value);
    newNode.next = HEAD.next;
    HEAD.next = newNode;
  }
  function size() {
    let i = 0;
    let TAIL = list.HEAD;

    while (TAIL.next !== null) {
      i += 1;
      TAIL = TAIL.next;
    }
    console.log(i);
  }
  return { HEAD, addNode, prepend, size };
}
let list = linkedList();
list.addNode("1");
list.addNode("2");
list.prepend("-7");
list.addNode("3");
list.size();
