//Funcion que dibuja una figura con un numero de lineas y caracter dados

function printTriangle(size, character) {
  let space = ' ';
  let figure = '';
  for (let i = 0; i < size; i++) {
    if (i < size - 1) {
      figure += `${space.repeat(size - (i+1))}${character.repeat(i+1)}\n` ;
    } else {
      figure += `${character.repeat(i+1)}`
    }
  }
  return figure;
}

console.log(printTriangle(5, '+'));