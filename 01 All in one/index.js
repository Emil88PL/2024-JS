// console.log(`hello world!`);  // backtick template literals helpful with inserting variables 
// console.log(`2 + 2 + 2`); 

// window.alert(`this is alert message`);

// document.getElementById("myH1").textContent = "This is my Header";
// document.getElementById("myP").textContent = "And that is my message in paragraph";



// Variables - A container that stores a value. Behaves as if it were the value it contains.
// 1. Declaration let x;
// 2. Assignment x = 100;

// let  x = 42;
// console.log(x);

// let price = 10.99;
// let myName = "Emil";
// let age = 25;
// let isAdult = true;
// console.log(`My age was ` + age);
// if(age >= 18) {
//     console.log(`Your are ${age} years old`);
//     console.log(`Hi ${myName}`);
//     console.log(`he is adult: ${isAdult}`);

//     console.log(`The price is £${price}`);
// } 

// console.log(typeof age);
// console.log(typeof price);
// console.log(typeof myName);
// console.log(typeof isAdult);


// let fullName = "McLOVIN";
// let myAge = 25;
// let isStudent = true;

// document.getElementById("p1").textContent = `Your last name is: ${fullName}`;
// document.getElementById("p2").textContent = `Your age is: ${myAge} years old`;
// document.getElementById("p3").textContent = `Are you a student ${isStudent}`;



// Arithmetic operations = operands (values, variables, etc)
//                         operators (+ - * /)

// let students = 30;
// // augmented assignment operators:
// students++;
// students--;
// students *= 2;
// students /= 2;
// students **= 3;
// students %= 2; // put modulus to separate variable preferable 


// console.log(students);

/**
 * Operator precedence
 * 1. parentheses (brackets)
 * 2. exponents
 * 3. multiplication & division & modulo
 * 4. addition & subtraction
 */

// let result = 12 % 5 + 8 / 2;

// console.log(result);

// document.getElementById("p1").textContent = "22/05/24 17:34";

// How to accept user input
// 1
// let userName = window.prompt("Whats username");
// console.log(userName);

// 2
// let userName;
// document.getElementById("mySubmit").onclick = function() { // onclick 
//     userName = document.getElementById("myText").value;

//     //document.getElementById("myH1").innerHTML = userName;
//     document.getElementById("myH1").textContent = `Hello ${userName}`;
// };



// type conversions = change datatype of a value to another (string, numbers, boolean)

// let age = window.prompt("How old are you?");
// // age = Number(age); // that will force to be an integer
// // That JS!

// // age++; // this will add actually one to the variable 
// // age += 1; // this will concatenate without Number(age) casting
// console.log(age, typeof age);

// // That JS! 
// let x = ""; // casting empty string is 0;
// let y = "";
// let z = ""; // any value will return true;

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);


// const = a variable that can't be changed, all of the letters uppercase
// capitalizing constant is usually done with primitive data types
// reference data types (String) don't normally follow this convention
// const PI = 3.141592653589793;
// let radius;
// let circumference;

// // radius = window.prompt(`Enter the radius of the circle`);


// document.getElementById("mySubmit").onclick = function() {  
//     radius = document.getElementById("myText").value;
//     radius = Number(radius);
//     circumference = 2 * PI * radius;
//     console.log(circumference);
//     // document.getElementById("myH3").innerText = circumference;
//     document.getElementById("myH3").textContent = circumference + "cm";
// };


// Counter 

// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");

// let count = 0;

// increaseBtn.onclick = function() {
//     count++;
//     countLabel.textContent = count;
//     console.log(count);
// };

// decreaseBtn.onclick = function() {
//     count--;
//     countLabel.textContent = count;
//     console.log(count);
// }

// resetBtn.onclick = function() {
//     count = 0;
//     countLabel.textContent = count;
// }


// Math = build in object that provides a collection of properties and methods

// console.log(Math.PI);
// console.log(Math.E); // Euler number 

// let x = 26;
// let y = 573;
// let z= 1236;

// // z = Math.round(x);
// // console.log(z); 

// // Math.floor round down
// // Math.ceil round up
// // Math.truncate cut after decimal point
// // Math.log
// // Math.sin
// // Math.cos
// // Math.tan
// // Math.abs // just positive number
// // z = Math.pow(y, 2); // 
// // Math.sign
// let max = Math.max(x, y, z); //
// let min = Math.min(x, y, z); //
// console.log(max, min);

// Random number generator
//That JS!   

// const min = 1;
// const max = 6;

// const myButton = document.getElementById('myButton');
// const myLabel = document.getElementById('myLabel');

// myButton.onclick = function() {
//     let randomNum = Math.floor(Math.random() * (max - min)) + min;
//     myLabel.textContent = randomNum;
//     console.log(myLabel.textContent);
// };

// if statements 

// let age = 31;
// if(age >= 18) {
//     console.log("Your are old enough");
// } else {
//     console.log("Your are not old enough!!!");
// }

// let isStudent = true;
// if(isStudent) {
//     console.log("Your are a student");
// } else {
//     console.log("Your are not a student");
// }


// let age = 18;
// let hasLicense = true;
// if(age >= 18) {
//     console.log("You are old enough to drive")
//     if(hasLicense) {
//         console.log("and you have a license");
//     } else {
//         console.log("and you don't have a license");
//     }
// } else {
//     console.log("You are not old enough");
// }



// const myInput = document.getElementById("myInput");
// const myButton = document.getElementById("myButton");
// const myH3 = document.getElementById("myH3");


// myButton.onclick = function () {
//     let age = myInput.value;
//     age = Number(age);

//     if(age >= 100) {
//         myH3.textContent = "You are too old to drive";
//     } else if(age == 0) {
//         myH3.textContent = "You just born! You can't drive";
//     } else if(age >= 18) {
//         myH3.textContent = "You are old enough to drive";
//     } else if(age < 0) {
//         myH3.textContent = "You age can't be less than zero";
//     } else {
//         myH3.textContent = "You mast be 18+ to drive";
//     }
// }


