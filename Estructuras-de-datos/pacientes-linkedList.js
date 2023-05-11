// En este desafío, tu objetivo es implementar una singly linked list para almacenar información sobre 
// pacientes de un hospital. Cada nodo de la lista representará a un paciente y tendrá los siguientes campos:

// Nombre del paciente (string)
// Edad del paciente (number)
// Número de cama asignada al paciente (number)

//clase que almacena los datos de los pacientes y contiene el pointer al siguiente elemento

class Node {
  constructor(name, age, bedNumber) {
    this.name = name;
    this.age = age;
    this.bedNumber = bedNumber;
    this.next = null;
  }
}

//clase de la lista de pacientes, se va a llamar a su metodo constructor con el numero de camas que cuenta
class PatientList {
  constructor(beds) {
    this.head = null;
    this.tail = null;
    this.bedsAvailable = new Array(beds);
    for (let i = 0; i < beds; i++) {
      this.bedsAvailable[i] = i + 1;
    }
  }

  addPatient(name, age) {
    if (this.bedsAvailable.length === 0) {
      throw new Error('No hay camas disponibles');
    }
    const newPatient = new Node(name, age, this.bedsAvailable[0]);
    this.bedsAvailable.shift();

    if (!this.head) {
      this.head = newPatient;
      this.tail = newPatient;
    } else {
      this.tail.next = newPatient;
      this.tail = newPatient;
    }
  }

  removePatient(name) {
    if (!this.head) {
      throw new Error('Paciente no encontrado');
    }

    let current = this.head;
    let prev = null;

    while (current) {
      if (current.name === name) {
        if(!prev) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.bedsAvailable.push(current.bedNumber);
      }

      prev = current;
      current = current.next;
    }
    throw new Error('Paciente no encontrado');
  }

  getPatient(name) {
    let current = this.head;

    while (current) {
      if (current.name === name) {
        return {
          name:current.name,
          age: current.age,
          bedNumber: current.bedNumber,
        }
      }

      current = current.next;
    }
    throw new Error('Paciente no encontrado');
  }

  getPatientList() {
    const list = [];
    let current = this.head;

    while (current) {
      list.push({
        name:current.name,
        age: current.age,
        bedNumber: current.bedNumber,
      })
      current = current.next;
    }
    return list;
  }

  getAvailableBeds() {
    return this.bedsAvailable.length;
  }
}