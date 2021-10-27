import { quests } from '../data/data.js';
import { creatQuestLink, getPlayer, displayPlayerStatus, createSpan } from '../utiles.js';

const mapElement = document.getElementById('map-links');
const playerStatusContainer = document.getElementById('player-status');

const player = getPlayer();
if (player.hp <= 0 || checkQuests(player)){
    window.location.replace('../endgame/index.html');
}
for (let quest of quests) {
    if (player.completed[quest.id]){
        createSpan(quest);
    } else {
        const questLink = creatQuestLink(quest);
        mapElement.append(questLink);
    }
}

function checkQuests(player){
    for (let quest of quests){
        if (!player.completed[quest.id]){
            return false;
        }
    }
    return true;
}

displayPlayerStatus(playerStatusContainer);