// .checked = property that determines the checked state of an HTML checkbox 
// or radio button element

// const myCheckbox = document.getElementById("myCheckbox");
// const visaBtn = document.getElementById("visaBtn");
// const masterCardBtn = document.getElementById("masterCardBtn");
// const payPalBtn = document.getElementById("payPalBtn");
// const mySubmitBtn = document.getElementById("mySubmitBtn");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmitBtn.onclick = function() {
//     if(myCheckbox.checked) {
//         console.log("Checked box");
//         subResult.textContent = `You are checked`;
//     } else {
//         console.log("not checked");
//         subResult.textContent = `You are not checked`;
//     }

//     if(visaBtn.checked) {
//         paymentResult.textContent = `You choose VISA card`;
//     } else if(masterCardBtn.checked) {
//         paymentResult.textContent = `You choose Mastercard`;
//     } else if(payPalBtn.checked) {
//         paymentResult.textContent = `You choose PayPal`;
//     }
// }




// // Ternary operator = shortcut to if and else statements
// // condition ? ifTrue : ifFalse;

// let age = 17;
// let message = age >= 18 ? "Your are adult" : "Your are minor";
// console.log(message);




// switch = replacement for if else statements

// let day = "Wednesday";

// switch(day) {
//     case "Monday": console.log("It is a Monday");
//     break;
//     case "Tuesday": console.log("It is a Tuesday");
//     break;
//     case "Wednesday": console.log("It is a Wednesday");
//     break;
//     case "Thursday": console.log("It is a Thursday");
//     break;
//     case "Friday": console.log("It is a Friday");
//     break;
//     case "Saturday": console.log("It is a Saturday");
//     break;
//     case "Sunday": console.log("It is a Sunday");
//     break;
//     default: console.log(`There is no ${day} day available... for now `);
// }

// let testScore = 70;
// let letterGrade;

// switch (true) {
//     case testScore >= 90: console.log(`${testScore} is ${letterGrade = "A"}`);
//     break;
//     case testScore >= 80: console.log(`${testScore} is ${letterGrade = "B"}`);
//     break;
//     case testScore >= 75: console.log(`${testScore} is ${letterGrade = "C"}`);
//     break;
//     case testScore >= 70: console.log(`${testScore} is ${letterGrade = "D"}`);
//     break;
//     default: console.log(`${testScore} is ${letterGrade = "F"}`);
// }



// String methods = allow you to manipulate and work with text strings

// let userName = "    SomeRandomUser ";
// let user2Name = "someRandomUserWithOtherName";
// console.log(userName.length);
// console.log(userName.charAt(1).toLocaleUpperCase());
// console.log(userName.toLocaleUpperCase());

// for(let i = 0; i < userName.length; i++) {
//     console.log(userName[i]);
// }
// console.log("letter \'s\' have index of: " + userName.indexOf("s"));
// let upperCaseUer = user2Name.toUpperCase();

// console.log(upperCaseUer.repeat(3));

// // userName.startsWith
// // userName.endsWith 
// console.log(userName.includes("U"));

// let phoneNumber = "555-1234";
// phoneNumber = phoneNumber.replaceAll("-", " ");
// console.log(phoneNumber);

// phoneNumber = phoneNumber.padStart(15, "0");
// console.log(phoneNumber);
// phoneNumber = phoneNumber.padEnd(25, "0");
// console.log(phoneNumber);





// String slicing = creating a substring from a portion of a string

/**           inclusive, exclusive
 * string.slice(start, end)
 */

// const fullName = "First Last";
// let res = fullName.slice(0, 5);
// let res1 = fullName.slice(6);
// console.log(`You hardcoded first name is ${res} and you last name is ${res1}`);

// let res2 = fullName.split(" ");
// console.log(res2);
// console.log(res2[0]);
// console.log(res2[1]);

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// console.log(firstName);

// let lastName = fullName.slice(fullName.indexOf(" "));
// // let lastName = fullName.slice(fullName.indexOf(" ") + 1);
// console.log(lastName.trim());


// const email = "emil.kotlowski@soprasteria.com";


// let fullName = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@") + 1);

// let firstAndLast = fullName.replace(".", " ");
// console.log(firstAndLast);

// let firstName = firstAndLast.slice(0, firstAndLast.indexOf(" "));
// console.log(firstName);
// let lastName = firstAndLast.slice(firstAndLast.indexOf(" ") + 1);
// console.log(lastName);

// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }


// let string = capitalizeFirstLetter(firstName);
// let string2 = capitalizeFirstLetter(lastName);
// console.log(string, string2);





// // Method chaining = Calling one method after another in one continuous line of code

// let userName = window.prompt("Enter username: ")

// // NO method chaining --------------------------------


// // userName = userName.trim();

// // let letters = userName.charAt(0);
// // letters = letters.toUpperCase();

// // let extraChars = userName.slice(1);
// // extraChars = extraChars.toLowerCase();
// // userName = letters + extraChars;

// // console.log(userName);


// // method chaining -----------------------------------

// userName = userName.trim().charAt(0).toUpperCase() 
//          + userName.trim().slice(1).toLocaleLowerCase();
// console.log(userName);


// logical operators 
/**
 * AND = &&
 * OR =  ||
 * NOT = !
 */

// const temp = 13;
// if (temp >= 12 && temp <= 21) {
//     console.log("The weather is good");
// } else {
//     console.log("The weather is bad");
// }

// const isSunny = true;

// if(isSunny) {
//     console.log("The weather is sunny");
// }

// console.log(!isSunny ? "yeas" : "nope!");




// = assignment operator
// == comparison operator (compares values)
// === strict equality operator (compares values && datatype)
// != inequality operator 
// !== strict inequality operator


