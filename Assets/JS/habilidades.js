const bodyHabilidades=document.getElementById("HabilidadesBody");


const habilidades = [
  {
    habilidad_blanda:"Perseverancia",
    habilidad_duras: "Conocimiento del paradigma de orientado a objetos",
  },
  {
    habilidad_blanda: "Resolucion de conflictos",
    habilidad_duras: "manejo basico de base de datos en SQL",
  },
  {
    habilidad_blanda: "Trabajo en equipo",
    habilidad_duras: "Nivel Basico de Java",
  },
  {
    habilidad_blanda: "ética de trabajo",
    habilidad_duras: "Conocimiento en C#",
  },
  {
    habilidad_blanda: "Gestión del tiempo",
    habilidad_duras: "Mantenimiento de PC",
  },
  {
    habilidad_blanda: "Empatía",
    habilidad_duras: "Instalacion y Solucion de software ",
  },
  {
    habilidad_blanda: "Flexibilidad",
    habilidad_duras: "Instalacion de impresora",
  },
  {
    habilidad_blanda: "Iniciativa propia",
    habilidad_duras: "Medicion electrica",
  },
];

function mostrarHabilidad(){
let contenidoHabilidad="";
for (const habilidad of habilidades) {
  contenidoHabilidad+= `<tr><td>${habilidad.habilidad_blanda}</td>`;
contenidoHabilidad+= `<td>${habilidad.habilidad_duras}</td></tr>`;

}
bodyHabilidades.innerHTML=contenidoHabilidad;
}
mostrarHabilidad()
