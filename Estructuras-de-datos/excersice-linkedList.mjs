// En este ejercicio práctico, crearás métodos adicionales para una singly linked list.


// Para este ejercicio, deberás implementar la lógica de algunos métodos de LinkedListRecharged que heredará de 
// un LinkedList (SinglyLinkedList.js) previamente creada.
import { LinkedList } from "./singlyLinkedList.mjs";
import { Node } from "./singlyLinkedList.mjs";

export class LinkedListRecharged extends LinkedList {
  get(index) {
    const node = this.getNode(index);
    return node ? node.value : null;
  }

  getNode(index) {
    let counter = 0;
    let currentNode = this.head;

    if (this.isOutOfBounds(index)) {
      return null;
    }
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  isOutOfBounds(index) {
    if (index > this.length - 1 || index < 0) {
      return true;
    }
    return false
  }

  insertAt(index, value) {
    if (this.isOutOfBounds(index)) {
      return null;
    }
    const newNode = new Node(value);
    const fisrtPointer = this.getNode(index - 1);
    const holdingPonter = fisrtPointer.next;

    fisrtPointer.next = newNode;
    newNode.next = holdingPonter;

    this.length++;
    return this;
  }

  toArray() {
    const newArray = [];
    let counter = 0;
    let currentNode = this.head;

    while(counter < this.length) {
      newArray.push(currentNode.value);
      currentNode = currentNode.next;
      counter++;
    }
    
    return newArray;
  }

  removeAt(index) {
    if (this.isOutOfBounds(index)) {
      return null;
    }
    const nodeToRemove = this.getNode(index);
    this.delete(nodeToRemove.value);

    return nodeToRemove;
  }
}

const newList = new LinkedListRecharged();
newList.append(5);
newList.append(6);
newList.append(7);
newList.append(8);
newList.append(9);
console.log(newList.toArray());
newList.removeAt(2);

console.log(newList);