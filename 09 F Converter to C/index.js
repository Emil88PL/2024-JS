const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius"); 
const mySubmitBtn = document.getElementById("mySubmitBtn");
const result = document.getElementById("result");

let temp;

function convert() {
    
    if(toFahrenheit.checked) {
        console.log(`To F checked`);
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;

        result.textContent = temp.toFixed(1) + "°F"
    } else if(toCelsius.checked) {
        console.log(`To C checked`);
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C"
    } else {
        result.textContent = `Select a unit`;
        console.log(`Nothing checked`);
    }

}