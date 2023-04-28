// TaskDecorator (TaskDecorator.js)

// *task: recibirá una tarea ya hecha con la clase de Task
// *deadline: fecha limite para completar la tarea en el siguiente formato (AAAA-MM-DD)
// *priority: prioridad para completar la tarea (high, medium o low)
// ***Priority y deadline vendrán dentro de un objeto options

import { Task } from "./exercise";

export class TaskDecorator extends Task {
  constructor(task, options) {
    super(task);
    this.task = task;
    this.deadline = options.deadline;
    this.priority = options.priority;
  }

  assignUser(user) {
      this.task.assignUser(user);
  }

  completedTask() {
    this.task.completedTask();
  }

  notifyUser() {
    this.task.notifyUser();
  }
}