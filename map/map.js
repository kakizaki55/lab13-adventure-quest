import { quests } from '../data/data.js';
import { creatQuestLink, getPlayer } from '../utiles.js';

const mapElement = document.getElementById('map-links');
const player = getPlayer();


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


