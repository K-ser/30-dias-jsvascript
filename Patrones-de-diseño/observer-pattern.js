//El patron OBSERVER se encarga de implementar la logica que nos permite, dentro de un objeto, tener una lista
//de dependientes, y cuando suceda un cambio en el objeto principal, se va a notificar a sus dependientes
//notificar es una forma de decir, pero de esta manera podemos aplicar el cambio para cada uno de sus dependientes
//o realizar una accion en todos solo modificando y llamando al metodo del objeto principal
//En este ejercicio vamos a crear un Observable que funcionara como objeto principla y quien tiene a los dependientes
//sera un newsletter que enviara un articulos a los dependientes. Lo otro sera una clase de Observadores
//quienes van a recibir el articulo y notificar que se ha recivido, estos son los dependientes

export class Newsletter {
  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
    return this;
  }

  unsubscribe(email) {
    const index = this.subscribers.findIndex(item => item.email === email);
    if (index === -1) {
      console.log('No se encontro el email recibido');
    } else {
      this.subscribers.splice(index, 1);
      return this;
    }
  }

  post(article) {
    this.subscribers.forEach(subscriber => {
      subscriber.receive(article);
    });
  }
}

export class Subscriber {
  constructor(email) {
    this.email = email;
  }

  receive(article) {
    console.log(`El suscriptor ${this.email} ha recibido el articulo: ${article.title}`);
  }
}