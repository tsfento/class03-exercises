let previousDiv = null;
let exerciseDiv = document.querySelector('div.exercise-div');

function exDisplay(num) {
    if (previousDiv != null) {
        previousDiv.setAttribute('style', 'display: none');
    }
    const exerciseNum = document.querySelector(`div.${num}`);
    exerciseDiv.setAttribute('style', 'display: block');
    exerciseNum.setAttribute('style', 'display: block');
    previousDiv = exerciseNum;
}

// Exercise 1
function ex1() {
    const h1 = document.querySelector('h1.exercise1');
    h1.innerText = 'Hello World!';
}

// Exercise 2
function ex2Button() {
    
    const inputName = document.getElementById('exercise2Name');
    const modalText = document.querySelector('div.ex2-modal-body');
    const modal = new bootstrap.Modal(document.getElementById('exercise2Modal'));
    modalText.innerHTML = `<h3>${inputName.value}</h3>`;
    modal.show();
    
}

// Exercise 3
function ex3Button() {
    let recLength = document.getElementById('exercise3Length').value;
    let recWidth = document.getElementById('exercise3Width').value;
    let recArea = document.getElementById('exercise3Area');

    recArea.value = recLength * recWidth;
}

// Exercise 4
function ex4Button() {
    let numToCheck4 = document.getElementById('exercise4Number').value;
    let ex4Result = document.getElementById('exercise4Result');

    if(numToCheck4 === '') {
        ex4Result.innerText = `Please enter a number.`;
    } else if(numToCheck4 % 2 === 0) {
        ex4Result.innerText = `The number ${numToCheck4} is even.`;
    } else {
        ex4Result.innerText = `The number ${numToCheck4} is odd.`;
    }
}

// Exercise 5
function ex5Button() {
    let ex5Result = document.getElementById('exercise5Result');

    ex5Result.textContent = '';

    for (let i = 1; i <= 10; i++) {
        ex5Result.textContent += `${i} `;
    }

    ex5Result.textContent.trimEnd();
}

// Exercise 6
function ex6Button() {
    
    const inputName = document.getElementById('exercise6Name');
    const modalText = document.querySelector('div.ex6-modal-body');
    const modal = new bootstrap.Modal(document.getElementById('exercise6Modal'));
    modalText.innerHTML = `<h3>Greetings, ${inputName.value}!</h3>`;
    modal.show();
    
}

// Exercise 7
function ex7Button() {
    let numToCheck7 = document.getElementById('exercise7Number').value;
    let ex7Result = document.getElementById('exercise7Result');

    if(numToCheck7 === '') {
        ex7Result.innerText = `Please enter a number.`;
    } else {
        let factorial = 1;

        for(let i = 1; i <= numToCheck7; i++) {
            factorial *= i;
        }

        ex7Result.innerText = `The factorial of ${numToCheck7} is ${factorial.toExponential(6)}.`;
    }
}

// Exercise 8
function ex8Button() {
    let numToCheck8 = document.getElementById('exercise8Number').value;
    let ex8Result = document.getElementById('exercise8Result');

    if(numToCheck8 === '') {
        ex8Result.innerText = `Please enter a year.`;
    } else if(numToCheck8 % 4 === 0) {
        ex8Result.innerText = `${numToCheck8} is a leap year.`;
    } else {
        ex8Result.innerText = `${numToCheck8} is not a leap year.`;
    }
}

// Exercise 9
function ex9Button() {
    let ex9Result = document.getElementById('exercise9Result');
    let sum = 0;
    let addI = 1;

    while(addI <= 100) {
        sum += addI;
        addI++;
    }

    ex9Result.textContent = sum;
}

