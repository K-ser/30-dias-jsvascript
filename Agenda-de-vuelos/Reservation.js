

export class Reservation {
  constructor(flight, passenger) {
    this.flight = flight;
    this.passenger = passenger;
  }
  reservationDetails() {
    const {origin, destination, date} = this.flight;
    const {name, lastName} = this.passenger;
    return {
      origin,
      destination,
      date,
      reservedBy: `${name} ${lastName}`,
    }
  }
}