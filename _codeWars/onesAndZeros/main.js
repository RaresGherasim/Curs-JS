console.log('start');
const array = [0, 1, 0, 1];
const binaryArrayToNumber = arr => {
    let str = arr.join('');
    return parseInt(str, 2)
        
  };

  console.log(binaryArrayToNumber(array));