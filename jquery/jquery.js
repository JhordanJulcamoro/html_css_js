// $(document).ready(function () {
//   console.log("Documento listo");
// });

// utilizamos la extensión instalada y solo ponemos jq y seleccionamos jqdocready
// $(document).ready(function () {
//   // para seleccionar un elemento html
//   // por etiqueta
//   $("h1").html("Etiqueta h1"); //para cambiar el texto de la etiqueta h1
//   // por clase
//   $(".display-4").html("Desde clase");
//   // por id
//   $("#idh1").html("Desde id");

//   //   o se puede usar vainilla javascript - js puro
//   document.querySelector("h1").innerHTML = "Etiqueta h1 en vainilla";
//   document.querySelector(".display-4").innerHTML = "Desde clase en vainilla";
//   document.querySelector("#idh1").innerHTML = "Desde id en vainilla";
// });

// DOM
// $(document).ready(function () {
//   $("#idh1").addClass("text-danger"); //acá se le esta agregando una clase de bootstrap a un h1

//   $("#idh1").removeClass("display-4"); //ahora removemos la clase que tenía en html el h1

//   $("#contenido").append("<h1>Este es un contenido agregado con append</h1>"); //append agrega una etiqueta si se quisiera
//   $("#contenido").prepend("<h1>Contenido agregado con prepend al inicio</h1>"); //preppend agrega contenido al inicio

//   $("#color-azul").css("color", "blue"); //agregamos una propiedad css a la etiqueta seleccionada
//   $("#css-modific").css({
//     color: "brown",
//     background: "skyblue",
//     padding: "20px",
//   }); //agregamos css con mas de una propiedad
//   $(".remover").remove(); //sirve para remover una etiqueta
//   $(".ocultar").hide();

//   $("img").attr("src", "/img/noticia.jpg"); //agrega el atributo src de la localizacion de la imagen
//   $("img").css({ width: "100px" });
//   $("img:last").attr("height", "150px"); //cambiamos con attr el tamaño de la última imagen
// });

//CLICK
var parrafo = $("#resultado p");
$(document).ready(function () {
  $(".btn-primary").click(function () {
    // $("#resultado p").remove(); //prueba
    parrafo.addClass("display-4"); //agranda el texto
  });

  $(".btn-danger").click(function () {
    parrafo.removeClass("display-4"); //quita la clase para agrandar el texto
  });

  $(".btn-warning").click(function () {
    parrafo.toggleClass("display-4"); //con toogleclass se puede agregar y quitar la clase
  });

  //KEYUP
  var txt_entrada = $("#nombre input");
  var txt_salida = $("#contenido p");

  txt_entrada.keyup(function () {
    console.log(txt_entrada.val());
    txt_salida.html(txt_entrada.val());

    if (txt_entrada.val() === "") {
      txt_salida.html("Estoy esperando...");
    }
  });

  //FORMULARIO
  $("#formulario").submit(function (e) {
    e.preventDefault(); //lo que por defecto hace el navegador no lo haga
    var name = $("#name").val(); //detectamos que escribio el usuario
    console.log(name);
  });

  //EFECTOS CON JQUERY
  var btn_ocultar = $("#boton_uno");
  var btn_mostrar = $("#boton_dos");
  var btn_toggle = $("#boton_tres");
  var cuadro = $("#cuadro_efecto");

  $(btn_ocultar).click(function (e) {
    e.preventDefault();
    console.log("ocultar");
    cuadro.hide(1000); //el tiempo esta en milisegundos
  });

  $(btn_mostrar).click(function (e) {
    e.preventDefault();
    console.log("mostrar");
    +cuadro.show(1000);
  });

  //   $(btn_toggle).click(function (e) {
  //     e.preventDefault();
  //     console.log("toggle");
  //     cuadro.toggle(2000);
  //   });

  //UTILIZANDO ANIMATE
  $(btn_toggle).click(function (e) {
    e.preventDefault();
    cuadro.animate(
      {
        left: "450px",
        opacity: "0.5",
        height: "150px",
        width: "150px",
      },
      "3000", //demora del tiempo de ejecución
      function () {
        //este es un callback, es decir cuando termina la ejecición de lo anterior realiza esto
        cuadro.animate(
          {
            left: "0px",
            opacity: "0.5",
            height: "150px",
            width: "150px",
          },
          1000
        );
      }
    );
  });
});
