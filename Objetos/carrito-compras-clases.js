//Vamos a trabajar con clases para crear un carrito de compras. A partir de una clase base que es PRODUCT 
//vamos extender dos clases mas ARTICLE y SERVICE, Estas clases van a implementar el metodo addTocart(), el cual
//dependiendo de la clase, va a retornar una leyenda de que el articulo o servicio fue agregado, en el caso
//del tambien indicará la cantidad de articulos agregados. Tambien crearemos una tercera clase CART, esta sera 
//el sera el carrito de compras y va a implementar ciertor metodos:
/* 
*addProduct(product): este método agregará un producto al final de la lista de compras y deberá llamar al 
    método addToCart() de cada producto o servicio.
*deleteProduct(product): este método recibirá un producto y lo eliminará de la lista de productos
*calculateTotal(): este método calculará el total de los productos agregados y lo devolverá.
*getProducts(): este método devolerá el array de los productos que contiene el carrito.
*/

class Product {
  // No debes editar este archivo ❌
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  addToCart() {
    throw new Error(
      "La lógica de este método debe ser implementada por las clases hijas"
    );
  }
}

class Article extends Product {
  constructor(name, price, quantity) {
    super(name, price, quantity);
  }

  addToCart() {
    return `Agregando ${this.quantity} unidades del articulo ${this.name} al carrito`;
  }
}

class Service extends Product {
  constructor(name, price, quantity) {
    super(name, price, quantity);
  }

  addToCart() {
    return `Agregando el servicio ${this.name} al carrito`;
  }
}

class Cart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
    product.addToCart();
  }

  deleteProduct(product) {
    const index = this.products.findIndex(item => item.name === product.name);
    const productToRemove = this.products[index];
    this.products.splice(index, 1);
    return productToRemove;
  }

  calculateTotal() {
    let total = this.products.reduce((acc, current) => acc + current.price * current.quantity, 0);
    return total;
  }

  getProducts() {
    return this.products;
  }
}