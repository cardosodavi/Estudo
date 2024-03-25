const paragrafos = document.querySelector('.paragrafos');
const pgr = paragrafos.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body);
const backgroundColorBody = estiloBody.backgroundColor;

for (let p of pgr){
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = '#FFFFFF';
};