import { LinkedList } from './linkedList.js';

let list = LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');

list.prepend('lion');
list.append('crocodile');

console.log(list.toString());
