import { LinkedList } from './linkedList.js';

let list = LinkedList();

list.append(1);
list.append(2);
list.append(3);

console.log(list.toString());
console.log(list.size());
list.insertAt(1, 10, 11, 12);
console.log(list.toString());
console.log(list.size());
