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
    anchorTag.href = `../quest/?id=${questId.id}`;
    anchorTag.textContent = questId.title;

    return anchorTag;
}