import { isCorrect } from '../functions.js';
const test = QUnit.test;

test('should return true if the user says yes', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userAnswer = 'yes';
    //Act 
    // Call the function you're testing and set the result to a const
    const userAnswerIsCorrect = isCorrect(userAnswer);    //Assert
    assert.equal(userAnswerIsCorrect, true);
});

test('should return false if the user says no', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userAnswer = 'no';
    //Act 
    // Call the function you're testing and set the result to a const
    const userAnswerIsCorrect = isCorrect(userAnswer);    //Assert
    assert.equal(userAnswerIsCorrect, false);
});