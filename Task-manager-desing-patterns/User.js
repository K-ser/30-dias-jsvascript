// User (User.js)

// *name: El nombre del usuario
// *notify(task): un método que recibirá una tarea y le notificará al usuario que la tarea
//    fue completada

export class User {
  constructor(name) {
    this.name = name;
  }

  notify(task) {
    console.log(`El usuario ${this.name} ha sido notificado que se completó la tarea: ${task}`);
  }
}