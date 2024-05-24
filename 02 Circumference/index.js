const PI = 3.141592653589793;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function() {  
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    console.log(circumference);
    // document.getElementById("myH3").innerText = circumference;
    document.getElementById("myH3").textContent = circumference + "cm";
};