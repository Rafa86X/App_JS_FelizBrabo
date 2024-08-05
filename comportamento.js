const botaoFeliz = document.querySelector('[data-tipo="botao_feliz"]');
const botaoTriste = document.querySelector('[data-tipo="botao_triste"]');
const smile = document.querySelector('[data-tipo="imagem"]');
const felizToggle = document.querySelector('[data-tipo="botao_togle"]');

function botaoToggle() {
    if (!tabrabo()) {
        if (smile.src.includes('triste')) {
            smile.src = "./imagens/feliz.png";
        } else {
            smile.src = "./imagens/triste.png";
        }
    }
}

function tabrabo() {
    return smile.src.includes('brabo');
}

function setaImgFeliz() {
    if (!tabrabo()) {
        smile.src = "./imagens/feliz.png";
    }
}

function setaImgTriste() {
    if (!tabrabo()) {
        smile.src = "./imagens/triste.png";
    }
}

function setaImgBrabo() {
    smile.src = "./imagens/brabo.png";
}

botaoFeliz.addEventListener('click', setaImgFeliz);
botaoTriste.addEventListener('click', setaImgTriste);
felizToggle.addEventListener('click', botaoToggle);
smile.addEventListener('mouseover', setaImgFeliz);
smile.addEventListener('mouseleave', setaImgTriste);
smile.addEventListener('dblclick', setaImgBrabo);

export const comportamento = { 
    botaoToggle,
    tabrabo,
    setaImgFeliz,
    setaImgTriste,
    setaImgBrabo
  } 