//Se implemeta la logica de una función que va a copiar un objeto en una copia y ser va a proteger dicha copia
//incluyendo los objetos anidados que se tengas

const dog ={
  name: "Romeo",
  age: 3,
  owner: { name: "Victor", phoneNumber: "555-555-5555" },
  favoriteFood: ["pollito", "croquetas"],
  activities: ["jugar", "caminar"],
};



function protectDog(dog) {
  let copy = Object.assign({}, dog);

  function frozenRecursive (obj) {
    for (let key in obj) {
      if (isObject(obj[key])) {
        frozenRecursive(obj[key]);
        Object.freeze(obj[key]);
      }
    }
  }
  frozenRecursive(copy);
  Object.freeze(copy);

  return copy;
}
let prueba = protectDog(dog)
prueba.name = 'Liceo';
prueba.owner.name = 'Kevin';
prueba.favoriteFood = 'Kevin';
console.log(prueba)
console.log(dog)

// copy.owner.name = 'Kevin'

export function protectDog(dog) {
  const copy = Object.assign({}, dog);
  const propertiesToProtect = ["owner", "favoriteFood", "activities"];

  function freezeRecursively(obj) {
    Object.freeze(obj);
    for (const prop of Object.getOwnPropertyNames(obj)) {
      if (propertiesToProtect.includes(prop) && typeof obj[prop] === "object") {
        freezeRecursively(obj[prop]);
      }
    }
  }

  freezeRecursively(copy);
  return copy;
}
