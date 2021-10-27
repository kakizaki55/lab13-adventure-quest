console.log('endgame');
import { getPlayer, displayPlayerStatus } from '../utiles.js';

const playerStatusContainer = document.getElementById('player-status');
const resultsContainer = document.getElementById('results-container');

const player = getPlayer();
if (player.hp <= 0){
    resultsContainer.textContent = 'oh ohhh, looks like you ran out of HP. well the good news is you dont have to face the furry of the Queen for not bringing enough food back, but that bad news is....yeah you dead..';
} else {
    resultsContainer.textContent = 'oh congardualtion! you did it!, you brough some food back to the ant hill and the Queen is stocked! you still have to work everysingle day for no pay but at least you have some status among your peers!';
}

//use the player hp check and check quest chec to see which ending we get

//also maybe do a different ending for how much food you have.

displayPlayerStatus(playerStatusContainer);