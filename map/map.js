import { quests } from '../data/data.js';
import { creatQuestLink } from '../utiles.js';

const mapElement = document.getElementById('map-links');


for (let quest of quests) {

    const questLink = creatQuestLink(quest);

    mapElement.append(questLink);

}
//NEED TO ADD PLACEMENT OF ANCHORTAG AND APPEND TO THE HTML ELEMENT.