// // That JS!
// const PI = 3.14;
// let question = PI == "3.14" ? "Yes that equals" : "No that is not equals";
// console.log(question);

// // === number to string 
// let question2 = PI === "3.14" ? "Yes that equals" : "No that is not equals";
// console.log(question2);



// while loop = when true

// let username = "";

// while(username === "" || username === null) {
//     username = window.prompt("Put your name: ");
// }

// console.log(`username: ${username}`);



// let loggedIn = false;
// let username;
// let password;

// while(!loggedIn) {
//     username = window.prompt("Enter your username");
//     password = window.prompt("Enter your password");
//     if(username === "user" && password === "password") {
//         loggedIn = true;
//         console.log(`you are logged in`);
//     } else {
//         console.log(`invalid username/password`);
//     }
// }



// // for loop

// let word = "Hello, world!";

// for (let i = 0; i <word.length; i++) {
//     if(i == 3) {
//         continue;
//     }
//     console.log(word + i);
// }




// Number guessing

// const min = 1;
// const max = 100;
// // That JS!
// const number = Math.floor(Math.random() * (max - min) + 1) + min;
// let isCorrect = false;
// let attempts = 1;
// console.log(`You are looking for ${number}`);

// while(!isCorrect) {

//     let guess = window.prompt(`Guess Number from ${min} to ${max} (q to quit)`)

//     if(guess < min || guess > max) {
//         window.alert(`Please choose a valid number between ${min} and ${max}`);
//     } else if(guess == number) {
//         isCorrect = true;
//         window.alert(`Correct!!! Well done! You guested on ${attempts} time`);
//     } else if(guess < number) {
//         attempts++;
//         window.alert(`Too small! Try again`);
//     } else if(guess > number) {
//         attempts++;
//         window.alert(`Too big! Try again`);
//     } 

//     if(guess == "q") {
//         break;
//     }
// }




// functions = a section of reusable code.



// let yourName = "HAvana";
// let age = 42;
//             // parameters
// function happyTo(string, age) {

//     return `Happy birthday, ${string} you are just ${age} years old`;
// }
//             // arguments
// console.log(happyTo(yourName, age));
// console.log(happyTo("Ash", 55));


// function add(x, y) {
//     return x + y;
// }

// let answer = add(33,5);
// console.log(answer);

// // even or odd

// let myNumber = 11;

// let result  = myNumber % 2 == 0 ? "even" : "odd";
// console.log(result);

// function isEven(x) {
//     return x % 2 === 0 ? true : false;
// }

// console.log(isEven(14));

// let myEmail = "my@example.com";

// function isValidEmail(string) {
//     return string.includes("@");
// }

// console.log(isValidEmail(myEmail));





// variable scope = local vs global

// // local scope:
// function function1() {
//     let x = 1;
//     console.log(x);
// }


// function function2() {
//     let x = 2;
//     console.log(x);
// }

// function1();
// function2();


// // global scope
// let x = 1;

// function function1() {
//     console.log(x);
// }


// function function2() {
//     console.log(x);
// }

// function1();
// function2();

// // global scope
// let x = 3;

// function function1() {
//     let x = 1;
//     console.log(x);
// }


// function function2() {
//     let x = 2;
//     console.log(x);
// }

// function1();
// function2();


// temperature 


// const textBox = document.getElementById("textBox");
// const toFahrenheit = document.getElementById("toFahrenheit");
// const toCelsius = document.getElementById("toCelsius"); 
// const mySubmitBtn = document.getElementById("mySubmitBtn");
// const result = document.getElementById("result");

// let temp;

// function convert() {

//     if(toFahrenheit.checked) {
//         console.log(`To F checked`);
//         temp = Number(textBox.value);
//         temp = temp * 9 / 5 + 32;

//         result.textContent = temp.toFixed(1) + "°F"
//     } else if(toCelsius.checked) {
//         console.log(`To C checked`);
//         temp = Number(textBox.value);
//         temp = (temp - 32) * (5/9);
//         result.textContent = temp.toFixed(1) + "°C"
//     } else {
//         result.textContent = `Select a unit`;
//         console.log(`Nothing checked`);
//     }

// }


// // array = a variable like structure that can hold more than 1 value

// let fruits = ["apple", "orange", "banana", "bananum"];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[3]);
// console.log(fruits);

// fruits[2] = "peach";

// fruits.push("nectarine"); // push to the last element 
// // fruits.pop(); // remove last one 

// fruits.unshift("orange"); // put to first and shift all elements 
// // fruits.shift(); // remove from the beginning


// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }


// console.log(fruits);

// let numberOfFruits = fruits.length;
// console.log(numberOfFruits);
// let indexOffApple = fruits.indexOf("nectarine"); // will return -1 if not found
// console.log(indexOffApple);

// //reverse loop
// // the length of the array id 6 but if I want to access the index of 6 I will get 
// // undefined - therefore we need to -1 to count from 0;
// for(let i = fruits.length - 1; i >= 0; i--) {
//     console.log(fruits[i]);
// }

// fruits.sort().reverse();

// for(let frut of fruits) {
//     console.log(`frut: ${frut}`);
// }




// spread operator = ... allows an iterable such as an array or string to be expanded into 
//                  separate elements (unpacking the elements)
// unpack elements
// opening a box
// spread the array to different elements
// let numbers = [1, 2, 3, 4, 5];
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);
// console.log(`numbers: ${numbers}`);
// console.log(maximum);
// console.log(minimum);


// let userName = "userName";
// let letters = [...userName].join(":");
// console.log(`userName: ${letters}`);


// let fruits = ["apple", "orange", "banana"];
// let vegetables = ["carrot", "celery", "potatoes"];

// // shallow copy (different data structure but contain identical values)
// let foods = [...fruits, ...vegetables, "eggs", "milk"];
// let newFruit = [...fruits];

