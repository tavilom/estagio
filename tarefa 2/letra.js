const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countLetterA(inputString) {

    const lowerCaseString = inputString.toLowerCase();
    let count = 0;


    for (let i = 0; i < lowerCaseString.length; i++) {
        if (lowerCaseString[i] === 'a') {
            count++;
        }
    }

    if (count > 0) {
        console.log(`A letra 'a' aparece ${count} vezes na string.`);
    } else {
        console.log("A letra 'a' não aparece na string.");
    }
}

rl.question("Digite uma frase para verificar a quantidade de 'a': ", (inputString) => {
    countLetterA(inputString);
    rl.close();
});
