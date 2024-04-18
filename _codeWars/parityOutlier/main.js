const numbers = [66592690,127115062,174333028,-98736978,181420916,-73150926,164599720,-93859150,-190264383,-11293256];

function findOutlier(integers){
    const rest = integers.map(int => int % 2);
    let number = rest.filter( x => x!==0);
    return number.length > 1 ? integers[rest.indexOf(0)] : integers[rest.findIndex(elem => elem !==0)]

  }

  console.log(findOutlier(numbers));