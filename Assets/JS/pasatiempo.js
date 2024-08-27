const contjuegos = [
  {
    juegos: "Digimon Story Cyber Sleuth",
    imagenJuego:
      "../IMG/digimon-story-cyber-sleuth-complete-edition-complete-edition-pc-game-steam-cover.jpg",
    persoanjeFavorito: "Kyoko Kuremi",
  },
  {
    juegos: "fire emblem blazing sword",
    imagenJuego: "../IMG/fire-emblem.jpg",
    persoanjeFavorito: "Fiora",
  },
  {
    juegos: "final fantasy tactics advance",
    imagenJuego: "../IMG/FinalFantasyTacticsAdvance.jpg",
    persoanjeFavorito: "Ritz",
  },
  {
    juegos: "final fantasy tactics",
    imagenJuego: "../IMG/fftactics.png",
    persoanjeFavorito: "Delita",
  },
  {
    juegos: "tactics ogre the knight of lodis",
    imagenJuego: "../IMG/tacticsogreknight.jpg",
    persoanjeFavorito: "Eleanor Olato",
  },
  {
    juegos: "Terraria",
    imagenJuego: "../IMG/Terraria.png",
    persoanjeFavorito: "el Mercader",
  },
  {
    juegos: "Alice: Madness Returns",
    imagenJuego: "../IMG/alice.png",
    persoanjeFavorito: "El sombrerero",
  },
  {
    juegos: "tales of phantasia",
    imagenJuego: "../IMG/TalesofPhantasia.jpg",
    persoanjeFavorito: "Chester Burklight",
  },
  {
    juegos: "Valkyria Chronicles",
    imagenJuego: "../IMG/Valkyria.png",
    persoanjeFavorito: "Los Snipers",
  },
];

const juegosBody = document.getElementById("juegosBody");

function Mostrarjuegos() {
  let juegos = "";
  for (const juego of contjuegos) {
    juegos += `<tr><td>${juego.juegos}</td>`;
    juegos += `<td><img class="imagenjuego" src="${juego.imagenJuego}"/></td>`;
    juegos += `<td>${juego.persoanjeFavorito}</td></tr>`;
  }

  juegosBody.innerHTML = juegos;
}

Mostrarjuegos();


















