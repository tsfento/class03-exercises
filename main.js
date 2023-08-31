// Exercise 1
console.log("Hello, World!");

// Exercise 2
const myName = "Tyler";
console.log(myName);

// Exercise 3
const recLength = 20;
const recWidth = 10;
const recArea = recLength * recWidth;

console.log(recArea);

// Exercise 4
const num1 = 0; //prompt("Enter a number:");

if (num1 % 2 === 0) {
    console.log("You entered an even number!");
} else if (num1 % 2 !== 0) {
    console.log("You entered an odd number!");
} else {
    console.log("Hmmm...");
}

// Exercise 5
for (i = 1; i <= 10; i++) {
    console.log(i);
}

// Exercise 6
const userName = "name"; //prompt("Enter your name:");

console.log(`Greetings, ${userName}!`);

// Exercise 7
function findFactorial(num2) {
    let answer = 1;
    if (num2 === 0 || num2 === 1) {
        return answer;
    } else if (num2 > 1) {
        for (i = num2; i >= 1; i--) {
            answer = answer * i;
        }
        return answer;
    } else {
        return "Number has to be positive."
    }
}

const num2 = 0; //prompt("Enter a number:");
answer = findFactorial(num2);
console.log("Factorial of " + num2 + " : " + answer);

// Exercise 8
function checkIfLeapYear(year) {
    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a leap year.")
    } else {
        console.log(year + " is not a leap year.")
    }
}

checkIfLeapYear(2020/*prompt("Enter a year:")*/);

// Exercise 9
let sum = 0;
let numStart = 1;

while (numStart <= 100) {
    sum += numStart;
    numStart++;
}

console.log(sum);

// Exercise 10
const inputNum1 = 1; //Number(prompt("Enter a number:"));
const inputNum2 = 1; //Number(prompt("Enter another number:"));

console.log(inputNum1 + inputNum2);
console.log(inputNum1 - inputNum2);
console.log(inputNum1 * inputNum2);
console.log(inputNum1 / inputNum2);

// Exercise 11
const varString = "string";
const varNumber = 42;
const varBool = true;
const varIsNull = null;
let varUndefined;

const myObj = { name: "My Object", type: "Object" };
const objInstance = myObj;

const myArr = [0, 1, 2, 3];
const arrayInstance = myArr[0];

let noDefault;

// Exercise 12
const list = document.querySelector(".list");

const itemList = [
    {name: "apple", price: "50¢"},
    {name: "banana", price: "50¢"},
    {name: "kiwi", price: "$1"},
    {name: "tomato", price: "50¢"}
];

for (i = 0; i < itemList.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = itemList[i].name;
    list.appendChild(listItem);
}

// Exercise 13
function arrayOfMultiples(numMult, length) {
    let multiples = [];
    for (i = 1; i <= length; i++) {
        multiples.push(numMult * i);
    }

    console.log(multiples);
}

arrayOfMultiples(1, 5);