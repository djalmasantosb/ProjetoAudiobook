const nomeCapitulo = document.getElementById('capitulo');
const audioCapitulo = document.getElementById('audio-capitulo');
const botaoPlayPause = document.getElementById('play-pause');
const botaoProximoCapitulo = document.getElementById('proximo');
const botaoCapituloAnterior = document.getElementById('anterior');

const numeroCapitulos = 10;
let taTocando = 0;
let capituloAtual = 1;

function tocarFaixa() {
  audioCapitulo.play();
  botaoPlayPause.classList.remove('bi-play-circle-fill');
  botaoPlayPause.classList.add('bi-pause-circle-fill');
}

function pausarFaixa() {
  audioCapitulo.pause();
  botaoPlayPause.classList.add('bi-play-circle-fill');
  botaoPlayPause.classList.remove('bi-pause-circle-fill');
}

function tocarOuPausarFaixa() {
  if (taTocando === 0) {
    tocarFaixa();
    taTocando = 1;
  } else {
    pausarFaixa();
    taTocando = 0;
  }
}

function trocarNomeCapitulo() {
  nomeCapitulo.innerText = 'Capítulo ' + capituloAtual;
}

function capituloAnterior() {
  if (capituloAtual === 1) {
    capituloAtual = numeroCapitulos;
  } else {
    capituloAtual -= 1;
  }
  audioCapitulo.src = 'books/dom-casmurro/' + capituloAtual + '.mp3';
  trocarNomeCapitulo();
  tocarFaixa();
}

function proximoCapitulo() {
  if (capituloAtual === numeroCapitulos) {
    capituloAtual = 1;
  } else {
    capituloAtual += 1;
  }
  audioCapitulo.src = 'books/dom-casmurro/' + capituloAtual + '.mp3';
  trocarNomeCapitulo();
  tocarFaixa();
}

botaoPlayPause.addEventListener('click', tocarOuPausarFaixa);
botaoCapituloAnterior.addEventListener('click', capituloAnterior);
botaoProximoCapitulo.addEventListener('click', proximoCapitulo);
audioCapitulo.addEventListener('ended', proximoCapitulo);
