//Crear un funcion closure que nos permita implementar la logica de un planeador de 
//tareas con lo metodos dados

// function createTask({id = requireParam(id), name, prority, tags = [], completed = false} = {}) {
//   return {
//     id,
//     name,
//     prority,
//     tags,
//     completed,
//   }
// }
// // const task1 = createTask({name: 'kevin', id: 1, prority: 5, tags: ['casa', 'escuela']})
// // console.log(task1)
// function requireParam(param) {
//   throw new Error(`${param} es necesario`)
// }

function createTaskPlanner() {
  const listOfTasks = [];
  let countOfId = 1;  

  return {
    addTask({id = countOfId, name, priority, tags = [], completed = false}) {
      const task = {id, name, priority, tags, completed};
      listOfTasks.push(task);
      countOfId++;
    },
  
    removeTask(value) {
      const indexToRemove = listOfTasks.findIndex(item => item.id === value || item.name.toLowerCase() === value.toLowerCase());
      const taskToRemove = listOfTasks.splice(indexToRemove, 1);
      return taskToRemove;
    },
  
    getTasks() {
      return listOfTasks;
    },
  
    getPendingTasks() {
      return listOfTasks.filter(item => item.completed === false);
    },
  
    getCompletedTasks() {
      return listOfTasks.filter(item => item.completed === true);
    },
  
    markTaskAsCompleted(value) {
      const completedTask = listOfTasks.findIndex(item => item.id === value || item.name.toLowerCase() === value.toLowerCase());
      if (completedTask === -1) {
        throw new Error('La tarea no se encuentra en la lista');
      } else {
        listOfTasks[completedTask].completed = true;
      }
      return listOfTasks;
    },
  
    getSortedTasksByPriority() {
      const orderedList = [...listOfTasks].sort((a, b) => a.priority - b.priority);
      return orderedList;
    },
  
    filterTasksByTag(tag) {
      const tasksByTag = listOfTasks.filter(item => item.tags.includes(tag.toLowerCase()));
      return tasksByTag.length > 0 ? tasksByTag : new Error('No se encontraron coincidencias');
    },
  
    updateTask(taskId, updates) {
      const taskToUpdate = listOfTasks.findIndex(item => item.id === taskId);
      return taskToUpdate === -1 ? new Error('No se encuentra la tarea a actualizar')
      : listOfTasks[taskToUpdate] = {...listOfTasks[taskToUpdate], ...updates};
    },
  }
}

const planner = createTaskPlanner();
planner.addTask({name: 'Hacer tarea', priority: 2, tags: ['escuela', 'deberes']});
planner.addTask({name: 'Preparar comida', priority: 3, tags: ['hogar', 'deberes']});
planner.addTask({name: 'Lavar ropa', priority: 1, tags: ['hogar', 'limpieza']});

planner.removeTask('hacer tarea')


console.log(planner.getPendingTasks())
console.log(planner.markTaskAsCompleted('Preparar comida'));
console.log(planner.getSortedTasksByPriority());
console.log(planner.filterTasksByTag('Escuela'));
console.log(planner.updateTask(1, {name: 'Tirar basura', tags: ['limpieza']}));
console.log(planner.getTasks());