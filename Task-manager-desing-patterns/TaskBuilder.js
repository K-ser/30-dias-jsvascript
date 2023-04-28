// TaskBuilder(TaskBuilder.js)

// *task: Instanciará la clase task creada al inicio
// *Deberá tener un método por cada uno de los siguientes datos: id, description, completed, 
//    users (debe ser capaz de recibir 1 o varios users), deadline, priority.

import { Task } from "./exercise"

export class TaskBuilder {
  constructor() {
    this.task = new Task();
  }

  setId(id) {
    this.task.id = id;
  }

  setDescription(description) {
    this.task.description = description;
  }

  setCompleted(completed) {
    this.task.completed = completed;
  }

  setUsers(users) {
    this.task.users = [...users];
  }

  setDeadline(deadline) {
    this.task.deadline = deadline;
  }

  setPriority(priority) {
    this.task.priority = priority;
  }

  build() {
    return this.task;
  }
}