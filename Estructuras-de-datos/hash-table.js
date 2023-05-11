//En este ejercicio vamos a implemetar la logica de una HASH TABLE, digamos que es como un array con un tamaño
//predefinido y tiene una funcion que es llamada cada que queremos ingresar un valor, para esto se necesita
//ingresar una key asociada al valor, de esta manera, la hash function siempre nos va a devolver el valor
//para la llave o key
//Tu objetivo será el de implementar la lógica de la clase ContactList para agregar contactos y realizar las 
//operaciones correspondientes.


class ContactList {
  constructor(size) {
    this.buckets = new Array(size);    
    this.numBuckets = this.buckets.length;
  }

  hash(name) {
    let total = 0;
    for (let i = 0; i < name.length; i++) {
      total += name.charCodeAt(i);
    }
    return total % this.numBuckets;
  }

  insert(name, phone) {
    const index =this.hash(name);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    this.buckets[index].push([name, phone]);
  }

  get(name) {
    const index = this.hash(name);
    const currentBucket = this.buckets[index];
    console.log(currentBucket)
    if (!currentBucket) {
      return null;
    }
    for (let i = 0; i < currentBucket.length; i++) {
      if (currentBucket[i][0] === name) {
        return currentBucket[i][1];
      }
    }
    return null;
  }

  retrieveAll() {
    const allBuckets = [];
    for (let bucket of this.buckets) {
      if (bucket) {
        for (let i = 0; i < bucket.length; i++) {
          allBuckets.push(bucket[i]);
        }
      }
    }
  }

  delete(name) {
    const index = this.hash(name);
    const currentBucket = this.buckets[index];

    if (!currentBucket) {
      return null;
    }
    for (let i = 0; i < currentBucket.length; i++) {
      if (currentBucket[i][0] === name) {
        currentBucket.splice(i, 1);
        return;
      }
    }
  }

}

const contactList = new ContactList(10);
contactList.insert('kevin', '5591435126');
console.log(contactList.get('kevin'))
console.log(contactList)