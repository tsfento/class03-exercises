let previousDiv = null;

// Exercise 1
function ex1() {
    if (previousDiv != null) {
        previousDiv.setAttribute('style', 'display: none');
    }
    const exercise1 = document.querySelector('div.exercise1');
    const h1 = document.querySelector('h1.exercise1');
    h1.innerText = 'Hello World!';
    exercise1.setAttribute('style', 'display: block');
    previousDiv = exercise1;
}

// Exercise 2
function ex2() {
    if (previousDiv != null) {
        previousDiv.setAttribute('style', 'display: none');
    }
    const exercise2 = document.querySelector('div.exercise2');
    exercise2.setAttribute('style', 'display: block');
    previousDiv = exercise2;
}

function ex2Button() {
    
    const inputName = document.getElementById('exercise2Name');
    const modalText = document.querySelector('div.ex2-modal-body');
    const modal = new bootstrap.Modal(document.getElementById('exercise2Modal'));
    modalText.innerHTML = `<h3>Hello, ${inputName.value}!</h3>`;
    modal.show();
    
}

// Exercise 3
