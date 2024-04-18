function duplicateEncode(word) {
    const lowerWord = word.toLowerCase();
    const charObject = {};
    let result = [];

    for (const char of lowerWord) {
        charObject[char] ? charObject[char]++ : charObject[char] = 1;
    }

    let split = lowerWord.split('');

    result = split.map((x) => 
        charObject[x] === 1 ? '(' : ')'
    )
console.log(result);
    // split.forEach(element => {
    //     result.push(charObject[element] === 1 ? '(' : ')');
    // });
    
    return result.join('');
}

console.log(duplicateEncode('test'));