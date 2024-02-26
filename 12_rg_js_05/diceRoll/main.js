console.log(`Let the game begin...`);


let numPlayers = prompt('Number of players ');
let numRounds = prompt('Number of rounds ');
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
    return sum;
    
}function oneRound() {
    for (let index = 0; index < numPlayers; index++) {
       let roll = diceRoll(numDice, numFaces);
      console.log(`Dices for player ${index + 1} are ${roll}`);
      console.log(`Sum of dices for player ${index + 1} is ${sumDice(roll)}`);
      results[index] += (sumDice(roll))
    }
}
for (let index = 0; index < numPlayers; index++) {
    results.push(0);   
}
for (let round = 0; round < numRounds; round++) {
    oneRound();
    console.log(`Results after round ${round + 1} are : ${results}`);
    console.log(`--------------------------------------------------------------`);
    
}
console.log(`Final results after ${numRounds} rounds are : ${results}`);