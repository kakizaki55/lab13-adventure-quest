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
