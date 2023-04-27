//Vamos a crear una jerarquia de clases mediante la herencia, creamos una clase base, a partir de ella creamos
//una clase hija y, de esta clase hija, creamos otra clase hija, o sea, la hija de la hija, jaja

class Animal {
  constructor(name, age, specie) {
    this.name = name;
    this.age = age;
    this.specie = specie;
  }
  
  getInfo() {
    return {
      name: this.name,
      age: this.age,
      specie: this.specie,
    }
  }
}

class Mammal extends Animal {
  constructor(name, age, specie, hasFur) {
    super(name, age, specie);
    this.hasFur = hasFur;
  }

  getInfo() {
    return {
      ...super.getInfo(),
      hasFur: this.hasFur,
    };
  }
}

class Dog extends Mammal {
  constructor(name, age, breed, hasFur) {
    super(name, age, 'dog', hasFur);
    this.breed = breed;
  }

  getInfo() {
    return {
      ...super.getInfo(),
      breed: this.breed,
    };
  }

  bark() {
    return 'woof!';
  }
}

const animal = new Animal('kandy', 10, 'perro');
console.log(animal.getInfo())