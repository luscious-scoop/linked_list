import { Node } from './node.js';

export function LinkedList() {
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
    if (!prev) {
      return undefined;
    }
    return prev.value;
  };

  const getNode = (index) => {
    let temp = _head;
    let count = 1;

    while (temp !== null) {
      if (count >= index && temp !== null) {
        return temp;
      }
      temp = temp.next;
      count++;
    }
    return undefined;
  };

  const at = (index) => {
    return getNode(index).value;
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

  const contains = (value) => {
    let temp = _head;

    while (temp !== null) {
      if (value === temp.value) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  };

  const findIndex = (value) => {
    let temp = _head;
    let count = 0;

    while (temp !== null) {
      if (value === temp.value) {
        return count;
      }
      temp = temp.next;
      count++;
    }
    return -1;
  };

  const prepend = (value) => {
    let node = new Node(value);
    let prevHead;
    if (!_head) {
      _head = node;
    } else {
      prevHead = _head;
      _head = node;
      _head.next = prevHead;
    }
  };

  const pop = () => {
    let oldHeadValue = _head.value;
    let newHead = _head.next;
    _head = newHead;
    return oldHeadValue;
  };

  const createNodes = (array) => {
    return array.map((el) => new Node(el));
  };

  const insertAt = (index, ...values) => {
    let nodes = createNodes(Array.from(values));

    let value = getNode(index);
    let i = 0;
    while (value !== null && i < nodes.length) {
      let prev = value.next;

      value.next = nodes[i];
      value.next.next = prev;

      value = value.next;

      i++;
    }
  };

  return {
    append,
    toString,
    head,
    tail,
    at,
    size,
    contains,
    findIndex,
    prepend,
    pop,
    insertAt,
  };
}
