"use strict";
let valorTirada = 0;
let valorTotal = 0;
function generarTiradaDado(valor) {
  return Math.round(Math.random);
}
/*Math.round(Math.random() * 6));*/

for (let i = 1; i < 20; i++) {
  valorTirada = Math.round(Math.random() * 5) + 1;
  valorTotal = valorTotal + valorTirada;
  console.log(
    "tirada numero:",
    i,
    "valor de la tirada",
    valorTirada,
    "resultado",
    valorTotal
  );
  if (valorTotal >= 50) {
    break;
  }
}
console.log(
  "Enhorabuena, ha salido un",
  valorTirada,
  "has ganado con un total de",
  valorTotal
);
