import { Flight } from "./Flight";
import { Reservation } from "./Reservation";

export class EconomicFlight extends Flight {
  constructor(origin, destination, date, capacity, price) {
    super(origin, destination, date, capacity, price);
  }

  sellTicket(passenger) {
    if (this.lastPrice != undefined) {
      this.price = this.lastPrice;
    }
    if (passenger.age < 18 || passenger.age > 65) {
      this.lastPrice = this.price;
      this.price = this.price * .80;
      return super.sellTicket(passenger);
    } else {
      return super.sellTicket(passenger);
    }
  }
}

//HAY QUE SOBREESCRIBIR EL METODO SELLTICKET AQUI Y EN LA CLASE PREMIUN PARA QUE TENGAN UN COMPORTAMIENTO 
//SIMILAR PERO NO IGUAL Y SE PUEDAN CUMPLIR LAS INDICACIONES