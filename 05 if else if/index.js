const myInput = document.getElementById("myInput");
const myButton = document.getElementById("myButton");
const myH3 = document.getElementById("myH3");


myButton.onclick = function () {
    let age = myInput.value;
    age = Number(age);

    if(age >= 100) {
        myH3.textContent = "You are too old to drive";
    } else if(age == 0) {
        myH3.textContent = "You just born! You can't drive";
    } else if(age >= 18) {
        myH3.textContent = "You are old enough to drive";
    } else if(age < 0) {
        myH3.textContent = "You age can't be less than zero";
    } else {
        myH3.textContent = "You mast be 18+ to drive";
    }
}