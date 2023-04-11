//Vamos a crear la logica de una funcion que nos permite validar un registro de un formulario, esto lo va
//a hacer comparando el nuevo registro con una base de usuarios ya registrados. En caso de que el registro
//nuevo no contenga algun dato, deberá lanzar un error que indique los datos faltantes. Asi mismo, si hay
//un e-mail que ya se encuentre en la base de registros, se debera retornar un error que indique el e-mail
//duplicado. Si el registro es correcto, se debe agregar a la lista sin agregar la contraseña y lanzar un
//mensaje indicando el registro fue exitoso junto con el nombre y apellido

const formData = {
  name: "Juan",
  lastname: 'perez',
  email: "juan@example.com",
  password: "12345"
}

const registeredUsers = [
  { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
  { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
]

function validateForm(formData, registeredUsers) {
  const requiredFields = ['name', 'lastname', 'email', 'password'];

  if (!requiredFields.every(field => formData[field])) {
    throw new Error(
      `Faltan los siguientes campos:
      ${requiredFields.filter(field => !formData[field]).join(', ')}`
    )
  }

  const existUser = registeredUsers.find(user => formData.email === user.email);

  if (existUser) {
    throw new Error(`El usuario con email ${formData.email} ya existe`);
  }

  registeredUsers.push({
    name: formData.name,
    lastname: formData.lastname,
    email: formData.email,
  });

  return `El registro fue exitoso ${formData.name} ${formData.lastname}`

}

validateForm(formData, registeredUsers)