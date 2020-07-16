// MAP
const obtenerPokemones = async () => {
  try {
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/"); //guardamos el fetch usando await en una const
    const datos = await respuesta.json(); //indicamos el tipo de formato de la respuesta usando await
    console.log(datos);
    imprimirNombresFilter(datos); //funcion imprimir nombres con map
  } catch (error) {
    console.log(error);
  }
};

const imprimirNombresFilter = (datos) => {
  //APLICAMOS FILTER PARA FILTRAR LOS DATOS QUE SE QUIERAN O NO
  const arrayNombres = datos.results.filter(
    (pokenombre) => pokenombre.name !== "bulbasaur"
  ); //filtramos y guardamos todos los nombres diferentes a bulbasaur, para filtrar los iguales usamos '==='
  console.log(arrayNombres);
};

obtenerPokemones();
