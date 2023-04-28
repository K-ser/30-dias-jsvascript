// TaskManager (TaskManager.js)

// *tasks: un array vacío para almacenar las tareas
// *getInstance(): un método que devuelva una instancia de TaskManager. Si ya hay una instancia existente, 
//    devuelve esa instancia en lugar de crear una nueva.
// *addTask(task): un método para agregar tareas al array que debe verificar si esta hereda de la clase Task
// *getTasks(): un método que regresará todas las tareas
// *getTaskById(id): un método que buscará una tarea por su id y la retornará, en caso de no existir 
//    regresará null

import { Task } from "./exercise";

export class TaskManager {
  constructor() {
    this.tasks = [];
  }

  getInstance() {
    if (!TaskManager.instance) {
      TaskManager.instance = new TaskManager();
    }
    return TaskManager.instance;
  }

  addTask(task) {
    if (task instanceof Task) {
      this.tasks.push(task);
    } else {
      throw new Error('La tarea no es una instancia de la clase');
    }
  }

  getTasks() {
    return this.tasks;
  }

  getTaskById(id) {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index === -1) {
      return null;
    } else {
      return this.tasks[index];
    }
  }
}