// console.log(`fruit: ${newFruit}`);
// console.log(`food: ${foods}`);



// rest parameters = (...rest) allow a function work with
//                   a variable number of arguments by bundling them into an
//                   array
//      spread = expands an array into separate elements
//      rest = bundles separate elements into and array

//ex1                    // name of array we want
// function openFridge(...allFoods) { // rest parameters
//     console.log(...allFoods);      // spread operator
// }

// function getFood(...allFoods) {
//     return allFoods;
// }

// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "hotdog";
// const food4 = "sushi";

// // openFridge(food1, food2, food3, food4);

// const allFoods = getFood(food1, food2, food3, food4);
// console.log(allFoods);

//ex2
// function sum(...numbers) {

//     let result = 0;
//     for(let number of numbers) {
//         result += number
//     }
//     return result;
// }

// const total = sum(1, 4, 2, 3, 4, 5, 3, 123, 123, 123, 123, 123, 123);
// console.log(`Your total is: ${total}`);


// function getAverage(...numbers) {

//     let result = 0;
//     for(let number of numbers) {
//         result += number;
//     }
//     return result/numbers.length;
// }

// let avrAge = getAverage(2,2, 3);
// console.log(`Your avr is: ${avrAge.toFixed(2)}`);


//ex3

// function combineStrings(...strings){

//     return strings.join(' ');
// }

// const fullName = combineStrings("Mr.", "Who");
// console.log(fullName);


// function rollDice() {

//     const numDice = document.getElementById("numDice").value;
//     const diceResult = document.getElementById("diceResult");
//     const diceImages = document.getElementById("diceImages");
//     const values = [];
//     const images = [];

//     for (let i = 0; i < numDice; i++) {
//         const value = Math.floor(Math.random() * 6) + 1;
//         values.push(value);
//         images.push(`<img src="utils/images/${value}.png" alt="Dice ${value}"/>`);   
//         }

//     diceResult.textContent = `dice: ${values.join(", ")}`;
//     diceImages.innerHTML = images.join(' ');
// }







// random password generator 

// function generatorPassword(passwordLength, 
//                            includesLowerCase, 
//                            includesUpperCas,
//                            includeNumbers,
//                            includeSymbols) {

//         const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//         const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//         const numbersChars = "1234567890";
//         const symbolsChars = "!#$%&'()*+,-./:;<=>";

//         let allowedChars = "";
//         let password = "";

//         allowedChars += includesLowerCase ? lowercaseChars : "";
//         allowedChars += includesUpperCas ? uppercaseChars : "";
//         allowedChars += includeNumbers ? numbersChars : "";
//         allowedChars += includeSymbols ? symbolsChars : "";                   

//         // console.log(allowedChars);     
//         if(passwordLength <= 6) {
//             return `(Password length must be at least 6 characters)`
//         } 
//         if(allowedChars.length === 0) {
//             return `(At least one set of characters must be selected)`
//         }     

//         for(var i = 0; i < passwordLength; i++) {
//             const randomIndex = Math.floor(Math.random() * allowedChars.length);
//             password += allowedChars[randomIndex];
//         }
//         return password;
// }

// const passwordLength = 12;
// const includesLowerCase = true;
// const includeUpperCase = true;
// const includeNumbers = true;
// const includeSymbols = true;

// const password = generatorPassword(passwordLength,
//                                    includesLowerCase, 
//                                    includeUpperCase,
//                                    includeNumbers,
//                                    includeSymbols);

// console.log(`Generated password: ${password}`);





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


// hello(goodBye);
// // ot will wait for 3000 ms and then print "Hello!" after that "Goodbye!"
// function hello(callback) {
//     setTimeout(function () {
//         console.log("Hello!");
//         callback();
//     }, 3000);
// }

// function goodBye() {
//     console.log("Goodbye!");
// }


// 
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


// sum(displayInConsole, 3, 4);
// sum(displayOnPageDOM, 3, 4);

// function sum(callback, x, y) {
//     let result = x + y;
//     callback(result);
// }

// function displayInConsole(result) {
//     console.log(result);
// }


// function displayOnPageDOM(result) {
//     document.getElementById("h1").textContent = result
// }





// foreEach = method used to iterate over the elements of an array
//            and apply a specific function (callback) to each element

//            array,forEach(callback)
//            `element`, `index`, `array` are provided - IN THAT ORDER!

// let numbers = [1,2,3,4,5];

// // numbers.forEach(double);
// numbers.forEach(cube);
// numbers.forEach(display);
// console.log(numbers);

// // first option // it change only on display not the actual array!
// function double(x) {
//     console.log(x * 3);
// }

// // second option
// function triple(element, index, array) {
//     array[index] = element * 3;
// }

// function doubleArray(element, index, array) {
//     array[index] = element * 2;
// }

// function square(element, index, array) {
//     array[index] = Math.pow(element, 2);
// }

// function cube(element, index, array) {
//     array[index] = Math.pow(element, 3);
// }



// function display(element) {
//     console.log(element);
// }

/**
 * When you run numbers.forEach(double);, it will log each number in the array multiplied by 3. 
 * The numbers array itself remains [1,2,3,4,5].However, when you run numbers.forEach(triple); 
 * followed by numbers.forEach(display);, it first changes the numbers 
 * array to [3,6,9,12,15] (each number tripled),
 *  and then logs each number in this new array.
 * So, while both operations involve logging numbers that are three times the original numbers,
 *  the second operation also changes the original array, which the first operation does not do.
 * In other words, after running numbers.forEach(double);, the numbers array is still [1,2,3,4,5]. 
 * But after running numbers.forEach(triple);, the numbers array becomes [3,6,9,12,15].
 */

