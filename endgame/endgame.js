
import { getPlayer, displayPlayerStatus } from '../utiles.js';

const playerStatusContainer = document.getElementById('player-status');
const resultsContainer = document.getElementById('results-container');

const resetButton = document.getElementById('reset-button');

const player = getPlayer();
if (player.hp <= 0){
    resultsContainer.textContent = 'oh ohhh, looks like you ran out of HP. well the good news is you dont have to face the furry of the Queen for not bringing enough food back, but that bad news is....yeah you dead..';
} else if (player.food <= 0){
    resultsContainer.textContent = 'oh snap, you lived, but didnt bring back any food or ate food you where not suppose to. you are shamed by the queen her self and exiled to live with the bees';
} 
else {
    resultsContainer.textContent = 'oh congardualtion! you did it!, you brough some food back to the ant hill and the Queen is stocked! you still have to work everysingle day for no pay but at least you have some status among your peers!';
}
displayPlayerStatus(playerStatusContainer);

resetButton.addEventListener('click', ()=>{
    window.location.replace('../index.html');

});