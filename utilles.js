export function generateCharactor(name, species){
    const playerObj = {};
    playerObj.name = name;
    playerObj.species = species;
    playerObj.hp = 120;
    playerObj.food = 0;
    playerObj.completed = {};
    return playerObj;
}