/**
 * Both numbers.forEach(double); and the combination of numbers.forEach(triple); 
 * and numbers.forEach(display); will print [3,6,9,12,15] to the console.However,
 *  the difference lies in the state of the numbers array after the operations:
 * After numbers.forEach(double);, the numbers array is still [1,2,3,4,5].
 * After numbers.forEach(triple);, the numbers array becomes [3,6,9,12,15].
 * So, while the printed output is the same, 
 * the underlying data (numbers array) is not the same after the operations. 
 * This could have implications in your code if you plan to use the numbers array later.
 */



// let fruits = ["apple", "orange", "banana"];


// // fruits.forEach(fruitsToUpperCase);
// fruits.forEach(capitalizeFirstLetter);
// fruits.forEach(displayInConsole);
//                     // need to be in that order! 
// function fruitsToUpperCase(element, index, array) {
//     array[index] = element.toUpperCase();
// }

// function capitalizeFirstLetter(element, index, array) {
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }



// function displayInConsole(element) {
//     console.log(element);
// }





// foreach will change original array .map create new array

// .map() = accepts a callback and applies that function to each `element`
//          of array, then return a new array

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(square);
// const cubes = squares.map(cube);

// console.log(squares);
// console.log(cubes);

// function square(element) {
//     return Math.pow(element, 2);
// }


// function cube(element) {
//     return Math.pow(element, 3);
// }


// const students = ["Havana", "Chuwi", "Anton"];
// const studentsUpper = students.map(upperCase);
// const studentsLower = students.map(lowerCase);

// console.log(studentsUpper);
// console.log(studentsLower);

// function upperCase(element) {
//     return element.toUpperCase();
// }

// function lowerCase(element) {
//     return element.toLowerCase();
// }



// const dates = ["2024-1-10", "2025-3-12", "2026-7-24"];
// const newDates = dates.map(formatDates);

// console.log(newDates);

// function formatDates(element) {
//     const parts = element.split("-");
//     return `${parts[2]}/${parts[1]}/${parts[0]}`;
// }


// .filter() = creates a new array by filtering out elements 

// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let evenNums = numbers.filter(isEven);
// let oddNums = numbers.filter(isOdd);

// console.log(evenNums);
// console.log(oddNums);

// function isEven(element) {
//     return element % 2 === 0;
// }

// function isOdd(element) {
//     return element % 2 !== 0;
// }


// const ages = [16, 17, 18, 20, 69];
// const adults = ages.filter(isAdult);
// const child = ages.filter(isChild);

// console.log(adults);
// console.log(child);

// function isAdult(element) {
//     return element >= 18;
// }


// function isChild(element) {
//     return element < 18;
// }


// const words = ["apple", "orange", "bananum", "kiwi", "coconuts"];
// const shortWords = words.filter(getShortWords);
// const longWords = words.filter(getLongWords);

// console.log(shortWords);
// console.log(longWords);

// function getShortWords(element) {
//     return element.length <= 6;
// }

// function getLongWords(element) {
//     return element.length > 6;
// }


// .reduce() = reduce the elements of an array array to a sigle value


// const prices = [5, 30, 25, 10, 20];
// const total = prices.reduce(sum);

// console.log(`total is £${total.toFixed(2)}`);

// //        previous element, next element
// function sum(accumulator, element) {
//     return accumulator + element;
// }

// const grades = [75, 30, 23, 90, 62, 123, 42];
// const maxGrades = grades.reduce(getMax);
// const minGrades = grades.reduce(getMin);

// console.log(maxGrades);
// console.log(minGrades);

// function getMax(previous, next) {
//     return Math.max(previous, next)
// }

// function getMin(previous, next) {
//     return Math.min(previous, next)
// }











// Function declaration = define a reusable block of code that persforms a specific task

// function hello() {
//     console.log("hello");
// }

// hello();

// // function expressions = a way to define functions as values or variables
// // Used in
// // 1. Callbacks in asynchronous operations
// // 2. High-Order functions
// // 3. Closures
// // 4. Event listeners 

// const hello2 = function () {
//     console.log("hello from function expression!");
// }

// hello2();

// setTimeout(hello, 2000);

// setTimeout(function () {
//     console.log("Hello?");
// }, 3000)



// 1 Declaration
// const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map(square);

// console.log(squares);

// function square(element) {
//     return Math.pow(element, 2);
// }

// 2 expression
// const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map(function(element) {
//     return Math.pow(element, 2);
// });

//                         // we don't need the name `cube`
// const cubes = numbers.map(function cube(element) {
//     return Math.pow(element, 3);
// });

// const evenNums = numbers.filter(function(element) {
//     return element % 2 === 0;
// });

// const oddNums = numbers.filter(function(element) {
//     return element % 2 !== 0;
// });

//                                  // accumulator, element
// const sumOfArray = numbers.reduce(function(prev, next) {
//     return prev + next;
// })

// console.log(squares);
// console.log(cubes);
// console.log(evenNums);
// console.log(oddNums);
// console.log(sumOfArray);


// arrow functions = a concise way to write function expressions good for simple functions
//                   that you use only once 
//                   (parameters) => some code

// 1 Declaration
// function hello1() {
//     console.log("Helllo from declaration");
// }
// hello1();

// // 2 Expression
// const hello2 = function() {
//     console.log("Hello from expression");
// }
// hello2();

// // 3 Arrow function
// const hello3 = () => console.log("Hello from arrow function");
// hello3();


// // 3 with parameter
// const helloUser = (name) => console.log(`Hello ${name}`);
// helloUser("Emil");

// const helloUser2 = (name, age) => {console.log(`Hello ${name}`)
//                               console.log(`You are ${age} years old!`)
// };
// helloUser2("Emil", 35);

// // 1
// setTimeout(hello4, 1000);

// function hello4() {
//     console.log("hello4 declaration");
// }

// // 2
// setTimeout(function hello4() {
//     console.log("hello4 expression");
// }, 2000);

// // 3
// setTimeout(() => console.log("hello4 arrow function"), 3000);


