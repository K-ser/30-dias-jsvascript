//El Patrón Proxy en JavaScript es un patrón de diseño que proporciona un middleware (o intermediario) 
//para otro objeto para controlar el acceso a él. El objeto proxy actúa como un intermediario entre el 
//cliente y el objeto real, interceptando y controlando las operaciones realizadas sobre el objeto real.
//En este ejercicio vamos a crear un proxy que controle el acceso a un servicio de mensajeria

export class Messages {
  constructor() {
    this.history = [];
  }

  sendMessage(text) {
    this.history.push(text);
  }

  getHistory() {
    return this.history;
  }
}

export class User {
  constructor(name) {
    this.name = name;
    this.isLogged = false;
  }

  login() {
    return this.isLogged = true;
  }

  logout() {
    return this.isLogged = false;
  }

  isLoggedIn() {
    if (this.isLogged) {
      return true;
    } else {
      return false;
    }
  }
}


class MessagesProxy {
  constructor(messages, user) {
    this.messages = messages;
    this.user = user;
  }

  sendMessage(text) {
    if (this.user.isLoggedIn()) {
      this.messages.sendMessage(text);
    } else {
      throw new Error('Usuario no registrado');
    }
  }

  getHistory() {
    if (this.user.isLoggedIn()) {
      return this.messages.history;
    } else {
      throw new Error('Usuario no registrado');
    }
  }
}