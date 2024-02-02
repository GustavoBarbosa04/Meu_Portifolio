const buttonPlay = document.getElementById(`play`);
const audio = document.getElementById(`audio-capitulo`);
const proxima = document.getElementById(`proximo`);
const anterior = document.getElementById(`voltar`);
const limitador = 10;
let tocando = 0;
let capituloAtual = 1;
const paragrafo = document.querySelector(`h1`)



function torcarAudio() {
  audio.play();
}

function pausarAudio() {
  audio.pause();
}

function tocarOUpausar() {
  if (tocando === 0) {
    torcarAudio();
    tocando = 1;
    buttonPlay.classList.remove("bi-play-circle-fill");
    buttonPlay.classList.add("bi-pause-circle-fill");
  } else {
    pausarAudio();
    tocando = 0;
    buttonPlay.classList.remove("bi-pause-circle-fill");
    buttonPlay.classList.add("bi-play-circle-fill");
  }
}

function proximaFaixa() {
  if (capituloAtual === limitador) {
    capituloAtual = 1;
  } else {
    capituloAtual = capituloAtual + 1;
  }
  audio.src = "dom-casmurro/" + capituloAtual + ".mp3";
  torcarAudio();
  tocando = 1;
  paragrafo.innerHTML = `capitulo ${capituloAtual}`
}
function voltarFaixa() {
  if (capituloAtual === 1) {
    capituloAtual = limitador;
  } else {
    capituloAtual = capituloAtual - 1;
  }
  audio.src = "dom-casmurro/" + capituloAtual + ".mp3";
  torcarAudio();
  tocando = 1;
  paragrafo.innerHTML = `capitulo ${capituloAtual}`
}



anterior.addEventListener(`click`, voltarFaixa);
proxima.addEventListener(`click`, proximaFaixa);
buttonPlay.addEventListener(`click`, tocarOUpausar);
