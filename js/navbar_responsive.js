function accion() {
  console.log("Esta funcionando");
  var elemento = document.getElementsByClassName("nav-hijo");
  for (var index = 0; index < elemento.length; index++) {
    elemento[index].classList.toggle("desaparece");
  }
}
