//Vamos a diseñar una funcion que modifique un objeto, una mutable function. Los cambios que va a realizar
//en el objeto original serán bajo criterios como identificar los elementos con la plabra oferta y aplicar
//un descuento del 20% a su precio original, además, se van a multiplicar los precios de todos los elementos 
//por la cantidad de elementos que hay y se termina por eliminar la propiedad de cantidad

const shoppingList = [
  { name: "pan", price: 20, quantity: 2 },
  { name: "leche", price: 25, quantity: 1 },
  { name: "oferta manzanas", price: 10, quantity: 3 },
]

function processShoppingList(list) {
  list.forEach(product => {
    if (product.name.includes('oferta')) {
      product.price -= (product.price * .2);
    }
    product.price *= product.quantity;
    delete product.quantity;
  });

  return list.reduce((acc, current) => acc + current.price, 0);
}

console.log(processShoppingList(shoppingList))
console.log(shoppingList)