import { generateCharactor } from '../utilles.js';

const test = QUnit.test;
const skip = QUnit.skip;

test('to see if generating a chareter creating an object', (expect) => {
    
    const playerAnt = { 
        completed: {},
        food: 0,
        hp: 120,
        name: "evan",
        species: "bullet",
    };
    const expected = playerAnt;
    const actual = generateCharactor('evan', 'bullet');
    console.log(actual);

    expect.deepEqual(actual, expected);
});
