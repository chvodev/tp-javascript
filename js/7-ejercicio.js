// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let primerNumero = parseInt(prompt("Ingrese un número"));
let segundoNumero = parseInt(prompt("Ingrese un número"));
let tercerNumero = parseInt(prompt("Ingrese un número"));
if (primerNumero > segundoNumero) {
  document.write(`El mayor es: ${primerNumero}`);
} else if (segundoNumero > tercerNumero) {
  document.write(`El mayor es: ${segundoNumero}`);
} else {
  document.write(`El mayor es: ${tercerNumero}`);
}
