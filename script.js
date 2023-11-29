let frenchHaikus = [
  "Brise légère souffle,\nFeuilles dansent doucement,\nPaix dans l'air frais.",

  "Lune brillante haut,\nChuchotements de la nuit,\nRêves flottent librement.",

  "Soleil se lève,\nChamps de blé dorés ondulent,\nJour commence calme.",

  "Ruisseau murmure,\nPierres et eau en harmonie,\nChanson de la nature.",

  "Feuilles rouges tombent,\nAutomne colore le temps,\nFin d'un cycle doux."
];

let h1 = document.getElementById("h1");
let click = document.getElementById("click");
click.addEventListener("click", randomSentence)
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
document.addEventListener("DOMContentLoaded", randomSentence)

function randomSentence() {
  let phrase =frenchHaikus[getRandomInt(frenchHaikus.length-1)];
  h1.innerText = '" '+phrase+' "';
}
