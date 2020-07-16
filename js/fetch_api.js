// FETCH - CONSUMO DE API
fetch("https://pokeapi.co/api/v2/pokemon/") //aqui ingresamos el link del api
  .then((respuesta) => respuesta.json()) //aquí se ingresa una "promesa" y se indica que el formato en que se va a retornar la respuesta
  .then((datos) => {
    //aquí obtenemos los objetos que tenemos
    console.log(datos); //datos completos del api
    console.log(datos.results); //"results" es el nombre del campo al que se llama para obtener los objetos - propia del api
    datos.results.forEach((element) => {
      //recorremos el objeto solo de nombres
      console.log(element.name);
    });
  })
  .catch((error) => console.log(error)); //para capturar los errores que pueda generar en caso de no obtener los datos
