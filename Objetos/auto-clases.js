//Se va a crear una Clase Car que contenga las propiedades y metodos para poder crear intancias de distintos
//autos


class Car {
  constructor(brand, model, year, mileage) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    this.state = false;
  }

  turnOn() {
    if (this.state === true) {
      return 'El auto ya está encendido';
    } else {
      return this.state = true;
    }
  }

  turnOff() {
    if (this.state === false) {
      return 'El auto ya esta apagado';
    } else {
      return this.state = false;
    }
  }

  drive(kilometers) {
    if (this.state === false) {
      throw new Error('El auto está apagado');
    } else {
      this.mileage += kilometers;
    }
  }
}

const aveo = new Car('chevrolet', 'aveo', 2022, 12000);
console.log(aveo);
// aveo.turnOn();
// console.log(aveo);
aveo.drive(150);
console.log(aveo);
