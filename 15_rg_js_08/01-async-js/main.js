console.log(`main.js is loaded`);

const btnElem = document.querySelector('button');
btnElem.addEventListener('click', () => console.log(`test`));

console.log(`before interval`);
setTimeout(function(){
    console.log(`executing the postponed command`);
},2000);
console.log(`after interval`);     

for (let index = 0; index < 5000; index++) {
    console.log(index);
    
}    