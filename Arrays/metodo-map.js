//Crear nuestro propio metodo map

function myMap(array, func) {
  const newArray = [];

  for (let value of array) {
    newArray.push(func(value));
  }

  return newArray;
}