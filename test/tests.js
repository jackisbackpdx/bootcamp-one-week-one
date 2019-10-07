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

test('should return true if the user says y', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userAnswer = 'y';
    //Act 
    // Call the function you're testing and set the result to a const
    const userAnswerIsCorrect = isCorrect(userAnswer);    //Assert
    assert.equal(userAnswerIsCorrect, true);
});

test('should return false if the user says n', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userAnswer = 'n';
    //Act 
    // Call the function you're testing and set the result to a const
    const userAnswerIsCorrect = isCorrect(userAnswer);    //Assert
    assert.equal(userAnswerIsCorrect, false);
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

test('should return neither if the user says anything else', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userAnswer = 'anything else';
    //Act 
    // Call the function you're testing and set the result to a const
    const userAnswerIsCorrect = isCorrect(userAnswer);    //Assert
    assert.equal(userAnswerIsCorrect, 'neither');
});


