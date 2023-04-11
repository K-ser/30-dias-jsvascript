//Crear con promesas una funcion que envie un email despues de dos segundos, el email debe contener el email
//de destino, el asunto y el cuerpo del mensaje, en caso de que alguno falte, se debe enviar un fallo

const sendEmail = function(email, subject, body) {
  const result = { email, subject, body};
  return new Promise((resolve, reject) => {
    if (email && subject && body) {
      //para correr el setTimeour en algunos entornos es necesario su namespace, como window.setTimeout
      setTimeout(() => resolve(result), 2000);
    } else {
      reject(new Error('Faltan datos para enviar el e-mail'));
    }
  });
}

const test = sendEmail('kev', 'subject', 'cuerpo')
.then(result => console.log(result))
.catch(err => console.log(err))