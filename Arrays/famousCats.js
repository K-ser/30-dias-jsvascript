//Encontrar al gatito más famoso o con más seguidores y devolveer un array con el nombre
//del ganador, en caso de que haya empate, se tiene que nombrar a ambos en orden en que
//aparecen en la lista


const cats = [
  {
    name: "Michi",
    followers: [100, 300]
  },
  {
    name: "Luna",
    followers: [500, 200, 300]
  },
  {
    name: "Kandy",
    followers: [100,300,200,300,100]
  },
];

function findFamousCats(cats) {
  let winner = [];
  let maxFollowers = 0;
  for (let value of cats) {
    const max = value.followers.reduce((acomulator, item) => acomulator + item, 0);
    if (maxFollowers < max) {
      maxFollowers = max;
      winner = [value.name]
    } else if (max === maxFollowers) {
      winner.push(value.name);
    }
  }

  return winner;
}

console.log(findFamousCats(cats))