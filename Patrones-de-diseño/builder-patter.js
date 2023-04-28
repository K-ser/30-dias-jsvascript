//El praton de diseño BUILDER nos permite crear objetos a partir de una clase de una manera más clara y facil
//de entender para el usuario y lo que visualizan el codigo. 
//Aqui vamos a implementat este patron para más clara la creación de un objeto auto mediante el uso de 
//metodos que serán los encargador de establecer el valor a las propiedades correspondientes, al final, un
//solo metodo será el que nos devuelva el objeto creado

export class CarBuilder {
  constructor() {
    this.year;
    this.model = '';
    this.brand = '';
    this.color = '';
    this.price;
    this.isAvailable;
  }

  setYear(year) {
    this.year = year;
    return this;
  }

  setModel(model) {
    this.model = model;
    return this;
  }

  setBrand(brand) {
    this.brand = brand;
    return this;
  }

  setColor(color) {
    this.color = color;
    return this;
  }

  setPrice(price) {
    this.price = price;
    return this;
  }

  setIsAvailable(isAvailable) {
    this.isAvailable = isAvailable;
    return this;
  }

  //Este metodo sirve para devolver un objeto como tal, sin el indicativo que es una instacia de la clase
  build() {
    return {
      year: this.year,
      model: this.model,
      brand: this.brand,
      color: this.color,
      price: this.price,
      isAvailable: this.isAvailable,
    }
  }
}
