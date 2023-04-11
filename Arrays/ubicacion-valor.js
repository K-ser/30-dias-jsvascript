//Implementar una funcion que encuentre un valor dentro de un array bidimencional y devolver un objeto con 
//la columna (column) y la fila (row) en donde se encuentra el valor. En caso de no encontrarse, devolvera
//un error

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function searchValue(array, value) {
  if (!array.flat(1).includes(value)) {
    throw new Error('Valor no encontrado');
  };
  
  let row, column;
  for (let element of array) {
    if (element.includes(value)) {
      column = element.indexOf(value);
      row = array.indexOf(element);
    }
  };

  return {row, column};
}

console.log(searchValue(array, 5))