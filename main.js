const botaoFeliz = document.querySelector('[data-tipo="botao_feliz"]');
const botaoTriste = document.querySelector('[data-tipo="botao_triste"]');
const smile = document.querySelector('[data-tipo="imagem"]');
const toggleBotao = document.querySelector('[data-tipo="botao_toggle"]');

function toggleImagem() {
    if (!isBrabo()) {
        if (smile.src.includes('triste')) {
            smile.src = "./imagens/feliz.png";
        } else {
            smile.src = "./imagens/triste.png";
        }
    }
}

function isBrabo() {
    return smile.src.includes('brabo');
}

function setaImgFeliz() {
    console.log("aiaia");
    
    if (!isBrabo()) {
        smile.src = "./imagens/brabo.png";
    }
}

function setaImgTriste() {
    if (!isBrabo()) {
        smile.src = "./imagens/triste.png";
    }
}

function setaImgBrabo() {
    console.log("oioioi");
    smile.src = "./imagens/brabo.png";
}

botaoFeliz.addEventListener('click', setaImgFeliz);
botaoTriste.addEventListener('click', setaImgTriste);
toggleBotao.addEventListener('click', toggleImagem);
smile.addEventListener('mouseover', setaImgFeliz);
smile.addEventListener('mouseleave', setaImgTriste);
smile.addEventListener('dblclick', setaImgBrabo);

