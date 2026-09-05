import { Node } from './node.js';

function LinkedList() {
  let head = null;

  let prev = null;

  const append = (value) => {
    let node = new Node(value);
    if (!head) {
      head = node;
      prev = head;
    } else {
      prev.next = node;
      prev = prev.next;
    }
  };

  const toString = () => {
    let temp = head;
    let string = '';
    while (temp !== null) {
      string += `(${temp.value}) -> `;
      temp = temp.next;
      if (!temp) {
        string += temp;
      }
    }
    return string;
  };

  return {
    append,
    toString,
  };
}

let list = LinkedList();

list.append('dog');
list.append('cat');
list.append('lion');
list.append('rhino');
list.append('tiger');

console.log(list.toString());
