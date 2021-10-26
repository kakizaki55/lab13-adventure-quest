console.log('your on the quest page!');

import { quests } from '../data/data.js';
import { findById } from '../utiles.js';

const questTitle = document.getElementById('quest-title');
const questImg = document.getElementById('quest-image');
const questDescription = document.getElementById('quest-description');
const questChoices = document.getElementById('quest-choices');



const params = new URLSearchParams(window.location.search);
const questId = params.get('id');

const currentQuest = findById(quests, questId);
console.log(currentQuest);
console.log(currentQuest.choices);

questTitle.textContent = currentQuest.title;
//need to replace img later 
questDescription.textContent = currentQuest.description;

for (let choice of currentQuest.choices){
    console.log(choice);
    const div = document.createElement('div');
    div.textContent = choice.description;
    const radioButton = document.createElement('input');
    radioButton.type = 'radio';
    radioButton.value = choice.id;
    radioButton.name = 'choice';

    div.append(radioButton);
    questChoices.append(div);
}

