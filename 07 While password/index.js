let loggedIn = false;
let username;
let password;

while(!loggedIn) {
    username = window.prompt("Enter your username");
    password = window.prompt("Enter your password");
    if(username === "user" && password === "password") {
        loggedIn = true;
        console.log(`you are logged in`);
    } else {
        console.log(`invalid username/password`);
    }
}