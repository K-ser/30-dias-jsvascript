// En este desafío, tendrás que implementar la lógica para procesar correos electrónicos en una empresa 
// utilizando una queue, priorizando siempre los emails más antiguos.

// Tendrás crear una clase Queue para representar nuestra cola de correos electrónicos. La clase debe tener los 
// siguientes métodos:

//Tendrás una clase Mail ya construida para usarla dentro del desarrollo de tu solución que simulará ser un 
// nodo dentro de la queue.

class Mail {
  constructor(from, to, body, subject) {
    this.from = from;
    this.to = to;
    this.body = body;
    this.subject = subject;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  //Agrega un correo al final de la queue o lista
  enqueue(from, to, body, subject) {
    const newMail = new Mail(from, to, body, subject);

    if (!this.first) {
      this.first = newMail;
      this.last = newMail;
    } else {
      this.last.next = newMail;
      this.last = newMail;
    }
    this.length++;
  }

  //Elimina y devuelve un objeto con las pripiedades del mail, debe ser el que se encuentre al principio
  dequeue() {
    const {from, to, body, subject} = this.first;
    const mailToSend = {from, to, body, subject};

    if (!this.first) {
      throw new Error('No hay correos en la cola');
    } else if (this.length === 1) {
      this.last = null;
    }

    this.first = this.first.next;
    this.length--;

    return mailToSend;
  }

  //Devuelve el correo mas antiguo, o sea el primero en la lista, sin eliminarlo
  peek() {
    if (!this.first) {
      throw new Error('No hay correos');
    }

    return this.first;
  }

  size() {
    return this.length;
  }
}