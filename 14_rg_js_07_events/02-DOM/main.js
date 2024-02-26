console.log("main.js is loaded...");
const parentElem = document.querySelector('.players-container')
const playersList = [
    {
        name: "Gigi",
        color: "teal",
        avatar: "🛒"
    },
    {
        name: "Joe",
        color: "olive",
        avatar: "🫒"
    },
    {
        name: "Jane",
        color: "red",
        avatar: "🍟"
    }

]

function displayPlayer(player){
    const playerComponent = document.createElement('div');
    playerComponent.classList.add('player');
    playerComponent.style.color = player.color;
    playerComponent.style.borderColor = player.color;
    //playerComponent.dataset.counter = 0;
    playerComponent.setAttribute('data-counter', 0);
    const textNode = document.createTextNode(`${player.avatar} ${player.name}`)
    //playerComponent.textContent = 'test';
    // playerComponent.innerHTML = 'new player <span>5<span>;'
    parentElem.append(playerComponent);
       
    const scoreSpan = document.createElement('span');
    scoreSpan.textContent = '0';
    playerComponent.append(textNode);
    playerComponent.append(scoreSpan);

    //adds the click event listener
    playerComponent.addEventListener('click', playerClick);
}     

playersList.forEach(player => displayPlayer(player));

function playerClick(evt){
    const clickedElem = evt.target;
    let counter = Number(clickedElem.dataset.counter);
//    elemCount++;
    clickedElem.dataset.counter = ++counter;
    const displaySpan = clickedElem.querySelector('span');
    displaySpan.textContent = counter;

}