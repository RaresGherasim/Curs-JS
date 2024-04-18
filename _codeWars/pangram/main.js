let str = "Cwm fjord bank glyphs vext quiz";
  
function isPangram(string){
    //...
    let a = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return (a.every(lett => {
     let bool = (string.toLowerCase().includes(lett)); 
     if (bool)  return bool; 
  }
));
}
console.log(isPangram(str));