//En este desafio vamos a crear un organizador de tareas que usara closures, maps y sets, vamos recibir las
//tareas como un string y las equiquetas como un array, el en map estaran ambas, pero las etiquetas iran
//dentro de un set,

function taskManager() {
  const tasksList = new Map();
  return {
    addTask(task, tags) {
      task = task.toLowerCase();

      if (tasksList.has(task)) {
        const existingTags = tasksList.get(task);
        tags.forEach(tag => {
          existingTags.add(tag);
        });
      } else {
        const newTags = new Set(tags);
        tasksList.set(task, newTags);
      }
    },

    printTasks() {
      return tasksList;
    }
  }
}