export function generateCharactor(name, species){
    const playerObj = {};
    playerObj.name = name;
    playerObj.species = species;
    playerObj.hp = 120;
    playerObj.food = 0;
    playerObj.completed = {};
    return playerObj;
}
export function getPlayer(){
    const stringyObj = localStorage.getItem('PLAYER');
    const player = JSON.parse(stringyObj);
    return player;
}
export function setPlayer(playerAnt){
    const stringyObj = JSON.stringify(playerAnt);
    localStorage.setItem('PLAYER', stringyObj);
}
export function creatQuestLink(questId) {

    const anchorTag = document.createElement('a');
    anchorTag.classList.add('quest');
    anchorTag.href = `../quest/?id=${questId.id}`;
    anchorTag.textContent = questId.title;
    anchorTag.classList.add(`class${questId.id}`);
    
    return anchorTag;
}
export function findById(array, id) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
    return null;
}
export function displayPlayerStatus(header){

    const playerStatus = getPlayer();

    const nameLable = document.createElement('lable');
    const name = document.createElement('span');
    name.textContent = playerStatus.name;
    nameLable.textContent = 'Name:';
    nameLable.append(name);

    const hpLable = document.createElement('lable');
    const hp = document.createElement('span');
    hp.textContent = playerStatus.hp;
    hpLable.textContent = 'HP:';
    hpLable.append(hp);

    const foodLable = document.createElement('lable');
    const food = document.createElement('span');
    food.textContent = playerStatus.food;
    foodLable.textContent = 'Food:';
    foodLable.append(food);

    const img = document.createElement('img');
    img.src = `../assets/${playerStatus.species}.jpeg`;

    const div = document.createElement('div');

    div.append(nameLable, hpLable, foodLable, img,);
    header.append(div);
}
const mapElement = document.getElementById('map-links');
export function createSpan(quest){
    const span = document.createElement('span');
    span.textContent = `${quest.title}`;
    mapElement.appendChild(span);
    span.classList.add(`class${quest.id}`);
    
}


