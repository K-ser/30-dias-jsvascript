//Vamos a definir la Clase Usuario de una red social y vamos a usar encapsulamiento para proteger sus datos
//privados. Esto lo podemos hacer mediante getters y setters

class User {
  constructor(name, age) {
    this._name = name;
    this._age = age;
    this._friends = [];
    this._messages = [];
  }

  addFriend(friend) {
    this._friends.push(friend);
    return friend;
  }

  sendMessage(message, friend) {
    this._messages.push(message);
    friend._messages.push(message);
    return message;
  }

  showMessages() {
    return this._messages;
  }

  get name() {
    return this._name;
  }
  set name(newName) {
    if (newName === '') {
      return 'El nombre no puede ser un campo vacio';
    } else {
      this._name = newName;
    }
  }

  get age() {
    return this._age;
  }
  set age(newAge) {
    if (newAge === 0) {
      return 'Se debe ingresar la edad';
    } else if (newAge < 18) {
      return 'Se necesita ser mayor de edad';
    } else {
      this._age = newAge;
    }
  }
}