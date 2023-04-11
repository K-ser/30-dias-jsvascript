//Implementar una funcion que organice una lista de productos. Los tiene que ordenas pro disponibilidad y por
//precio. Primero evaluamos que esten disponibles, estos irán al comienzo de la lista, después los ordenasmos
//por precio de manera acendente (primero los mas bajos y va subiendo el precio). La función no debe 
//modificar la lista original

const products = [
  { name: "product1", price: 10, inStock: true },
  { name: "product2", price: 20, inStock: false },
  { name: "product3", price: 15, inStock: true },
  { name: "product4", price: 5, inStock: false },
]


function sortByAvailabilityAndPrice(products) {
  const notAvailable = products.filter(product => product.inStock === false)
  .sort((a, b) => a.price - b.price);
  const available = products.filter(product => product.inStock === true)
  .sort((a, b) => a.price - b.price);

  const newList = [];
  available.forEach(product => {
    newList.push(product);
  });
  notAvailable.forEach(product => {
    newList.push(product);
  });
  
  return newList;

  //otra solucion mas limpia
  const copy = [...products];

  copy.sort((a, b) => {
    if (a.inStock === b.inStock) {
      return a.price - b.price;
    } else {
      return a.inStock ? -1 : 1;
    }
  });

  return copy;
}

console.log(sortByAvailabilityAndPrice(products));

/*
Si compareFunction(a, b) es menor que 0, se sitúa a en un indice menor que b. Es decir, a viene primero.

Si compareFunction(a, b) retorna 0, se deja a y b sin cambios entre ellos, pero ordenados con respecto a todos los elementos diferentes. Nota: el estandar ECMAscript no garantiza este comportamiento, por esto no todos los navegadores (p.ej. Mozilla en versiones que datan hasta el 2003) respetan esto.

Si compareFunction(a, b) es mayor que 0, se sitúa b en un indice menor que a.

compareFunction(a, b) siempre debe retornar el mismo valor dado un par especifico de elementos a y b como sus argumentos. Si se retornan resultados inconsistentes entonces el orden de ordenamiento es indefinido.
*/