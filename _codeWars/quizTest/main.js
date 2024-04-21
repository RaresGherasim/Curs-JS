// function first(){
//     window.a = 3;
// }
// first();
// function second() {
//     alert(a);
// }

// function asyncFunc(){
//     new Promise ((resolve, reject) => {
//         setTimeout(() => resolve('DONE'), 2000);
//     });
// }
// async function main(){
//     const x = await asyncFunc();
//     console.log('Result:' + x);
// }
// main();

// const functionB = b =>{
//     console.log(b);
// };

// functionB();

// const myObject = {
//     myMethod: () => {
//         console.log(this);
//     }
// };
// myObject.myMethod();

// (function (x) {return (function(y) {console.log(x);})(2)})(1);

for (var i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', function(){ console.log(i); });
    document.body.appendChild(btn);
   }

