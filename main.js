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

// console.log(list.toString());

// list.insertAt(2, 'animal1', 'random');
// console.log(list.toString());

list.append(1);
list.append(2);
list.append(3);
list.prepend(90);
list.insertAt(3, 10, 11);

console.log(list.toString());
