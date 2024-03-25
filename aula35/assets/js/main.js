const form = document.querySelector('#form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);


    if (!peso) {
        setResultado('Peso Inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura Inválido', false);
        return;
    }
    const imc = getImc(peso, altura);
    const indiceImc = getIndiceImc(imc);

    const msg = `Seu IMC é ${imc} (${indiceImc}).`;
    setResultado(msg, true);
});

function getIndiceImc(imc) {
    const indice = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return indice[5];

    if (imc >= 34.9) return indice[4];

    if (imc >= 29.9) return indice[3];

    if (imc >= 24.9) return indice[2];

    if (imc >= 18.5) return indice[1];

    if (imc < 18.5) return indice[0];


}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);

}

function criaP() {
    const p = document.createElement('p');
    return p;

}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);

}

const h2 = document.querySelector('.container h2');
const data = new Date();

function getDiaSemana(diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
    }
}

h2.innerHTML = getDiaSemana(data.getDay());