// const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map((element) => Math.pow(element, 2));
// const cubes = numbers.map((element) => Math.pow(element, 3));
// const isEven = numbers.filter((element) => element % 2 === 0);
// const isOdd = numbers.filter((element) => element % 2 !== 0);
//                                // acumulator, element
// const sumOfArrowArray = numbers.reduce((priv, next) => priv + next);
// console.log(squares);
// console.log(cubes);
// console.log(isEven);
// console.log(isOdd);
// console.log(sumOfArrowArray);




// object = A collection or related properties and/or methods 
//          Can represent real world objects (people, products, places)
//          object = {key:value,
//                    function()} (methods)


// const person1 = {
//     firstName: "James",
//     lastName: "Bond",
//     age: 76,
//     isEmployed: true,
//     sayHello: () => console.log("Hi I am agent 007!"), // arrow function
//     sayBay: function () { console.log("GoodBay!") }, // function expression
//     eat: () => console.log("I am eating chicken!!")
// };

// const person2 = {
//     firstName: "Ethan",
//     lastName: "Carter",
//     age: 43,
//     isEmployed: false,
//     sayHello: () => console.log("Hi I am Vanished!"),
//     sayBay: () => console.log("GoodBay!")
// }

// console.log(person1.firstName);
// console.log(person1.isEmployed);
// person1.sayHello();
// person1.eat();
// setTimeout(person1.sayBay, 1000)


// console.log(person2.firstName);
// person2.sayHello();
// setTimeout(person2.sayBay, 3000);




// this = reference to the object where THIS is used (the object depends on the immediate contect)
//        person.name = this.name

// this will not work with arrow function (lexical scoping)
// console.log(this); // it'a a window object
// console.log(this.location.host)

// const person1 = {
//     firstName: "Havana",
//     favFood: "taco",
//     sayHi: function () {console.log(`Hello my name is ${this.firstName}`)} ,
//     sayFavFood: function () {console.log(`${this.firstName} love to eat ${this.favFood}`)}
// }

// person1.sayHi();
// person1.sayFavFood();


// constructor = special method  for defining the properties and methods of object


// function Car(make, model, year, colour) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.colour = colour;
//         this.drive = function () {console.log(`You drive the ${this.make}`)}
// }

// const car1 = new Car("BMW", "4 Series", 2016, "Grey");
// const car2 = new Car("VW", "Golf", 2024, "Blue")

// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.colour);

// console.log(car2.make);
// console.log(car2.model);
// console.log(car2.year);
// console.log(car2.colour);

// car1.drive();
// car2.drive();


// class = (E6 feature) provides a more structured and cleaner way to work with objects
//         compared to traditional constructor functions 
//         ex. static keyword, encapsulation, inheritance


// 1
// function Product(name, price) {

//     this.name = name;
//     this.price = price;

//     this.displayProduct = function () {
//         console.log(`Product name: ${this.name}`);
//         console.log(`Price: ${this.price}`)
//     };

//     this.calculateTotal = function (salesTax) {
//         return this.price + (this.price * salesTax);
//     }
// }

// const salesTax = 0.05;

// const product1 = new Product("Hat", 2.99);

// product1.displayProduct();
// const withTax = product1.calculateTotal(salesTax);
// console.log(`Total price is ${withTax.toFixed(2)}`);

// 2 correct class:

// class Product {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }

//     displayProduct() {
//         console.log(`Product name: ${this.name}`);
//         console.log(`Price: ${this.price}`);
//     }

//     calculateTotatl(salesTax) {
//         return this.price + (this.price * salesTax);
//     }
// }

// const salesTax = 0.05; // 5%
// const product2 = new Product("Headphones", 22.99)

// product2.displayProduct();
// const totalWithTax = product2.calculateTotatl(salesTax);


// setTimeout(() => console.log(totalWithTax.toFixed(2)), 3000);








// static = keyword that defines properties or method that belong to a class itself rather
//          to the objrcts created from that calss (class owns anything static, not hte objects)


// class MathUtil {
//     static PI = 3.14159;

//     static getDiameter(radius) {
//         return radius * 2;
//     }

//     static getCircumference(radius) {
//         return 2 * this.PI * radius;
//     }

//     static getArea(radius) {
//         return this.PI * radius * radius
//     }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(12));
// console.log(MathUtil.getArea(7));

// class User{

//     static userCount = 0;

//     constructor(userName) {
//         this.userName = userName;
//         User.userCount++;
//     }

//     static getUserCount() {
//         console.log(`There are ${User.userCount} users online`)
//     }

//     sayHello() {
//         console.log(`Hello my user name is ${this.userName}`)
//     }
// }


// const user1 = new User("Bond");
// const user2 = new User("Jack");

// user1.sayHello();
// User.getUserCount();

// console.log(`How many users was created: ${User.userCount}`);



// inheritance = allows a new class to inherit properties and methods 
//               from an existing class (parent -> child)
//               helps with code reusability (DRY)


// class Animal {
//     alive = true;

//     eat() {
//         console.log(`This ${this.name} is eating`)
//     }

//     sleep() {
//         console.log(`This ${this.name} is sleeping`)
//     }
// }

// class Rabbit extends Animal {
//     name = "White Rabbit";

//     run() {
//         console.log(`This ${this.name} is running`)
//     }
// }

// class Fish extends Animal {
//     name = "Nemo";

//     swim() {
//         if(Animal.alive){
//             console.log(`This ${this.name} is swimming`)
//         } else {
//             console.log(`${this.name} can't sweam, because is dead!`)
//         }
//     }
// }

// class Howk extends Animal {
//     constructor(name) {
//         super();
//         this.name = name;
//     }

//     fly() {
//         console.log(`This ${this.name} is flying`)
//     }
// }


// const rabbit1 = new Rabbit();
// rabbit1.eat();
// console.log(rabbit1.name);
// rabbit1.run();


