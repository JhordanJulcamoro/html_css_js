// FUNCIONES

//Declaración común
function suma(num1, num2) {
  console.log(num1 + num2);
}
suma(5, 3);

//Declaración "funcion flecha"
const resta = (a, b) => {
  console.log(a - b);
};
resta(10, 5);

// uso de return
const multiplicacion = (a, b) => {
  return a * b;
};
const res = multiplicacion(5, 4);
console.log(res);
// lo anterior es igual a esto:
const multiplicar = (a, b) => a * b;
const resultado = multiplicar(3, 2);
console.log(resultado);

//funcion flecha con parametros por defecto
const defecto = (nombre = "Jhordan") => {
  console.log("Mi nombre es " + nombre);
};
defecto();
defecto("Kev");
