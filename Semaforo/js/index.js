let time;
let canRequest = true;
let interval;
let state = 'green';

const lights = {
    green: document.querySelector('.green'),
    red: document.querySelector('.red'),
    yellow: document.querySelector('.yellow')
}
const button = document.getElementById('pedestrian-button');
const timer = document.getElementById('timer');

function startTrafficLight() {
    time = 10;
    activateLight(state);
    refreshInterval();
}

function activateLight(color) {
    for (let key in lights) lights[key].classList.remove('active');
    lights[color].classList.add('active');
}

function changeState() {
    if (state === 'green') {
        state = 'yellow';
        time = 3;
        activateLight(state);
    } else if (state === 'yellow') {
        state = 'red';
        time = 15;
        activateLight(state);
    } else {
        state = 'green';
        time = 10;
        activateLight(state);
    }
}

function refreshInterval() {
    clearInterval(interval);
    interval = setInterval(() => {
        time--;
        if (time <= 0) changeState();
        state === 'yellow' ? timer.textContent = '' : timer.textContent = time;

    }, 1000)
}

button.addEventListener('click', () => {
    if (!canRequest) return

    canRequest = false;
    button.disabled = true;


    setTimeout(() => {
        canRequest = true;
        button.disabled = false;
    }, 60000);

    if (state === 'green') {

        setTimeout(() => {
            refreshInterval();
            changeState();

        }, 3000)
    }

})

startTrafficLight()