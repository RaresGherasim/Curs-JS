console.log(`Let the game begin...`);


let numPlayers = prompt('Number of players');
let numRounds = prompt('Number of rounds');
let numDice = prompt('Number of dices');
let numFaces = prompt('Number of faces on each dice');
let results = [];

function diceRoll(nrDices = 1, nrFaces = 6) {
    let diceArr = [];
    for (let index = 0; index < nrDices; index++) {
        diceArr.push(Math.floor(Math.random() * nrFaces + 1));
        
    }
    return diceArr;
}

function sumDice(diceValue) {
    let sum = 0;
    for (let index = 0; index < diceValue.length; index++) {
        sum = sum + diceValue[index]
        
    }
    console.log(diceValue);
    return sum;
    
}function OneRound(params) {
    let roundResult = []
    for (let index = 0; index < numPlayers; index++) {
       let roll = diceRoll(numDice, numFaces);
       roundResult.push(sumDice(roll))
        
    }
    return roundResult;
}

for (let index = 0; index < numRounds; index++) {
    results.push(OneRound);
    
}