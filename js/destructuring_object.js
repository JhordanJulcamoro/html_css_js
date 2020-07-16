//OBJETOS
const mascota = {
  nombre: "Mia",
  raza: "Golden",
  edad: 12,
  altura: 1.45,
  activo: true,
};
mascota.ancho = 1.63; //adicionar un valor
console.log(mascota);
mascota.vacunas = ["vac1", "vac2", "vac3"]; //agregando un array
console.log(mascota.vacunas);
console.log(mascota.vacunas[2]);

//DESTRUCTURING OBJECT
//antes
const nombreMascota = mascota.nombre;
console.log(nombreMascota);
//ahora con destructuring
const { nombre } = mascota;
console.log(nombre);
//para varios datos del obj
const { edad, altura } = mascota;
console.log(edad + " <-> " + altura);
