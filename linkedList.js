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
    if (!_head) {
      return '';
    }
    let temp = _head;
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

  const tail = () => {
    return prev.value;
  };

  const at = (index) => {
    let temp = _head;
    let count = 0;

    while (temp !== null) {
      if (count >= index && temp !== null) {
        return temp.value;
      }
      temp = temp.next;
      count++;
    }
    return undefined;
  };

  const size = () => {
    let temp = _head;
    let count = 0;

    while (temp !== null) {
      temp = temp.next;
      count++;
    }
    return count;
  };

  return {
    append,
    toString,
    head,
    tail,
    at,
    size,
  };
}

let list = LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');

console.log(list.size());
