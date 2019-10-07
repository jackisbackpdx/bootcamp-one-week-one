import { isCorrect } from './functions.js';

const myButton = document.getElementById('action-button');
let amountCorrect = 0;

myButton.onclick = () => {
    alert('welcome to my quiz');
    const myConfirmation = confirm('do you want to take my quiz?');
    if(myConfirmation === false) return;
    let firstName = prompt('What is your first name');
    let lastName = prompt('What is your last name?');
    let fullName = firstName + ' ' + lastName;

    const promptFunction = () => {
        const userAnswer = prompt('Did I recently start wanting to take up painting? yes/no (y/n)');
        const sanitizedUserAnswer = userAnswer.toLowerCase().trim();
        if(isCorrect(sanitizedUserAnswer) === true){
            alert('right-o');
            amountCorrect++;
        } else if(isCorrect(sanitizedUserAnswer) === false){
            alert('nah');
        } else if(isCorrect(sanitizedUserAnswer) === 'neither'){
            console.log('neither');
            alert('Please enter a valid response');
            promptFunction();
        }
    };
    
    promptFunction();

    const promptFunction2 = () => {
        const userAnswer2 = prompt('Do I love Javascript');
        const sanitizedUserAnswer2 = userAnswer2.toLowerCase().trim();
        if(isCorrect(sanitizedUserAnswer2) === true) {
            alert('you are correct');
            amountCorrect++;
        } else if(isCorrect(sanitizedUserAnswer2) === false){
            alert('yo dawg try again');
        } else if(isCorrect(sanitizedUserAnswer2) === 'neither') {
            alert('Please enter a valid response');
            promptFunction2();
        }
    };

    promptFunction2();

    const promptFunction3 = () => {
        const userAnswer3 = prompt('Have I been studying web development for 3 months?');
        const sanitizedUserAnswer3 = userAnswer3.toLowerCase().trim();
        if(isCorrect(sanitizedUserAnswer3) === true) {
            alert('you are wrong');
        } else if((isCorrect(sanitizedUserAnswer3, userAnswer3) === false)) {
            alert('you know it!');
            amountCorrect++;
        } else if(isCorrect(sanitizedUserAnswer3) === 'neither') {
            alert('Please enter a valid response');
            promptFunction3();
        }
    };

    promptFunction3();

    let newAmount = Math.floor((amountCorrect / 3) * 100);
    let displayScore = (`${fullName}, you got ${newAmount}% of the questions correct`);
    let displayResults = document.getElementById('display-results');
    displayResults.style.display = 'initial';
    displayResults.textContent = displayScore;
    newAmount -= newAmount;
};