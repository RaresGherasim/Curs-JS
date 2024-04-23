const rectangles = [
  { id: 1, name: "Floor 1", sideA: 10, sideB: 5, unit: "m" },
  { id: 2, name: "Floor 2", sideA: 6, sideB: 8, unit: "m" },
  { id: 3, name: "Garden", sideA: 15, sideB: 23, unit: "m" },
  { id: 1, name: "Service Closet", sideA: 165, sideB: 145, unit: "cm" },
];

function calculatePerimeters(input) {
  let perim = [];
  input.forEach((rect) => {
    perim.push(2 * (rect.sideA + rect.sideB) + rect.unit);
  });
  return perim;
}

function countVowels(input) {
  let vowels = "aeiou";
  let string = input.split("");
  let number = 0;
  string.forEach((letter) => {
    if (vowels.includes(letter.toLowerCase())) ++number;
  });
  return number;
}

function search(haystack, needle){
    //...
    
     let bool = haystack.toLowerCase().includes(needle.toLowerCase()); 
    return bool; 
  }

  function sumOfRange (num1, num2) {
    let sum = 0;
    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            sum+=i;
        }
    } else {
        for (let i = num2; i <= num1; i++) {
            sum+=i;
    }
  }
  return sum;
}

let numbers = [-3003,2,-5,1,-70000.5];

function minimumOfArr(inputArr) {
    let min = inputArr[0];
    inputArr.forEach(elem => {
        if (elem < min) min = elem; 
    });
    return min;
}