// Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

let primerNumero = parseInt(prompt("Ingrese un número"));
let segundoNumero = parseInt(prompt("Ingrese un número"));
if (primerNumero > segundoNumero) {
  document.write(`El mayor es: ${primerNumero}`);
} else {
  document.write(`El mayor es: ${segundoNumero}`);
}
