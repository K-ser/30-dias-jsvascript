const dates = ['07/11','06/11','05/11'];

const ordenred = [...dates].sort((a, b) => {
  const aDate = new Date(`${a} ${new Date().getFullYear()}`);
  const bDate = new Date(`${b} ${new Date().getFullYear()}`);
  console.log(aDate, bDate)
  return aDate - bDate;

});

console.log(ordenred);