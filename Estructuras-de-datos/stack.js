// En este ejercicio, el objetivo es implementar una playlist de un servicio de música utilizando un stack.
// Deberás implementar la lógica de la clase Playlist la cual deberá tener las siguientes 3 propiedades top, 
// bottom y length para poder desarrollar el stack.
// Adicional a esto, necesitamos crear un clase nodo, como con otroas estructuras de datos, esta almacena el 
// valor y un next que será el apuntador hacia el siguiente nodo

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Playlist {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  //agregar cancion al stack o pila
  addSong(song) {
    const newSong = new Node(song);
    if (!this.bottom) {
      this.bottom = newSong;
      this.top = newSong;
    } else {
      newSong.next = this.top;
      this.top = newSong;
    }
    this.length++;
  }

  //Reproduce la cancion que este hasta arriba (top) y luego eliminarla, sino hay caciones, lanza un error
  playSong() {
    if (!this.bottom) {
      throw new Error('No hay canciones en la lista');
    }
    let playingSong;

    if (!this.bottom) {
      return null;
    }
    if (this.bottom === this.top) {
      playingSong = this.top.value;
      this.deletePlaylist();
    } else {
      playingSong = this.top.value;
      this.top = this.top.next;
      this.length--;
    }
    return playingSong;
  }

  //Arroja un array con todas las cancione  en orden de reproduccion, es decir, desde arriba hasta abajo
  //o de la ultima agregada a la primera
  getPlaylist() {
    if (!this.bottom) {
      return [];
    }
    const songList = [];
    let current = this.top;
    
    while (current) {
      songList.push(current.value);
      current = current.next;
    }
    
    return songList;
  }

  deletePlaylist() {
    if (this.length > 0){
      this.bottom = null;
      this.top = null;
      this.length = 0;
    }
  }

}
