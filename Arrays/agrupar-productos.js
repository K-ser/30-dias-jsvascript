//Implementar la logica de una función que no permita agrupar productos por categoria y sumar sus precios
//la función recibe dos parametros que son los productos y la categoria por la que se van a agrupar devolviendo
//un objetos con los productos y su total

const products = [
  { name: "Smartphone", category: "Electronics", price: 800 },
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Shirt", category: "Clothing", price: 50 },
  { name: "Pants", category: "Clothing", price: 100 },
];

function groupProducts(products, category) {
  const productsInCategory = products.filter(product => product.category === category);
  const arrayOfNames = [];
  let totalPrice = 0;

  for (let product of productsInCategory) {
    arrayOfNames.push(product.name);
    totalPrice += product.price;
  }
  const names = arrayOfNames.join(', ');

  return {
    products: names,
    totalPrice
  }
}

console.log(groupProducts(products, 'Electronics'))