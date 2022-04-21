const userWord = prompt("Inserire una parola per veddere se è palindroma");

console.log(palindrome(userWord));

// Function
function palindrome(wordToCheck) {
    const halfWord =  Math.floor(wordToCheck.length/2);
    let flag = true;

    for(let i=0; i<halfWord && flag === true; i++){
        if (wordToCheck[i] !== wordToCheck[wordToCheck.length -1 - i]){
            flag =false;
        }
    }

    return flag;
}


