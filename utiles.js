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
