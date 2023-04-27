function pets(type, age) {
  if (type === 'perro') {
    switch(type === 'perro') {
      case age < 1:
        return ('Los cachorros necesitan pequeñas y frecuentes sesiones de juego');
        
      case age >= 1 && age <= 7:
        return ('Los perros a esta edad necesitan caminatas diarias y sesiones de juego');
        
      case age > 7:
        return ('Los perros viejos necesitan caminatas más cortas');
        
    }
  }

  if ( type === 'gato') {
    switch(true) {
      case age < 1:
        return ('Los gatitos necesitan frecuentes sesiones de juego');
        
      case age > 1 && age <= 7:
        return ('Los gatos a esta edad necesitan jugar diariamente');
        
      case age > 7:
        return ('Los gatos viejos necesitan sesiones de juego más cortas');
        
    }
  }

  if (type === 'ave') {
    switch(true) {
      case age < 1:
        return ('Las aves jóvenes necesitan mucho espacio para volar');
        
      case age > 1 && age <= 7:
        return ('Las aves necesitan jugar diariamente y un lugar para volar');
        
      case age > 7:
        return ('Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar');
        
      default:
        return ('Tipo de mascota invalida');
    }
  } else {
    return 'Tipo de mascota inválida';
  }
}

console.log(pets('mamut', 5));