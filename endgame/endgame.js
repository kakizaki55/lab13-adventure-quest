console.log('endgame');
import { getPlayer, displayPlayerStatus } from '../utiles.js';

const playerStatusContainer = document.getElementById('player-status');

const player = getPlayer();
if (player.hp <= 0 || checkQuests(player)){
    window.location.replace('../endgame/index.html');
}
//use the player hp check and check quest chec to see which ending we get

//also maybe do a different ending for how much food you have.
 
displayPlayerStatus(playerStatusContainer);