export const ferisWheel = {
    id: 'farris-wheel',
    title: 'At the foot of the farris wheel',
    image: ' ', 
    description:`you travel aimlessly to the foot of the farris wheel
    where you find what you think is a dead cricket`,
    choices: [{
        id:'grab-a-leg',
        description:'grab a leg in hopes to bring it back home to the queen', 
        result:`the cricket jumps up suprised as thier leg gets ripped off and 
        then proceeds to kick you with thier hind legs.
        You loose 40 health points and gain minimal amouts of food.`, 
        hp: -40, 
        food: 1, 
    }, {
        id:'approch with caution', 
        description:`approce with caution and see if you can get a better look`, 
        result:`you approch with the up most caution, but as you get about 3 inches from your potential haul
         2 crickets jump out from behind a old hotdog plate and take a huge bite out of your leg. you take 30 damage`, 
        hp:-30,
        food:0,
    }, {
        id:'turn-around', 
        description:`turn around and ignore a potential food source, 
        ou are worried that the queen will punsih you if anyone found out.`, 
        result: `you turn around and start walking the other way. 
        As you do you find a small grain of corn that you decided to bring back to the queen.
        Its not much but its honest work`, 
        hp:-30,
        food:0,
    }],
};