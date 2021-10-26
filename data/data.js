const farrisWheel = {
    id: 'farris-wheel',
    title: 'The farris wheel',
    image: '../assets/farris-wheel.jpeg', 
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
        you are worried that the queen will punsih you if anyone found out.`, 
        result: `you turn around and start walking the other way. 
        As you do you find a small grain of corn that you decided to bring back to the queen.
        Its not much but its honest work`, 
        hp:0,
        food:5,
    }],
};
const hotdogStand = {
    id: 'hot-dog-stand',
    title: 'Hot Dog Stand',
    image: '../assets/food-stand.jpeg', 
    description:`as you go looking for food to please your queen, a robust smell of the hotdog-stand whiffs by. 
    you travel towords the smell as you find your self head to head with a massive half-dollor size piece of a hot-dog`,
    choices: [{
        id:'call-for-backup',
        description:'Leave it for now and go back to the ant hill and call for backup', 
        result:`you go back seeking help from others but no of them take you suriously as they have never see
        a piece of dog so big. you finnaly bring a small group of them in hopes to prove them wrong, but by the time you get there a rat has seem to 
        run off with your catch, the other ants are pissed and beat the crap out of you`, 
        hp: -20, 
        food: 0, 
    }, {
        id:'eat as much as you can.', 
        description:`eat as much as you can`, 
        result:`you start to eat the piece of hot dawg, you gain 20 health points`, 
        hp:20,
        food:0,
    }, {
        id:'bring-it-back', 
        description:`Try and bring the haul back by your self`, 
        result: `you kick and push but nothing seems to budge, as you are working tirelessly, another fellow ant jumps in to help you out, and then another, and another.
        things start to move at a good pace but a gaint child with a maginifiying glass starts cooking the earth snf commrads around you. 
        you make it back with about 1/10 of the original size of meat and more then half your siblings gone`, 
        hp:-10,
        food:10,
    }],
};
const emptyCups = {
    id: '3-empty-cups',
    title: '3 Empty Cups',
    image: '../assets/another-spot.jpeg', 
    description:`you find 3 cups (soda-cup, coffee, and solo-cup ) all upside down, 
    there is a small gap where you can squuze into each one.`,
    choices: [{
        id:'cola-cup',
        description:'Crawl into the soda cup ', 
        result:`you go into the soda cup, but as soon as you do,
         some one picks up the cup and throws it away.you get nothing`, 
        hp:0, 
        food: 0, 
    }, {
        id:'coffee-cup.', 
        description:`Crawl into the coffee cup`, 
        result:`you get into the coffee cup and as you do you start to feel funny and speedy.
         you wake up the next day with pleanty of food, 
         
         but have no idea how you got it home`, 
        hp:0,
        food:30,
    }, {
        id:'solo-cup', 
        description:`Crawl into the solo cup`, 
        result: `you get into the solo cup and soon after start to feel funny,
         you find your self the next morrning in the food storage 
         of your queens castle, which seem like you broke in and ate her food.
          you also have a killer hang over`, 
        hp:-20,
        food:-20,
    }],
};


export const quests = [
    emptyCups,
    hotdogStand,
    farrisWheel
];
