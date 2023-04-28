//El pratron decorator o decorador se utiliza para agregar funcionalidades a una clase ya definida, esto lo 
//realizamos mediante una envoltura de la clase base y mediante la herencia agregamos una funcinalidad extra
//para esto debe pasar en el constructor de la clase decoradora a la clase base
//En este ejercicio vamos a utilizar este patron para personalizar productos de una tienda, ya sea para agregar
//extras o modificar caracteristicas 

//Clase base sobre la cual se van a modificar los demas productos
class Product {
  constructor(price) {
    this.price = price;
  }

  getPrice() {
    return this.price;
  }

  getDescription() {
    throw new Error("Este método debe ser implementado en las subclases");
  }
}

//Producto basico, retorna el nombre del producto al implementar el metodo getPrice
class BasicProduct extends Product {
  constructor(price, description) {
    super(price);
    this.name = description;
  }
  getDescription() {
    return this.name;
  }
}

//Clase que agrega una garantia al producto o su envio
class WarrantyDecorator extends Product {
  constructor(BasicProduct) {
    super(BasicProduct.price + 20);
    this.name = BasicProduct.name;
  }

  getPrice() {
    return this.price;
  }

  getDescription() {
    return `${this.name} con garantía`;
  }
}

//Clase que agrega lo mismo que la clase garantia, pero en esta ocasion que devulve que es un seguro
class WarrantyDecorator extends Product {
  constructor(BasicProduct) {
    super(BasicProduct.price + 20);
    this.name = BasicProduct.name;
  }

  getPrice() {
    return this.price;
  }

  getDescription() {
    return `${this.name} con seguro de envío`;
  }
}
