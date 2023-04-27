import { Flight } from "./Flight";
import { Reservation } from "./Reservation";

export class PremiumFlight extends Flight {
  constructor(origin, destination, date, capacity, price, specialService) {
    super(origin, destination, date, capacity, price + specialService);
  }

  sellTicket(passenger) {
    if (this.capacity === 0) {
      return;
    } else {
      const {origin, destination, date, price} = this;
      this.passengers.push({fullName: `${passenger.name} ${passenger.lastName}`, age: passenger.age});
      passenger.flights.push({origin, destination, date, price});
      this.capacity--;

    return new Reservation(this, passenger);  
    }
  }
}