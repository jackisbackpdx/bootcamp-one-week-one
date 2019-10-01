import { isCorrect } from './functions.js';

const myButton = document.getElementById('action-button');
let amountCorrect = 0;

myButton.onclick = () => {
    alert('welcome to my quiz');
    const myConfirmation = confirm('do you want to take my quiz?');

    let userName = prompt('What is your name?');

    const userAnswer = prompt('is my cat\'s name Vincent? (yes/no)');
    const sanitizedUserAnswer = userAnswer.toLowerCase().trim();
    if(sanitizedUserAnswer === 'yes') {
        alert('right-o');
        amountCorrect++;
    } else {
        alert('nah');
    }
    const userAnswer2 = prompt('Do I love Javascript');
    const sanitizedUserAnswer2 = userAnswer2.toLowerCase().trim();
    if(sanitizedUserAnswer2 === 'yes') {
        alert('you are correct');
        amountCorrect++;
    } else {
        alert('yo dawg try again');
    }
    const userAnswer3 = prompt('Is my favorite food Italian Food?');
    const sanitizedUserAnswer3 = userAnswer3.toLowerCase().trim();
    if(sanitizedUserAnswer3 === 'yes') {
        alert('you are wrong');
    } else {
        alert('you know it!');
        amountCorrect++;
    }
    console.log(amountCorrect);
    let newAmount = Math.floor((amountCorrect / 3) * 100);
    let displayScore = (`${userName}, you got ${newAmount}% of the questions correct`);
    let displayResults = document.getElementById('display-results');
    displayResults.style.display = 'initial';
    displayResults.textContent = displayScore;
    isCorrect(sanitizedUserAnswer);
};