/*
Se va a crear un sistema de administración de hotel. Mediante closures vamos a desarrollar la lógica de una
función con los siguientes métodos:
searchReservation(),
getSortReservations(),
addReservation(),
removeReservation(),
getReservartions(),
getAvailableRooms(),
PONER LA DESCRIPCIÓN DE CADA UNO DE ESTAS FUNCIONES

El formato que recibirás para las reservaciones será el siguiente:

id: un identificador único
name: El nombre de quien agenda
checkIn: Fecha de llegada
checkOut: Fecha de salida
roomNumber: La habitación solicitada
*/

function hotelSystem(rooms = 10) {
  const reservations = [];

  return {
    searchReservation(id) {
      if (!reservations.some(reservation => reservation.id === id)) {
        throw new Error('La reservación no fue encontrada');
      } else {
        return reservations.find(reservation => reservation.id === id);
      }
    },

    getSortReservations() {
      const copy = [...reservations];
      copy.sort((a, b) => {
        const aDate = new Date(`${a.checkIn} ${new Date().getFullYear()}`);
        const bDate = new Date(`${b.checkIn} ${new Date().getFullYear()}`);
        return aDate - bDate;
      });
      return copy;
    },

    isAvailable(reservation) {
      const resIn = reservation.checkIn;
      const resOut = reservation.checkOut;
      for (let room of reservations) {
        let currentIn = room.checkIn;
        let currentOut = room.checkOut;

        if (resIn >= currentIn && resIn < currentOut ||
            resOut > currentIn && resOut <= currentOut ||
            resIn <= currentIn && resOut >= currentOut) {
              if (reservation.roomNumber === room.roomNumber) {
                return false;
              }
            }
      }
      return true;
    },

    addReservation(reservation) {
      if (!this.isAvailable(reservation)) {
        throw new Error('La habitación no está disponible');
      }
      reservations.push(reservation);
      return `La reservación de ${reservation.name} quedo registrada`
    },

    removeReservation(id) {
      const index = reservations.findIndex(item => item.id === id);
      if (index === -1) {
        throw new Error('La reservación que se busca remover no exite');
      } else {
        const removed = reservations[index];
        reservations.splice(index, 1);
        return removed;
      }
    },
    
    getReservations() {
      return reservations;
    },

    getAvailableRooms(checkIn, checkOut) {
      const availableRooms = [];
      for (let i = 1; i <= rooms; i++) {
        const posibleRes = {checkIn, checkOut, roomNumber: i};
        if (this.isAvailable(posibleRes)) {
          availableRooms.push(i);
        }
      }
      return availableRooms;
    }
  }
}

const hotelElKevin = hotelSystem();
console.log(hotelElKevin.searchReservation('A'));