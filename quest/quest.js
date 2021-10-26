// console.log('your on the quest page!');

import { quests } from '../data/data.js';
import { findById } from '../utiles.js';

const questTitle = document.getElementById('quest-title');
const questImg = document.getElementById('quest-image');
const questDescription = document.getElementById('quest-description');
const questChoices = document.getElementById('quest-choices');



const params = new URLSearchParams(window.location.search);
const questId = params.get('id');

const currentQuest = findById(quests, questId);

questTitle.textContent = currentQuest.title;
questImg.src = currentQuest.image;
questDescription.textContent = currentQuest.description;

for (let choice of currentQuest.choices){
    const div = document.createElement('div');
    div.textContent = choice.description;
    const radioButton = document.createElement('input');
    radioButton.type = 'radio';
    radioButton.value = choice.id;
    radioButton.name = 'choice';

    div.append(radioButton);
    questChoices.append(div);
}

