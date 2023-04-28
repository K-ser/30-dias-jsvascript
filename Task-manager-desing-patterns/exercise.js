// Task (exercise.js)

import { User } from "./user";

// *id: un identificador único para cada tarea.
// *description: una descripción de la tarea.
// *completed: un booleano que indica si la tarea está completada o no.
// *users: un array de usuarios asignados a la tarea.
// *assignUser(): un método para asignar usuarios a una tarea
// *completeTask(): un método que cambia el valor de la propiedad completed a true y 
//    llama a notifyUsers().
// *notifyUsers(): un método para notificar a todos los usuarios asignados que la tarea 
//    fue completada.

import { User } from "./user";

export class Task {
  constructor(id, description) {
    this.id = id;
    this.description = description;
    this.completed = false;
    this.users = [];
  }

  assignUser(user) {
    if (user instanceof User) {
      this.users.push(user);
    } else {
      throw new Error(`${user} no instancia de la clase User`)
    }
  }

  completeTask() {
    this.completed = true;
    this.notifyUser();
  }

  notifyUser() {
    this.users.forEach(user => user.notify(this));
  }
}