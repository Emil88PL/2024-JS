// callback = a function that is passed as an argument to another function

//             Used to handle asynchronous operations:
//             1. Reading a file
//             2. Network request
//             3. Interacting with database

//             "Hey, when you are done call this next..."

// hello();
// goodBye();
 
// function hello() {
//     setTimeout(function () {
//         console.log("Hello!");
//     }, 3000);
// }

// function goodBye() {
//     console.log("Goodbye!");
// }


hello(goodBye);
// ot will wait for 3000 ms and then print "Hello!" after that "Goodbye!"
function hello(callback) {
    setTimeout(function () {
        console.log("Hello!");
        callback();
    }, 3000);
}

function goodBye() {
    console.log("Goodbye!");
}



// hello(wait);

// function hello(callback) {
//         console.log("Hello!");
//         callback();
// }

// function wait() {
//     console.log("Please wait!");
// }

// function leave() {
//     console.log("Leave!");
// }

// function goodBye() {
//     console.log("Goodbye!");
// }

sum(displayInConsole, 3, 4);
sum(displayOnPageDOM, 3, 4);

function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}

function displayInConsole(result) {
    console.log(result);
}


function displayOnPageDOM(result) {
    document.getElementById("h1").textContent = result
}