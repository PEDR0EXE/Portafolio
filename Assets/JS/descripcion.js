const nombre = document.getElementById("nombreCompleto");
const edad = document.getElementById("edad");
const fecha = document.getElementById("fecha");
const oficio = document.getElementById("oficio");
const estudioBody = document.getElementById("estudiosBody");

const experienciaEstudio = [
  { anio: 2024, estudio: "Operador de caja Bancaria" },
  { anio: 2023, estudio: "Ingenieria Informatica" },
  { anio: 2021, estudio: "Analista Programador" },
  { anio: 2018, estudio: "Tec nivel medio en Electronica" },
  { anio: 2017, estudio: "4 to medio" },
];


// quise cambie el for of a foreach para agregar mas conocimineto no ttene monotonia con el mismo procedimiento 

function mostrarEstudios() {
  let contEstudios = "";
  experienciaEstudio.forEach((estudio) => {
    contEstudios+=`<tr><td>${estudio.anio}</td>` ;
    contEstudios+=`<td>${estudio.estudio}</td></tr>` ;
  });

  estudioBody.innerHTML = contEstudios;
}


//para automatizar el contenido de perfil 

const perfil = {
  nombre: "Pedro Pablo",
  apellido: "Alfaro Maldonado",
  edad: 24,
  fecha: "6 de febrero del 2000",
  oficio: "Asistente Contable",
};
nombre.innerHTML =
  "<Strong>" + perfil.nombre + " " + perfil.apellido + "<Strong>";
edad.innerHTML = `<Strong> ${perfil.edad}<Strong>`;
fecha.innerHTML = `<Strong> ${perfil.fecha}<Strong>`;
oficio.innerHTML = `<Strong> ${perfil.oficio}<Strong>`;

mostrarEstudios();
