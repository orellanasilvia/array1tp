const datoUsuario1 = [];
const datoUsuario2 = [];
for (let i = 0; i <= 5; i++) {
  let usuario1 = prompt("Ingrese el primer número");
  datoUsuario1.push(usuario1);
  let usuario2 = prompt("Ingrese el segundo número");
  datoUsuario2.push(usuario2);
}
const sumarDatosUsuarios = (datoUsuario1, datoUsuario2) => {
  let suma = 0;
  let arraySuma = [];
  for (let j = 0; j < datoUsuario1.length; j++) {
    suma = datoUsuario1[j] + datoUsuario2[j];
    arraySuma.push(suma);
  }
  return arraySuma;
};
console.log(sumarDatosUsuarios(datoUsuario1, datoUsuario2));