// const fish1 = new Fish();
// fish1.sleep();
// fish1.alive = false;
// fish1.swim();

// const howk1 = new Howk("Howke");
// howk1.eat();
// howk1.sleep();
// setTimeout(() => howk1.fly(), 3000);

// console.log(`Rabbit is alive: ${rabbit1.alive}`)
// console.log(`Rabbit is alive: ${fish1.alive}`)
// console.log(`Rabbit is alive: ${howk1.alive}`)


// super = keyword is used in classes to call the constructor or 
//         access the properties and methods of a parent (superclass)
//         this = this object
//         super = the parent



// class Animal {

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     move(speed) {
//         console.log(`The ${this.name} moves at a speed of ${speed} mph`)
//     }

// }

// class Dog extends Animal {

//     constructor(name, age, runSpeed) {
//         super(name, age);
//         this.runSpeed = runSpeed;
//     }

//     run() {
//         console.log(`This ${this.name} can run`);
//         super.move(this.runSpeed);
//     }

// }

// class Fish extends Animal {

//     constructor(name, age, swimSpeed) {
//         super(name, age);
//         this.runSpeed = swimSpeed;
//     }

//     swim() {
//         console.log(`This ${this.name} can swim`);
//         super.move(this.runSpeed);
//     }
// }

// class Stork extends Animal {

//     constructor(name, age, flySpeed) {
//         super(name, age);
//         this.runSpeed = flySpeed;
//     }

//     fly() {
//         console.log(`This ${this.name} can fly`);
//         super.move(this.runSpeed);
//     }
// }


// const dog1 = new Dog("Rex", 13, 54);
// const fish1 = new Fish("Nemo", 3, 13);
// const strk1 = new Stork("RedPik", 77, 120);

// console.log(`Name: ${dog1.name}`);
// console.log(`Age: ${dog1.age}`);
// console.log(`Speed: ${dog1.runSpeed}`);
// dog1.run();

// console.log(`Name: ${fish1.name}`);
// console.log(`Age: ${fish1.age}`);
// console.log(`Speed: ${fish1.runSpeed}`);
// fish1.swim();


// console.log(`Name: ${strk1.name}`);
// console.log(`Age: ${strk1.age}`);
// console.log(`Speed: ${strk1.runSpeed}`);
// strk1.fly();


// getter = special method that makes property readable
// setter = special method that makes property writeable

// validate and modify a value when reading/writing a property

//ex 1
// class Rectangle {
//     constructor(width, hight) {
//         this.width = width;
//         this.hight = hight;
//     }

//     set width(newWidth) {
//         if(newWidth > 0) {
//             this._width = newWidth; // (_ private property - not touching)
//         } else {
//             console.error("Width must be a positive number");
//         }
//     }

//     set hight(newHeight) {
//         if(newHeight > 0) {
//             this._height = newHeight;
//         } else {
//             console.error("Height must be a positive number");
//         }
//     }

//     get width() {
//         return `${this._width.toFixed(1)} cm`; // _ private witdth
//     }

//     get hight() {
//         return `${this._height.toFixed(1)} cm`;
//     }

//     get area() {
//         return `${(this._width * this._height).toFixed(1)} cm^2`;
//     }
// }


// const rectAngle = new Rectangle(10000, 20);

// console.log(rectAngle.width);
// console.log(rectAngle.hight);

// rectAngle.width = 3;
// rectAngle.hight = 7;

// console.log(rectAngle.width);
// console.log(rectAngle.hight);

// console.log(`The area of rectangle width ${rectAngle.width} and height ${rectAngle.hight} is ${rectAngle.area}`);

// ex2

// class Person {

//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     set firstName(newFirstName) {
//         if(typeof newFirstName === "string" && newFirstName.length > 0) {
//             this._firstName = newFirstName;
//         } else {
//             console.error("First name must be a non-empty, string");
//         }
//     }

//     set lastName(newlastName) {
//         if(typeof newlastName === "string" && newlastName.length > 0) {
//             this._lastName = newlastName;
//         } else {
//             console.error("Last name must be a non-empty, string");
//         }
//     }

//     set age(newAge) {
//         if(typeof newAge === "number" && newAge > 0) {
//             this._age = newAge; 
//         } else {
//             console.error("Age must be a non-negative number");
//         }
//     }

//     get toString() {
//         return `Tham man is ${this._lastName}, ${this._firstName} ${this._lastName} and he is ${this._age} years old`
//     }
    
//     // at this point all are undefind we need getters

//     get lastName() {
//         return this._lastName;
//     }

//     get firstName() {
//         return this._firstName
//     }

//     get age() {
//         return this._age;
//     }

//     get fullName() {
//         return `${this._firstName} ${this._lastName}`;
//     }
// }

// const person = new Person("James", "Bond", 98);
// console.log(person.toString);

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.fullName);






// destructuring = extract values from arrays and objects, then assign them 
//                 to variables in a convinient way
//                 [] = to perform array destructuring
//                 {} = to perform object destructuring

// ex 1 []
// Swap the value of two variables

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// ex 2 []
// Swap 2 elements in an array

// const colors = ["red", "green", "blue", "back", "white"];
// console.log(colors);
// [colors[0], colors[4]] = [colors[4], colors[0]]
// console.log(colors);

// ex 3
// Assign array elements to variables

// const colors = ["red", "green", "blue", "back", "white"];
//                             // ..rest parameter
// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);

// console.log(extraColors);

// ex 4
// Extract values from objects

// const Person1 = {
//     firstName: "James",
//     lastName: "Bond",
//     age: 100,
//     job: "Secret Agent"
// }

// const Person2 = {
//     firstName: "Bruce",
//     lastName: "Wayne",
//     age: 324,
// }

// const {firstName, lastName, age, job="Unknown"} = Person2;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// ex 5
// Destructure in function parameters

                                        // default value job=""
