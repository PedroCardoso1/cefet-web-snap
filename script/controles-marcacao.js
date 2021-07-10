let el = document.querySelector('#visibilidade-das-marcacoes');
let marcacoes = document.getElementsByClassName('marcacao');
function addClass(elemento,classe){
    for(let i=0; i<elemento.length; i++){
        elemento[i].classList.add(classe);
    }
}
function removeClass(elemento,classe){
    for(let i=0; i<elemento.length; i++){
        elemento[i].classList.remove(classe);
    }
}
function atualizaControles(marcacaoE1){
    let dimensoes = marcacaoE1.attributes[5].value.split(':');
    let formato = document.getElementsByName('formato-da-marcacao');
    const oval = 'formato-oval';

    document.querySelector('#largura-da-marcacao').value = parseInt(dimensoes[1]);
    document.querySelector('#altura-da-marcacao').value = parseInt(dimensoes[2]);
    document.querySelector('#x-da-marcacao').value = parseInt(dimensoes[4]);
    document.querySelector('#y-da-marcacao').value = parseInt(dimensoes[3]);
    document.querySelector('#titulo-da-marcacao').value = marcacaoE1.attributes[1].value;
    document.querySelector('#conteudo-da-marcacao').value = marcacaoE1.attributes[2].value;
    document.querySelector('#cor-da-marcacao').value = marcacaoE1.attributes[3].value;
    
    if(oval === marcacaoE1.attributes[4].value){
        formato[1].checked = true;
    } else {
        formato[0].checked = true;
    }
}

function atualizaMarcacao(marcacaoEl){
    let elSelecionado = document.querySelector('.selecionada');
    const estilo = `width: ${document.querySelector('#largura-da-marcacao').value}px;
                   height: ${document.querySelector('#altura-da-marcacao').value}px;
                   top: ${document.querySelector('#y-da-marcacao').value}px;
                   left: ${document.querySelector('#x-da-marcacao').value}px;`
    let titulo = document.querySelector('#titulo-da-marcacao').value;
    let conteudo = document.querySelector('#conteudo-da-marcacao').value;
    let cor = document.querySelector('#cor-da-marcacao').value;
    // let formato = document.querySelector('#formato-da-marcacao').value;
    
    elSelecionado.attributes[1].value=titulo;
    elSelecionado.attributes[2].value=conteudo;
    elSelecionado.attributes[3].value=cor;
    // elSelecionado.attributes[4].value=formato;
    elSelecionado.attributes[5].value=estilo;
    console.log(document.querySelector('#titulo-da-marcacao'));
}

el.addEventListener('click', function(e){
    if(el.checked === true){
        addClass(marcacoes,el.value);
    } else {
        removeClass(marcacoes,el.value);
    }
    //console.log(marcacoes);
})
for(let i=0; i<marcacoes.length; i++){
    marcacoes[i].addEventListener('click', function(e){
        removeClass(marcacoes,'selecionada');
        marcacoes[i].classList.add('selecionada');
        atualizaControles(marcacoes[i]);
    });
}

let controles = document.querySelectorAll(`#largura-da-marcacao, #altura-da-marcacao,
                                           #x-da-marcacao, #y-da-marcacao,
                                           #titulo-da-marcacao, #conteudo-da-marcacao,
                                           #cor-da-marcacao`);
                                           
for(let i=0; i<controles.length; i++){
    controles[i].addEventListener('input', function(e){
        atualizaMarcacao(marcacoes[i])
    });
}

