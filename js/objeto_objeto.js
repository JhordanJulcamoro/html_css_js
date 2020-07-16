//OBJETOS DENTRO DE OBJETOS
const web = {
  nombre: "OreoDev",
  dominio: "OreoDev.com",
  links: {
    dominio: "www.oreodev.com",
    nombre: "principal",
  },
  redesSociales: {
    facebook: "oreodev",
    instagram: "@oreodev",
    twitter: {
      usuario: "oreo_dev",
      dominio: "www.twitter.com/oreo_dev",
    },
  },
};

console.log(web);
console.log(web.redesSociales.facebook);
console.log(web.redesSociales.twitter.dominio);

//aplicando destructing object
const { nombre } = web;
console.log(nombre);
const { usuario, dominio } = web.redesSociales.twitter;
console.log(usuario, dominio);
