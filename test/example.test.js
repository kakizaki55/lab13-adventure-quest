import { generateCharactor, setPlayer, getPlayer } from '../utiles.js';

const test = QUnit.test;
test('to see if generating a chareter creating an object', (expect) => {
    const playerAnt = { 
        completed: {},
        food: 0,
        hp: 120,
        name: 'evan',
        species: 'bullet',
    };
    const expected = playerAnt;
    const actual = generateCharactor('evan', 'bullet');

    expect.deepEqual(actual, expected);
});
test('to see if the local saving in local storgae is working well', (expect) => {
    const playerAnt = { 
        completed: {},
        food: 0,
        hp: 120,
        name: 'evan',
        species: 'bullet',
    };
    const expected = playerAnt;
    setPlayer(playerAnt);
    const actual = getPlayer();
    expect.deepEqual(actual, expected);
});