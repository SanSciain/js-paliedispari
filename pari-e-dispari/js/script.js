let userChoice;
let userNumber;

do {
    userChoice = prompt("Pari o Dipari");
    console.log(userChoice);
}while ((userChoice !== "dispari") && (userChoice !== "pari"))


do {
    userNumber = parseInt(prompt("Inserire un numero da 1 a 5"));
}while (userNumber < 1 || userNumber > 5 || isNaN(userNumber))



const cpuNumber = ranNumber(1, 5);
console.log(cpuNumber);

const sum = userNumber + cpuNumber;

let message;

if ((userChoice === "pari" && evenNumber(sum)) || ( userChoice === "dispari" && !evenNumber(sum)) ){
    message = "player won";
}   else{
    message = "computer won";
}

console.log(message);


// Functions
function ranNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function evenNumber(numberToCheck) {
    let flag = false;
    if (numberToCheck % 2 === 0){
        flag = true;
    }
    return flag;
}