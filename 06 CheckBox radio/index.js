const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmitBtn = document.getElementById("mySubmitBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmitBtn.onclick = function() {
    if(myCheckbox.checked) {
        console.log("Checked box");
        subResult.textContent = `You are checked`;
    } else {
        console.log("not checked");
        subResult.textContent = `You are not checked`;
    }

    if(visaBtn.checked) {
        paymentResult.textContent = `You choose VISA card`;
    } else if(masterCardBtn.checked) {
        paymentResult.textContent = `You choose Mastercard`;
    } else if(payPalBtn.checked) {
        paymentResult.textContent = `You choose PayPal`;
    }
}