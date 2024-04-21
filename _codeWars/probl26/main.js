// const sir = [4, 1, 3, 0, -3, 1];
// const sir2 = [4, 1, 3, 0, -3, 1, 8, 2];
// let rezultat = [];
// function displayMinLocal(a){
//     rezultat = [];
//     let len = a.length;
//     if (a[0] < a[1]) {
//         rezultat.push(a[0])}
// for (let i = 1; i < len; i++) {
//     if ((a[i] < a[i-1]) && (a[i] < a[i+1])) {
//         rezultat.push(a[i]);
//     }
// }

// if (a[len-1] < a[len-2]) {
//     rezultat.push(a[len-1])}
// return rezultat;
//   }

//   displayMinLocal(sir);
//   console.log(rezultat);
//   displayMinLocal(sir2);
//   console.log(rezultat);

const array1 = [4, 0, 7, -3, 3, 1];
let sum = 0;
let rezultat=[];

array1.forEach((element) => sum+=element);
console.log(sum);
let media = sum/array1.length;

array1.forEach((element) => {if (element < media) {rezultat.push(element)}});
console.log(rezultat);
