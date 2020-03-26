import './styles.css'
let state = {counter : 0};

function init() {

    const add = document.getElementById('add');
    const sub = document.getElementById('sub');
    const async = document.getElementById('async');
    const theme = document.getElementById('theme');

    add.addEventListener('click', () => {
        state.counter++;
        render();
    });

    sub.addEventListener('click', () => {
        state.counter--;
        render();
    });

    async.addEventListener('click', () => {
        setTimeout(() => {
            state.counter = 0;
            render();}, 2000);
    });

    theme.addEventListener('click', () => {
        document.body.classList.toggle("dark");
    });
}

function render() {
    const counter = document.getElementById('counter');
    counter.textContent = state.counter;
}

init();
render();