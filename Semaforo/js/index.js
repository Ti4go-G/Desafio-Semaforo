let tempo;
let podeSolicitar = true;
let intervalo;
let estado = 'verde';

const luzes = {
    verde: document.querySelector('.verde'),
    vermelho: document.querySelector('.vermelho'),
    amarelo: document.querySelector('.amarelo')
}
const button = document.getElementById('botao-pedestre');
const timer = document.getElementById('timer');

function iniciaSemaforo() {
    tempo = 10;
    ativarLuz(estado);
    atualizarIntervalo();
}

function ativarLuz(cor) {
    for (let key in luzes) luzes[key].classList.remove('ativa');
    luzes[cor].classList.add('ativa');
}

function mudaEstado() {
    if (estado === 'verde') {
        estado = 'amarelo';
        tempo = 3;
        ativarLuz(estado);
    } else if (estado === 'amarelo') {
        estado = 'vermelho';
        tempo = 15;
        ativarLuz(estado);
    } else {
        estado = 'verde';
        tempo = 10;
        ativarLuz(estado);
    }
}

function atualizarIntervalo() {
    clearInterval(intervalo);
    intervalo = setInterval(() => {
        tempo--;
        if (tempo <= 0) mudaEstado();
        estado === 'amarelo' ? timer.textContent = '' : timer.textContent = tempo;

    }, 1000)
}

button.addEventListener('click', () => {
    if (!podeSolicitar) return

    podeSolicitar = false;
    button.disabled = true;


    setTimeout(() => {
        podeSolicitar = true;
        button.disabled = false;
    }, 60000);

    if (estado === 'verde') {
        setTimeout(() => {
            mudaEstado();

        }, 3000)
    }

})

iniciaSemaforo()