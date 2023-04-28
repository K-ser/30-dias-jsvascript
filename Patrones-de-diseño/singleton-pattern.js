//El patron de diseño singleton es un patron de diseño creacional y nos permite crear una instacia unica de
//clase, mediante el código evita que otra instancia sea creada a partir de una clase que ya cuente con una
//Vamos implementar este patron de diseño en un chat

class User {
  constructor(name) {
    this.name = name;
    this.messages = [];
  }

  receiveMessage(message) {
    this.messages.push(message);
  }
}

class Chat {
  constructor() {
    if (!Chat.instance) {
      this.name = 'Chat';
      this.users = [];
      Chat.instance = Object.freeze(this);
    }
    return Chat.instance;
  }

  sendMessage(message) {
    for (let user of this.users) {
      user.receiveMessage(message);
    }
  }

  addUser(user) {
    if (user instanceof User) {
      this.users.push(user);
    } else {
      return;
    }
  }

  removeUser(user) {
    const indexUser = this.users.findIndex(item => item.name === user);
    if (indexUser === -1) {
      return;
    } else {
      this.users.splice(indexUser, 1);
    }
  }
}