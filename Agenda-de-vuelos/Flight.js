import { Reservation } from "./Reservation";

export class Flight {
  constructor(origin, destination, date, capacity, price) {
    this.origin = origin;
    this.destination = destination;
    this.date = date;
    this.capacity = capacity;
    this.price = price;
    this.passengers = [];
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