// Exercise 10
function ex10Button() {
    let num110 = document.getElementById('exercise10Num1').value;
    let num210 = document.getElementById('exercise10Num2').value;
    let addResult = document.getElementById('exercise10AddResult');
    let subResult = document.getElementById('exercise10SubResult');
    let multResult = document.getElementById('exercise10MultResult');
    let divResult = document.getElementById('exercise10DivResult');

    addResult.textContent = `${num110} + ${num210} = ${+num110 + +num210}`;
    subResult.textContent = `${num110} - ${num210} = ${+num110 - +num210}`;
    multResult.textContent = `${num110} x ${num210} = ${+num110 * +num210}`;
    divResult.textContent = `${num110} % ${num210} = ${+num110 / +num210}`;
}

// Exercise 12
function ex12() {
    let objList = [
        { food: "burger", price: "$3" },
        { food: "chicken sandwich", price: "$4" },
        { food: "fries", price: "$2" },
        { food: "shake", price: "$3" },
    ]

    const list1 = document.querySelector('ul.list1');
    const list2 = document.querySelector('ul.list2');

    while(list1.firstChild || list2.firstChild) {
        list1.removeChild(list1.firstChild);
        list2.removeChild(list2.firstChild);
    }

    for (let i = 0; i < objList.length; i++) {
        let listItem1 = document.createElement('li');
        let listItem2 = document.createElement('li');
        list1.appendChild(listItem1);
        list2.appendChild(listItem2);
        listItem1.innerText = objList[i].food;
        listItem2.innerText = objList[i].price;
    }
}

// Exercise 13
function ex13Button() {
    let num13 = document.getElementById('exercise13Num1').value;
    let length13 = document.getElementById('exercise13Num2').value;
    let ex13Result = document.getElementById('exercise13Result');

    let multArray13 = [];

    for (let i = 1; i <= length13; i++) {
        multArray13.push(' ' + num13 * i);
    }

    ex13Result.textContent = '[' + multArray13.toString().trimStart() + ']';
}

// Exercise 14
function ex14Button() {
    let numToCheck14 = document.getElementById('exercise14Number').value;
    let ex14Result = document.getElementById('exercise14Result');

    if(numToCheck14 === '') {
        ex14Result.innerText = `Please enter a number.`;
    } else if(numToCheck14 == 0) {
        ex14Result.innerText = `${numToCheck14} is 0.`;
    } else if(numToCheck14 < 0) {
        ex14Result.innerText = `${numToCheck14} is a negative number.`;
    } else if(numToCheck14 > 0) {
        ex14Result.innerText = `${numToCheck14} is a positive number.`;
    }
}

// Exercise 15
function ex15Button() {
    const multTableNum = document.getElementById('exercise15Num').value;
    const multList1 = document.querySelector('ul.tableList1');
    const multList2 = document.querySelector('ul.tableList2');

    while(multList1.firstChild || multList2.firstChild) {
        multList1.removeChild(multList1.firstChild);
        multList2.removeChild(multList2.firstChild);
    }
    
    for (let i = 1; i <= 10; i++) {
        let multItem = document.createElement('li');
        let mult = multTableNum * i;

        if (i <= 5) {
            multList1.appendChild(multItem);
            multItem.innerText = `${multTableNum} x ${i} = ${mult}`;
        } else if (i > 5) {
            multList2.appendChild(multItem);
            multItem.innerText = `${multTableNum} x ${i} = ${mult}`;
        }
    }
}

// Exercise 16
function ex16Button() {
    let numToCheck16 = document.getElementById('exercise16Number').value;
    let ex16Result = document.getElementById('exercise16Result');
    let isPrime = true;

    if(numToCheck16 === '') {
        ex16Result.innerText = `Please enter a number.`;
    } else if(numToCheck16 <= 1) {
        ex16Result.innerText = `Primes are only positive numbers greater than 1.`;
    } else if(numToCheck16 > 1) {
        for (let i = 2; i < numToCheck16; i++) {
            if(numToCheck16 % i === 0) {
                isPrime = false;
            }
        }
        if(isPrime) {
            ex16Result.innerText = `${numToCheck16} is a prime number.`;
        } else {
            ex16Result.innerText = `${numToCheck16} is not a prime number.`;
        }
    }
}