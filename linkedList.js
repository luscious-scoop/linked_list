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
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');

console.log(list.toString());
