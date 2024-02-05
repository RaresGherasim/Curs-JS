console.log("Iterations");

let varExit = true;
let userNumber = 1;
let maxNumber = Number.MIN_SAFE_INTEGER;

do {
  userNumber = prompt(`Introduceti un numar`);

  if (userNumber !== null) {
    userNumber = Number(userNumber);
    if (userNumber > maxNumber) {
      maxNumber = userNumber;
    }
  }

} while (userNumber !== null);
   
if ((maxNumber == Number.MIN_SAFE_INTEGER)) {
  alert("Nu s-a introdus niciun numar");
} else {
  alert(`Numarul maxim introdus este ${maxNumber} `);
}
