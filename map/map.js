import { quests } from '../data/data.js';
import { creatQuestLink, getPlayer } from '../utiles.js';

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
function displayPlayerStatus(header){

    const playerStatus = getPlayer();
    console.log(playerStatus);

    const name = document.createElement('span');
    name.textContent = playerStatus.name;
    const hp = document.createElement('span');
    hp.textContent = playerStatus.hp;
    const food = document.createElement('span');
    food.textContent = playerStatus.food;
    const img = document.createElement('img');
    img.src = `../assets/${playerStatus.species}.jpeg`;
    const div = document.createElement('div');
    div.append(name, hp, food, img,);
    header.append(div);
}

displayPlayerStatus(playerStatusContainer);