//Debemos encadenar promesas y modificar callback dadas para evitar un callbackhell presentado

//Tarear a convertir en promesas
/* function doTask1(callback) {
  window.setTimeout(() => callback('Task 1'), 300);
}

function doTask2(callback) {
  window.setTimeout(() => callback('Task 2'), 300);
}

function doTask3(callback) {
  window.setTimeout(() => callback('Task 3'), 300);
} */

function doTask1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Task 1'), 300);
  })
}
function doTask2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Task 2'), 300);
  })
}
function doTask3() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Task 3'), 300);
  })
}

//Codigo callbackhell a arreglar
/* 
function runCode() {
  const strings = [];
  return new Promise((resolve) => {
    doTask1((rta1) => {
      strings.push(rta1);
      doTask2((rta2) => {
        strings.push(rta2);
        doTask3((rta3) => {
          strings.push(rta3);
          resolve(strings);
        })
      })
    })
  })
} */

function runCode() {
  const strings = []
  return doTask1() 
  .then((rta1) => {
    strings.push(rta1);
    return doTask2();
  })
  .then((rta2) => {
    strings.push(rta2);
    return doTask3();
  })
  .then((rta3) => {
    strings.push(rta3);
    return strings;
  })
}

runCode()
.then(array => console.log(array))