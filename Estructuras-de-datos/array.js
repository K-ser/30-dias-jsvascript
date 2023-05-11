//En este ejercicio vamos a implementar la logica de un array mediante el uso de clases. Vamos a crear nuestro
//propio array sin utilizar los metodos ya existentes del lenguaje, y vamos a implementar los metodos:
//map, filter, join, push, pop, shift, unshift

class MyArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  map(func) {
    if (!this instanceof MyArray) {
      throw new Error('No es una instancia de la clase');
    }
    let newArray = new MyArray();
    if (this.length === 0) {
      return undefined;
    } 
    for (let i = 0; i < this.length; i++) {
      newArray.data[i] = func(this.data[i]);
      newArray.length++;
    }
    return newArray;
  }

  filter(func) {
    if (!this instanceof MyArray) {
      throw new Error('No es una instancia de la clase');
    }
    let newArray = new MyArray();
    if (this.length === 0) {
      return undefined;
    } 
    for (let i = 0; i < this.length; i++) {
      if (func(this.data[i])) {
        newArray.data[newArray.length] = this.data[i];
        newArray.length++;
      }
    }
    return newArray;
  }

  join(character = ',') {
    let string = '';

    if (this.length === 0) {
      return undefined;
    } 
    for (let i = 0; i < this.length; i++) {
      if(i === this.length - 1) {
        string += `${this.data[i]}`;
      } else {
        string += `${this.data[i]}${character}`;
      }
    }
    return string;
  }

  push(item) {
    this.data[this.length ] = item;
    this.length++;
    return item;
  }

  pop() {
    const itemToDelete = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return itemToDelete;
  }

  shiftIndex(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  shift() {
    const item = this.data[0];
    this.shiftIndex(0);
    return item;
  }

  unshift(item) {
    if (item != undefined) {
      for (let i = this.length; i > 0; i--) {
        this.data[i] = this.data[this.length - 1];
      }
      this.length++;
      this.data[0] = item;
      return this.length;
    }
  }
}