/*   alert("hola"); */

/* Este JS saluda automaticamente, pero lo hace
 llamando una función en lugar de llamar el ALERT
  directamente */
function saludar() {
  alert("hola");
  /*console.log("saludo1!!!");*/
}
("use strict");

console.log("Paso 1: declarando funciones");
let contador = 0;
function clickear() {
  //incrementa el valor de contador
  contador++;
  console.log("Paso 4: El contador ahora vale:" + contador);
  alert("Hiciste " + contador + " clicks");
  //es lo mismo que contador = contador + 1
}
console.log("Paso 2: continua ejecución");
