// Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

let primerNumero = parseInt(prompt("Ingrese un número"));
if (
  primerNumero % 2 === 0 ||
  primerNumero % 3 === 0 ||
  primerNumero % 5 === 0 ||
  primerNumero % 7 === 0
) {
  document.write(`El número es divisible por 2, 3,5 o 7`);
} else {
  document.write(`El número no es divisible por 2, 3,5 o 7`);
}