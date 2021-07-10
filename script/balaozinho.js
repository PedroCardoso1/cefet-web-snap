let elMarcacao = document.getElementsByClassName('marcacao');
let bodyEl = document.querySelector('body');
// let elMarcacao = document.querySelector('.marcacao');
let elBalao = document.querySelector('#balaozinho');
for(let i=0; i<elMarcacao.length; i++){
    elMarcacao[i].addEventListener('mouseover', function(e) {
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    h2.innerText = elMarcacao[i].attributes[1].value;
    p.innerText = elMarcacao[i].attributes[2].value;
    elBalao.appendChild(h2);
    elBalao.appendChild(p);
    elBalao.style.color = elMarcacao[i].attributes[3].value;
  });
  elMarcacao[i].addEventListener('mouseout', function(e) {
    elBalao.innerText='';
  });
}

// chamada quando o mouse se move dentro do body
function segueMouse(e) {
  // define .left e .top do booEl
  elBalao.style.left = `${e.pageX}px`;
  elBalao.style.top = `${e.pageY}px`;
  // não esquecer de colocar em pixels!
}

// evento de 'mousemove' no body
bodyEl.addEventListener('mousemove', segueMouse);