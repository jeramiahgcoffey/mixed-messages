const jeepFacts = [`Dogs are not man's best friend, it's actually Jeeps!`, 
`The seven slots on a Jeep grille represent the seven continents where Jeeps have traveled.`,
`On average, Wrangler owners customize their Jeeps more than any other vehicle on the planet.`,
`JEEP stands for Just Empty Every Pocket`,

];

const inspirationalMessages = ['Your face is beautiful!', 
'Never stop working towards your goals.', 
'Enjoy the little things in life.', 
`Work hard, play harder.`, 
`Don't lose yourself in the pursuit of your dream, for the dream was created by your true self.`, 
`Kindness is a gift we all possess, you never know when you could change somebody's day, week, or life.`,
`Be true to yourself, no matter what.`
];

const luckyNumbers = [7, 777, 2012, 420, 3, 2222, 512, 333, 5, 8, 13, 296, 99, 69, 151, 31, 1, -57832.9506];

// random number generator
const randNum = (arr) => {
    return Math.floor(Math.random() * arr.length);
}

console.log(`Inspirational Message of the Day: ${inspirationalMessages[randNum(inspirationalMessages)]}`);
console.log(`Your Lucky Number is: ${luckyNumbers[randNum(luckyNumbers)]}`);
console.log(`Here's a Random Jeep Fact: ${jeepFacts[randNum(jeepFacts)]}`);

