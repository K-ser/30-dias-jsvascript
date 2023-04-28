// Authorization (Authorization.js)

// *checkAuthorization(): un método el cual verificará si un ususario está autorizado para 
//    completar una tarea.

export class Authorization {
  checkAuthorization(user, task) {
    if (task.users.includes(user)) {
      return true;
    } else {
      throw new Error('El usuario no tiene autorizacion');
    }
  }
}