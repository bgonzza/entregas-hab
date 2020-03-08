"use strict";

function mediaPuntuacion(valor1, valor2, valor3) {
  return (valor1 + valor2 + valor3) / 3;
}

let mariasTeam = mediaPuntuacion(62, 34, 55);
let paulasTeam = mediaPuntuacion(35, 60, 63);
let rebecasTeam = mediaPuntuacion(40, 39, 63);

console.log(mariasTeam);
console.log(paulasTeam);
console.log(rebecasTeam);

if (mariasTeam > paulasTeam === true && mariasTeam > rebecasTeam === true) {
  console.log("El equipo de Maria tiene la mayor puntuacion con", mariasTeam);
}
if (paulasTeam > mariasTeam === true && paulasTeam > rebecasTeam === true) {
  console.log("El equipo de Paula tiene la mayor puntiacion con", paulasTeam);
}
if (rebecasTeam > mariasTeam === true && rebecasTeam > paulasTeam === true) {
  console.log("El equipo de Rebeca tiene la mayor puntuacion con", rebecasTeam);
}
