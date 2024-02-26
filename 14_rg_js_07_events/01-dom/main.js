console.log("main.js is loaded...");

//let counter = -1;

function playerMouseOver(evt){
    console.log(evt);
    console.log(evt.target);
    const clickedElem = evt.target;
//    clickedElem.classList.toggle('playerOver');
}

function playerClick(evt){
    console.log(evt);
    console.log(evt.target);
    console.log(evt.target.className);
    const clickedElem = evt.target;
    let counter = Number(clickedElem.dataset.counter);
    clickedElem.classList.remove(`playerClicked-${counter % 3}`);
    counter++ ;
//    if (counter > 2) {
//       counter = 0; 
//    }
    console.log(clickedElem.dataset.name);
//    let randomNr = Math.floor(Math.random() * 3);
//    clickedElem.classList.add('playerClicked-' + randomNr);
    clickedElem.classList.add('playerClicked-' + (counter % 3) );
    clickedElem.dataset.counter = counter;
    const displaySpan = clickedElem.querySelector('span');
    displaySpan.textContent = counter;

}

function inputKeyDown(evt) {
    console.log(evt);
    console.log(evt.target);
}