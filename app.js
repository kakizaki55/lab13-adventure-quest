import { generateCharactor, setPlayer } from './utiles.js';


const playerForm = document.getElementById('player-form');

playerForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    const data = new FormData(playerForm);
    const player = generateCharactor(data.get('name'), data.get('character-class'));
    setPlayer(player);
    window.location.replace('./map/index.html');
});