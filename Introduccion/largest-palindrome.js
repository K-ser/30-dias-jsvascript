//Una funcion que devuelva el palimdromo mas largo, en caso de no haber uno
//devuelve NULL

const words = ["racecar", "level", "world", "hello"];

function findLargestPalindrome(words) {
  const palindromes = [];
  for (let word of words) {
    let reverseWord = word.split('').reverse().join('');
    if (word === reverseWord) {
      palindromes.push(reverseWord);
    }
  }
  palindromes.sort((a, b) => b.length - a.length);

  if (palindromes.length === 0) {
    return null;
  } else {
    return palindromes[0];
  }
}

console.log(findLargestPalindrome(words))