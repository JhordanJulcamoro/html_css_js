// ASYNC - AWAIT
const obtenerPokemones = async () => {
  try {
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/"); //guardamos el fetch usando await en una const
    const datos = await respuesta.json(); //indicamos el tipo de formato de la respuesta usando await
    console.log(datos); //imprimimos todos los datos obtenidos
    // datos.results.forEach(element=>{
    //   console.log(element.name);
    // })
    imprimirNombres(datos); //funcion imprimir nombres
  } catch (error) {
    //imprimimos en caso obtengamos algún error
    console.log(error);
  }
};

const imprimirNombres = (datos) => {
  datos.results.forEach((element) => {
    console.log(element.name);
  });
};

obtenerPokemones();
