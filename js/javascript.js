// // alerta en pantalla
// alert("funcionando");
// // alerta en consola
// console.log("funcionando en consola");

// declaro variables
var numero = 5;
var texto = "cinco";
console.log("Varibale numero:", numero + " " + texto);

const numeroConst = 6;
console.log("Constante no modificable: " + numeroConst);

var suma = 4;
suma = suma + 1;
suma++;
console.log("Suma:" + suma);

var resta = 8;
resta--;
console.log("Resta " + resta);

// if
if (suma > resta) {
  console.log("suma > resta");
} else {
  console.log("suma< resta");
}

//array
var arreglo = [1, 2, 3, "Pedro", "Carlos", true];
console.log(arreglo[3]);

for (var i = 0; i < arreglo.length; i++) {
  console.log("ARREGLO:" + arreglo[i]);
}

var valor = true;
var i = 0;
while (valor) {
  if (i < arreglo.length) {
    console.log("While " + arreglo[i]);
    i++;
    valor = true;
  } else {
    valor = false;
  }
}

// funciones
var valor = 10;
multiplicar(valor);

function multiplicar(valor) {
  console.log(valor * 2);
}

// DIFERENCIA VAR/LET/CONST

// VAR puede declarar doble ves el mismo valor y no genera error
var numero = 10;
var numero = 20;
console.log(numero);

// let solo permite hacer una declaración evitando doble declaración
let numero_let = 15;
numero_let = 20;
console.log(numero_let);
// ejemplo de uso de let
let valor_let = 5;
if (true) {
  let valor_let = 24;
  console.log("valor modificado dentro " + valor_let);
}
console.log("Valor no modificado fuera " + valor_let);

// const es parecido a let, solo que no permite agregar valores como lett
const array = [100, 20, 30];
array.push(40); //para agregar valores, diferencia de let
console.log(array);
