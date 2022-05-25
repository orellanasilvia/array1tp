const array1 = [];
const array2 = [];
for (let i = 0; i <= 5; i++) {
  let datoArreglo1 = Number(
    prompt("Arreglo1: Ingrese el " + (i + 1) + " número")
  );
  array1.push(datoArreglo1);
  let datoArreglo2 = Number(
    prompt("Arreglo2: Ingrese el " + (i + 1) + " número")
  );
  array2.push(datoArreglo2);
}
const sumarDatosUsuarios = (array1, array2) => {
  let suma = 0;
  let arraySuma = [];
  for (let j = 0; j < array1.length; j++) {
    suma = array1[j] + array2[j];
    arraySuma.push(suma);
  }
  return arraySuma;
};
console.log(sumarDatosUsuarios(array1, array2));
