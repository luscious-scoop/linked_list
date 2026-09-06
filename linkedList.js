import { Node } from './node.js';

function LinkedList() {
  let _head = null;

  let prev = null;

  const append = (value) => {
    let node = new Node(value);
    if (!_head) {
      _head = node;
      prev = _head;
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

  const head = () => {
    if (!_head) {
      return undefined;
    }
    return _head.value;
  };

  return {
    append,
    toString,
    head,
  };
}

let list = LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');

console.log(list.head());
