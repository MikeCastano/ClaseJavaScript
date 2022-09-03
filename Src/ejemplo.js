import { sumaDosNumeros } from "./Funciones/funciones.js";

let peliculas = [
  { numero: 1, genero: "terror", titulo: "it" },
  { numero: 2, genero: "humor", titulo: "risas" },
  { numero: 3, genero: "Suspenso", titulo: "No corras" },
  { numero: 4, genero: "Drama", titulo: "Amor mio" },
  { numero: 4, genero: "miedo", titulo: "bye" },
];
console.log("otro cambio");
let wrapMovies = document.getElementById("wrapMovies");
let templateMovies = peliculas.forEach((item) => {
  wrapMovies.innerHTML += `<div class="movie"><p>${item.numero}</p><p>${item.genero}</p><p>${item.titulo}</p></div>`;
});


