const min = 1;
const max = 100;

const number = Math.floor(Math.random() * (max - min) + 1) + min;
let isCorrect = false;
let attempts = 1;
console.log(`You are looking for ${number}`);

while(!isCorrect) {
    
    let guess = window.prompt(`Guess Number from ${min} to ${max} (q to quit)`)

    if(guess < min || guess > max) {
        window.alert(`Please choose a valid number between ${min} and ${max}`);
    } else if(guess == number) {
        isCorrect = true;
        window.alert(`Correct!!! Well done! You guested on ${attempts} time`);
    } else if(guess < number) {
        attempts++;
        window.alert(`Too small! Try again`);
    } else if(guess > number) {
        attempts++;
        window.alert(`Too big! Try again`);
    } 
    
    if(guess == "q") {
        break;
    }
}