// function displayPerson({firstName, lastName, age, job="Unknown"}) {
//     console.log(`Name ${firstName} ${lastName}`);
//     console.log(`Age: ${age}`);
//     console.log(`Job: ${job}`);
    
// }

// const Person1 = {
//     firstName: "James",
//     lastName: "Bond",
//     age: 100,
//     job: "Secret Agent"
// }

// const Person2 = {
//     firstName: "Bruce",
//     lastName: "Wayne",
//     age: 324,
// }

// displayPerson(Person1);
// displayPerson(Person2);

// Nested objects = Objects inside other Objects.
//                  Allows you to represent more complex data strucures
//                  Child Objects is enclosed by a Parent Object

//                  Person{Address{}, ContactInfo{}}
//                  ShoppingCart{Keyboard{}, Mause{}, Monitor{}}

// ex 1
// const person = {
//     fullName: "James Bond",
//     age: 30,
//     isStudent: false,
//     hobbies: ["Poker", "fishing", "iceSkating"],
//     address: {
//         street: "123 N",
//         city: "London",
//         country: "UK"
//     }
// }

// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);


// console.log(person.hobbies[0]);
// console.log(person.address.city);

// for(const property in person.address) {
//     console.log(`- ${person.address[property]}`)
// }

// ex 2

// class Person {

//     constructor(name, age, ...address) {
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);
//     }
// }

// class Address {

//     constructor(street, city, country) {
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }

// const person1 = new Person("Bond", 30, "Bond Street", "London", "UK");
// const person2 = new Person("Bruce", 70, "Bruce Street", "Coventry", "UK");

// // console.log(person1.name);
// // console.log(person1.age);
// // console.log(person1.address);
// // console.log(person2.name);
// // console.log(person2.age);
// // console.log(person2.address);
// console.log(person1.address.street);

// for(const property in person2.address) {
//     console.log(`- ${person2.address[property]}`)
// }


// Array of Objects  

// const fruits = [{name: "apple", color: "red", calories: 94}, 
//                 {name: "orange", color: "oarange", calories: 45}, 
//                 {name: "banana", color: "yellow", calories: 105}, 
//                 {name: "coconut", color: "white", calories: 159}, 
//                 {name: "pineapple", color: "yellow", calories: 37}];


// // console.log(fruits[0].name);
// // console.log(fruits[1].name);
// // console.log(fruits[2].name);
// // console.log(fruits[3].name);
// // console.log(fruits[4].name);

// // console.log(fruits[0].calories);
// // console.log(fruits[1].calories);
// // console.log(fruits[2].calories);
// // console.log(fruits[3].calories);
// // console.log(fruits[4].calories);

// // add to array (last)
// fruits.push({name: "grapes", color: "purple", calories: 62})

// // delete last one in array
// // fruits.pop();

// // console.log(fruits);

// // for(const x in fruits) {
// //     console.log(fruits[x].name);
// // }

// // you can splice // cut out
// // fruits.splice(0,1);

// // for(const x in fruits) {
// //     console.log("x: " + fruits[x].name);
// // }
// // console.log(fruits);
// // ------------ForEach with arrow function----------------
// // fruits.forEach(x => console.log(x.name));
// // fruits.forEach(x => console.log(x.color));
// // ------------map() ------------------------------------
// // const fruitsName = fruits.map(fruit => fruit.name);
// // const fruitsColors = fruits.map(fruit => fruit.color);
// // console.log(fruitsName)
// // console.log(fruitsColors)
// // ------------filter()-----------------------------------
// // const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
// // console.log(yellowFruits);
// // const lowCaloriesFruits = fruits.filter(x => x.calories < 100);
// // console.log(lowCaloriesFruits);
// // -------------reduce()--------------------------------
//                     // acumulator, element
// // const maxCal = fruits.reduce((max, fruit) => 
// //                             fruit.calories > max.calories ?
// //                             fruit : max);
// // console.log(maxCal);
// // console.log(maxCal.calories);

// const minCal = fruits.reduce((min, fruit) =>
//                               fruit.calories < min.calories ?
//                               fruit : min);
// console.log(minCal);


// sort() = method used to sort elements of an array in place.
//          Sort elements as strings in lexicographic order, not 
//          alphabetical 
//          lexicographic = (alphabet + numbers + symbols) as strings


// let fruits = ["apple", "oragne", "banana", "coconut", "pineapple"];
// fruits.sort();
// console.log(fruits);


// let numbers = [1, 10, 4, 6, 3, 2, 8, 7, 5];
// // not by numbers - lexicographicly
// numbers.sort();
// console.log(numbers);
// // to sort by numbers
// numbers.sort((a, b) => a - b);
// console.log(numbers);
// // to sort in reverse order
// numbers.sort((a, b) => b - a);
// console.log(numbers);


// const people = [{name: "Bond", age: 84, gpa: 3.0}, 
//                 {name: "Bruce", age: 44, gpa: 1.5}, 
//                 {name: "Wally", age: 72, gpa: 2.5}, 
//                 {name: "Alice", age: 111, gpa: 4.0}];

// // sort by age ascending
// people.sort((a, b) => a.age - b.age );

// console.log(people);

// for(const person in people) {
//     console.log(people[person].age);
// }
// // sort by age descending
// people.sort((a, b) => b.age - a.age );

// for(const person in people) {
//     console.log(people[person].age);
// }

// people.sort((a, b) => a.gpa - b.gpa);
// for(person in people) {
//     console.log(`- ${people[person].gpa}`)
// }

// // ------- localeCompare()------------
// // for lexicographic order
// people.sort((a, b) => a.name.localeCompare(b.name));
// for(const person in people) {
//     console.log(`Name: ${people[person].name}`);
// }
// // for reverse lexicographic order
// people.sort((a, b) => b.name.localeCompare(a.name));
// for(const person in people) {
//     console.log(`R Name: ${people[person].name}`);
// }























