//Creamos una función recursiva que recorre un array con más arrays anidados y nos 
//devuelve un array o string con todo los valores del array origianl

const multiArray = [1,2,[3,4,5],6,7,[8,9, [9.5, 9.8],10,[11,12],13],14,15];
function flatArray(array) {
  let flat = []
  for (let i = 0; i <= array.length; i++) {
    if (i === array.length) {
      return flat;
    } else if (!Array.isArray(array[i])) {
      flat.push(array[i]);
    } else {
      flat.push(...flatArray(array[i]));
    }
  }

  return flat;
}

console.log(flatArray(multiArray));