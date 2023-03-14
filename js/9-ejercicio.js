// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen

let frase = prompt("Ingrese una frase");
frase = frase.toLowerCase();

for (let vocal = 0; vocal < frase.length; vocal++) {
  if (
    frase.charAt(vocal) == "a" ||
    frase.charAt(vocal) == "e" ||
    frase.charAt(vocal) == "i" ||
    frase.charAt(vocal) == "o" ||
    frase.charAt(vocal) == "u"
  ) {
    document.write(frase.charAt(vocal));
  }
}