var title = document.querySelector('h1');
title.addEventListener('click', updateName);

function updateName() {
    var name = prompt('nombre del jugador');
    title.textContent = 'jugador 1: ' + name;
}