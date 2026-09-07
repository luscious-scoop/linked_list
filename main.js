import { LinkedList } from './linkedList.js';

let list = LinkedList();

// list.append('dog');
// list.append('cat');
// list.append('parrot');
// list.append('hamster');
// list.append('snake');
// list.append('turtle');

// list.prepend('lion');
// list.append('crocodile');

list.append(1);
list.append(2);
list.append(3);

console.log(list.insertAt(100, 10, 11));

console.log(list.toString());
