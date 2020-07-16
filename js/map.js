// MAP
const obtenerPokemones = async () => {
  try {
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/"); //guardamos el fetch usando await en una const
    const datos = await respuesta.json(); //indicamos el tipo de formato de la respuesta usando await
    console.log(datos);
    imprimirNombresMap(datos); //funcion imprimir nombres con map
  } catch (error) {
    console.log(error);
  }
};

const imprimirNombresMap = (datos) => {
  //APLICAMOS EL MAP, ALMACENANDO TODOS LOS NOMBRES EN UN ARRAY DE LOS MISMOS
  const arrayNombres = datos.results.map((pokenombre) => pokenombre.name); //pokenombre es un nombre cualquier, seguidamente se indica el reurn que en este caso solo será de name
  console.log(arrayNombres);
};

obtenerPokemones();
