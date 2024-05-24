const min = 1;
const max = 6;
                       
const myButton = document.getElementById('myButton');
const myLabel = document.getElementById('myLabel');

myButton.onclick = function() {
    let randomNum = Math.floor(Math.random() * (max - min)) + min;
    myLabel.textContent = randomNum;
    console.log(myLabel.textContent);
};