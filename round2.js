// Exercise 1
console.log('Hello World!');

// Exercise 2
const myName = "Tyler";
console.log(myName);

// Exercise 3
let calcRecArea = (length, width) =>  length * width;

console.log(calcRecArea(30, 20));

// Exercise 4
let checkEvenOdd = (num1) =>
    (num1 % 2 === 0) ?
    `${num1} is even.` :
    `${num1} is odd.`;

console.log(checkEvenOdd(4));
console.log(checkEvenOdd(7));

// Exercise 5
for (i = 1; i <= 10; i++) {
    console.log(i);
}

// Exercise 6
const userName = "Dude"; // prompt("Enter your name:");

console.log("Greetings, " + userName + "!");

// Exercise 7
const findFactorial = inputNum => {
    let factorial = 1;

    for (let i = 1; i <= inputNum; i++) {
        factorial *= i;
    }

    return factorial;
}
// console.log(findFactorial(prompt("Enter a number:")));
console.log(findFactorial(4));

// Exercise 8
let checkLeapYear = (year1) =>
    (year1 % 4 === 0) ?
    `${year1} is a leap year` :
    `${year1} is not a leap year`;

// console.log(checkLeapYear(prompt("Enter a year:")));
console.log(checkLeapYear(2023));
console.log(checkLeapYear(2024));

// Exercise 9
let sum = 0;
let addI = 1;

while (addI <= 100) {
    sum += addI;
    addI++;
}

console.log(sum);

// Exercise 10
const inputNum1 = 1; // Number(prompt("Enter a number:", 1));
const inputNum2 = 2; // Number(prompt("Enter another number:", 2));

console.log(inputNum1 + inputNum2);
console.log(inputNum1 - inputNum2);
console.log(inputNum1 * inputNum2);
console.log(inputNum1 / inputNum2);

// Exercise 11
const varString = "string";
const varNumber = 42;
const varBool = true;
const varNull = null;
let varUndefined = undefined;
const varObject = { objName: "name", objType: "object" };
const varArray = [0, 1, 2, 3];
let varNoDefaultValue;

// Exercise 12
let objList = [
    { food: "burger", price: "$3" },
    { food: "chicken sandwich", price: "$4" },
    { food: "fries", price: "$2" },
    { food: "shake", price: "$3" },
]

const list = document.getElementsByClassName("list")[0];

for (let i = 0; i < objList.length; i++) {
    let listItem = document.createElement("li");
    list.appendChild(listItem);
    listItem.innerHTML = objList[i].food;
}

// Exercise 13
function arraryOfMultiples(multNum, multLength) {
    let newArray = [];

    for (i = 1; i <= multLength; i++) {
        newArray.push(multNum * i);
    }
    
    return newArray;
}

console.log(arraryOfMultiples(7, 5));
console.log(arraryOfMultiples(12, 10));
console.log(arraryOfMultiples(17, 6));

// Exercise 14
function checkPosNegOrZed (numToCheck) {
    if (numToCheck < 0) {
        console.log(`${numToCheck} is a negative number.`);
    } else if (numToCheck === 0) {
        console.log(`${numToCheck} is 0.`);
    } else {
        console.log(`${numToCheck} is a positive number.`);
    }
}

checkPosNegOrZed(2);
checkPosNegOrZed(0);
checkPosNegOrZed(-2);

// Exercise 15
function calcMultTable(multTableNum) {
    let multTableArray = [];
    
    for (let i = 1; i <= 10; i++) {
        multTableArray.push(multTableNum * i);
    }

    return multTableArray;
}

console.log(calcMultTable(1));
console.log(calcMultTable(2));
console.log(calcMultTable(3));

// Exercise 16
function checkIfPrime(checkPrimeNum) {
    let isPrimeNumber = true;

    if (checkPrimeNum <= 1) {
        console.log("Primes are only positive numbers greater than 1.");
    } else if (checkPrimeNum > 1) {
        for (let i = 2; i < checkPrimeNum; i++) {
            if (checkPrimeNum % i === 0) {
                isPrimeNumber = false;
            }
        }

        if (isPrimeNumber) {
            console.log(`${checkPrimeNum} is a prime number.`);
        } else {
            console.log(`${checkPrimeNum} is not a prime number.`);
        }
    }
}

checkIfPrime(-2);
checkIfPrime(0);
checkIfPrime(1);
checkIfPrime(2);
checkIfPrime(3);
checkIfPrime(4);
checkIfPrime(5);
checkIfPrime(6);
checkIfPrime(7);
checkIfPrime(8);
checkIfPrime(9);