//A partir de un array de objetos se debe calcular el promedio individual de cada estudiante
//y el promedio general de la clase. Esto debe ser retornado por una función en un objeto


const students = [
  {
    name: "Pedro",
    grades: [90, 87, 88, 90],
  },
  {
    name: "Jose",
    grades: [99, 71, 88, 96],
  },
  {
    name: "Maria",
    grades: [92, 81, 80, 96],
  },
]



function getClassAverage(students) {

  //Esta funcion interna calcula el promedio de cada estudiante y se devuleve un array de objetos con el
  //nombre y promedio de cada estudiante
  const getStudentAverage = (students) => {

    for (let student of students) {
      const draftAverage = student.grades.reduce((acc, sum) => acc + sum, 0)/student.grades.length;
      const average = Number.parseFloat(draftAverage.toFixed(2));
      // studentAverage.push({'name': student.name, 'average': average});
      student.average = average;
    }
    
    return students;
  }

  //Aqui sumamos cada promedio individual y despues sacamos el promedio general de la clase
  let classAverage = 0;
  const studentData = getStudentAverage(students);
  for(let student of studentData) {
    classAverage += student.average;
  }
  
  classAverage = Number.parseFloat((classAverage /= studentData.length).toFixed(2));

  //Devolvemos un objeto con el promedio general de la clase y con un array que tiene en objetos los datos
  //nombre y promedio de cada estudiante
  return {
    'classAverage': classAverage,
    'students': studentData,
  }
}

console.log(getClassAverage(students))