function createCalculator() {
  let total = 0;

  return {
    add(value) {
      return total += value;
    },

    subtract(value) {
      total -= value;
      return total;
    },

    multiply(value) {
      total *= value;
      return total;
    },
    
    divide(value) {
      total /= value;
      return total;
    },

    clear() {
      total = 0;
      return total;
    },

    getTotal() {
      return total;
    },
  }
}

const calculator = createCalculator();
console.log(calculator.add(15));
console.log(calculator.add(5));


function makeCounter() {
  let count = 0;

  return function() {
    count++
    return count;
  }
}

const counter = makeCounter();
console.log(counter())
console.log(counter())
console.log(makeCounter()())