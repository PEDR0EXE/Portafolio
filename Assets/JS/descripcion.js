const nombre= document.getElementById("nombreCompleto");
const edad= document.getElementById("edad");
const fecha=document.getElementById("fecha")
 const oficio= document.getElementById("oficio")
let perfil = 
  {
    nombre: "Pedro Pablo",
    apellido: "Alfaro Maldonado",
    edad: 24,
    fecha: "6 de febrero del 2000",
    oficio: "Asistente Contable"
  }
;
 nombre.innerHTML="<Strong>"+perfil.nombre+" "+perfil.apellido+"<Strong>"
  edad.innerHTML=`<Strong> ${perfil.edad}<Strong>`
fecha.innerHTML=`<Strong> ${perfil.fecha}<Strong>`
oficio.innerHTML=`<Strong> ${perfil.oficio}<Strong>`

