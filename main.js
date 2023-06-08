const botaoFeliz = document.querySelector('[data-tipo="botao_feliz"]')
const botaotriste = document.querySelector('[data-tipo="botao_triste"]')
const Smile = document.querySelector('[data-tipo="imagem"]')
const feliz_t =  document.querySelector('[data-tipo="botao_togle"]')



function botao_togle(){
    if(!tabrabo()){
        if(Smile.src.indexOf('triste')>-1)
          {Smile.src="./imagens/feliz.png"}
        else
        {Smile.src="./imagens/triste.png"}
    }
}


function tabrabo(){
    return Smile.src.indexOf('brabo')>-1
}

function setaImgFeliz (){
    if(!tabrabo())
    Smile.src="./imagens/feliz.png"
  }


function setaImgTriste (){
    if(!tabrabo())
    Smile.src="./imagens/triste.png"
  }

function setaImgBrabo (){
    Smile.src="./imagens/brabo.png"
} 


botaoFeliz.addEventListener('click', setaImgFeliz)
botaotriste.addEventListener('click', setaImgTriste)
feliz_t.addEventListener('click', botao_togle)
Smile.addEventListener('mouseover', setaImgFeliz)
Smile.addEventListener('mouseleave', setaImgTriste)
Smile.addEventListener('dblclick', setaImgBrabo)


