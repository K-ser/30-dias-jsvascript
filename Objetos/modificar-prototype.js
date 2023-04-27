//Vamos a modificar el prototype de Array, vamos a agregar nuestro propio metodo filter
//hay que recordar que este metodo devuelve todos los elementos de un array que cumplan con cierta condicion


Array.prototype.myFilter = function(func) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    if (func(this[i])) {
      newArray.push(this[i]); 
      newArray[newArray.length] = this[i];
    }
  }

  return newArray;
}