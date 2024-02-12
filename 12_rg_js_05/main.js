console.log('main.js is loaded')

debugger

let students = ['Rares', 'Adi', 'Florin']
students.push('Diana Z')
students.unshift('Patricia', 'Clara')
students[6] = 'Ilinca'
console.log(students)
students.sort()
let group = students.slice(2,2)
console.log(group);
console.log(students)
const last = students.pop()
const first = students.shift()
console.log(first, last)
console.log(students)
students.splice(1, 3)
console.log(students);

let group2 = [...students]
console.log(group2);

function promptForNumber() {
    let userNumber = prompt('Input a number')
    userNumber = Number(userNumber)
    console.log(userNumber, typeof(userNumber));
  
}
promptForNumber();
promptForNumber();
promptForNumber();
