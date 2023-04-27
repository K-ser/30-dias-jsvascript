//Vamos a crear un metodo de pagos mediante la herencia y polimorfismo en las clases. Se crea una clase base
//esta solo va a tener un metodo, posterior a eso se crean clases hijas que serán los metodos de pago
//estas van a implementar el metodo de la clase base de manera un poco distinta. Por ultimo se crea una 
//clase que recive un metodo de pago y una cantidad, y devuelve el objeto que suele devolver cada metodo de
//pago

class Pay {
  makePay() {
    return {
      realized: true,
      quantity,
    }
  }
}

class PayPal extends Pay {
  constructor(email) {
    super();
    this.email = email;
  }

  makePay(quantity) {
    return {
      ...super.makePay(quantity),
      platform: 'PayPal',
      email: this.email,
    }
  }
}

class Card extends Pay {
  constructor(numberCard) {
    super();
    this.numberCard = numberCard;
  }

  makePay(quantity) {
    let numberCardString = this.numberCard.toString();
    if (numberCardString.length !== 16) {
      throw new Error('El numero de tarjeta debe tener 16 digitos');
    } else {
      let lastCardNumbers = '';
      for (let i = 12; i < numberCardString.length; i++) {
        lastCardNumbers += numberCardString[i];
      }
      return {
        ...super.makePay(quantity),
        lastCardNumbers,
      }
    }
  }
}

class Cash extends Pay {
  makePay(quantity) {
    return super.makePay(quantity);
  }
};

function processPay(method, quantity) {
  return method.makePay(quantity);
}