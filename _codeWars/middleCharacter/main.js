let string = "string";

function getMiddle(s)
{
let number = 0;
const leng = s.length;
(leng % 2 === 0 ) ?  number = 2 : number = 1;

  return(s.substr(Math.ceil(leng/2)-1, number));
}

getMiddle(string);