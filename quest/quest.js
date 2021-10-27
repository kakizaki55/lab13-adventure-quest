

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
const resultsContainer = document.createElement('div');
const returnButton = document.createElement('button');
returnButton.onclick = () =>{
    window.location.replace('../map/index.html');
};
returnButton.textContent = 'return to map';

const main = document.querySelector('main');
const mainForm = document.getElementById('choice-form');
const selectButton = document.getElementById('select-option');
const player = getPlayer();
//using the form to update local storage
mainForm.addEventListener('submit', (event)=> {
    event.preventDefault();
    const choiceForm = new FormData(mainForm);
    const choiceId = choiceForm.get('choice');
    const currentChoice = findById(currentQuest.choices, choiceId);
    
    player.food += currentChoice.food;
    player.hp += currentChoice.hp;
    player.completed[currentQuest.id] = true;

    //need to set compleated quests
    setPlayer(player);

    resultsContainer.textContent = currentChoice.result;
    questChoices.classList.add('hidden');
    questDescription.classList.add('hidden');
    selectButton.classList.add('hidden');

    main.append(resultsContainer, returnButton);
    
});
