const arr = [1,2,3,4,3,2,1];

function findEvenIndex(array)
{
  //Code goes here!
  for (let index = 0; index < array.length; index++) {
    let sumLeft = 0;
    let sumRight = 0;

    for (let j = 0; j < index; j++) {
        sumLeft += array[j];   
    }

    for (let k = (index + 1); k < array.length; k++) {
        sumRight += array[k];    
    }

    if (sumLeft === sumRight) {
        return (index) };
    
  }
  return(-1);
}

console.log(findEvenIndex(arr));