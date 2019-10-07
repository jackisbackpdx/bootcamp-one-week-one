export const isCorrect = (userInput) => {
    if(userInput === 'yes' || userInput === 'y') {
        return true;
    } else if(userInput === 'no' || userInput === 'n') {
        return false;
    } else {
        return 'neither';
    }
};