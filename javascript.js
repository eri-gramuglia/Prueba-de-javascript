alert("hola");
alert("chau");
/* Este JS saluda automaticamente, pero lo hace
 llamando una función en lugar de llamar el ALERT
  directamente */
function saludar() {
  alert("alert en funcion");
  /*console.log("saludo1!!!");*/
}
("use strict");

console.log("Paso 1: declarando funciones");
let contador = 0;
function clickear(): void {
  //incrementa el valor de contador
  console.log("Paso 3: Valor anterior del contador:", +contador);
  contador++; //es lo mismo que contador = contador + 1
  console.log("Paso 4: El contador ahora vale:" + contador);
  alert("Hiciste " + contador + " clicks");
}
console.log("Paso 2: continua ejecución");
