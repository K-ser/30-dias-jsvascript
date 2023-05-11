// En este desafío deberás remover los elementos duplicados de un array.

// La función removeDuplicates recibirá un array con elementos que pueden ser números o strings y que contienen 
// elementos repetidos. Tu objetivo es implementar la lógica necesaria para quitar estos elementos repetidos y 
// mantener el orden original de aparición de los elementos en el array.


export function removeDuplicates(values) {
  return [...new Set(values)];
}