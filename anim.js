// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "I like the way you sound in the morning", time: 10 },
  { text: "We're on the phone and without a warning", time: 13 },
  { text: "I realize you laugh is the best sound", time: 15 },
  { text: "I have ever heard", time: 18 },
  { text: "I like the way I can't keep my focus", time: 21 },
  { text: "I watch you talk you didn't notice", time: 23 },
  { text: "I hear the words but all I can think is", time: 26 },
  { text: "We should be together", time: 29 },
  { text: "Every time you smile, I smile", time: 32 },
  { text: "And every tine you shine, i'll shine for you", time: 35 },
  { text: "Whoa, oh, I'm feeling you, baby", time: 40 },
  { text: "Don't be afraid to jump then fall", time: 44 },
  { text: "Jump them fall into me", time: 49 },

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);