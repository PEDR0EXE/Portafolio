/*-------- Container ----------------------------- */
const thiefContainer = document.getElementById("thiefContainer");
const knightContainer = document.getElementById("knightContainer");
const mageContainer = document.getElementById("mageContainer");
const swordContainer = document.getElementById("swordContainer");
/*------------- Imagen-------------------------------- */
const imagethief = document.getElementById("imagethief");
const imageMage = document.getElementById("imageMage");
const imageSword = document.getElementById("imageSword");
const imageKnight = document.getElementById("imageKnight");

// Obtiene la locacion del archivo en donde el index es la principal y las otras paginas estan en la carpeta Templtates
const currentPage = window.location.pathname.split("/").pop();

//Cambia la imagen a Gif Al Pasar el mouse 
/* quise agregar ese cambio de png a gif o viceversa para que se una pagina muy dinamica clasica de antiguas paginas web */

thiefContainer.addEventListener("mouseover", () => {
  if (currentPage.toLowerCase() === "index.html") {
    imagethief.src = "/Assets/IMG/thief.gif";
  } else {
    imagethief.src = "../IMG/thief.gif";
  }
});

knightContainer.addEventListener("mouseover", () => {
  if (currentPage.toLowerCase() === "index.html") {
    imageKnight.src = "/Assets/IMG/Knight.gif";
  } else {
    imageKnight.src = "../IMG/Knight.gif";
  }
});

mageContainer.addEventListener("mouseover", () => {
  if (currentPage.toLowerCase() === "index.html") {
    imageMage.src = "/Assets/IMG/mage.gif";
  } else {
    imageMage.src = "../IMG/mage.gif";
  }
});

swordContainer.addEventListener("mouseover", () => {
  if (currentPage.toLowerCase() === "index.html") {
    imageSword.src = "/Assets/IMG/original.gif";
  } else {
    imageSword.src = "../IMG/original.gif";
  }
});
// Vuelve a la imagen estática cuando se quita el mouse
thiefContainer.addEventListener("mouseout", () => {
   if (currentPage.toLowerCase() === "index.html") {
     imagethief.src = "/Assets/IMG/thief.png";
   } else {
     imagethief.src = "../IMG/thief.png";
   }
});

knightContainer.addEventListener("mouseout", () => {
  if (currentPage.toLowerCase() === "index.html") {
    imageKnight.src = "/Assets/IMG/Knight.png";
  } else {
    imageKnight.src = "../IMG/Knight.png";
  }
});

mageContainer.addEventListener("mouseout", () => {
  if (currentPage.toLowerCase() === "index.html") {
    imageMage.src = "/Assets/IMG/mage.png";
  } else {
    imageMage.src = "../IMG/mage.png";
  }
});

swordContainer.addEventListener("mouseout", () => {
  if (currentPage.toLowerCase()==="index.html") {
    imageSword.src = "/Assets/IMG/original.png";
  } else {
    imageSword.src = "../IMG/original.png";
  }
});
