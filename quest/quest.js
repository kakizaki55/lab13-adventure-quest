

import { quests } from '../data/data.js';
import { findById, getPlayer, setPlayer } from '../utiles.js';

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
// console.log(currentQuest.choices);

const mainForm = document.getElementById('choice-form');
const player = getPlayer();

mainForm.addEventListener('submit', (event)=> {
    event.preventDefault();
    const choiceForm = new FormData(mainForm);
    const choiceId = choiceForm.get('choice');
    const currentChoice = findById(currentQuest.choices, choiceId);
    console.log(currentChoice);
    player.food += currentChoice.food;
    player.hp += currentChoice.hp;
    //need to set compleated quests
    setPlayer(player);
});
