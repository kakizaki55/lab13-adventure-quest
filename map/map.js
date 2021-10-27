import { quests } from '../data/data.js';
import { creatQuestLink, getPlayer, displayPlayerStatus } from '../utiles.js';

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
function createSpan(quest){
    const span = document.createElement('span');
    span.textContent = `${quest.title}`;
    mapElement.appendChild(span);
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