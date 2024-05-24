function generatorPassword(passwordLength, 
                           includesLowerCase, 
                           includesUpperCas,
                           includeNumbers,
                           includeSymbols) {

        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbersChars = "1234567890";
        const symbolsChars = "!#$%&'()*+,-./:;<=>";

        let allowedChars = "";
        let password = "";

        allowedChars += includesLowerCase ? lowercaseChars : "";
        allowedChars += includesUpperCas ? uppercaseChars : "";
        allowedChars += includeNumbers ? numbersChars : "";
        allowedChars += includeSymbols ? symbolsChars : "";                   
                            
        // console.log(allowedChars);     
        if(passwordLength <= 6) {
            return `(Password length must be at least 6 characters)`
        } 
        if(allowedChars.length === 0) {
            return `(At least one set of characters must be selected)`
        }     
        
        for(var i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
        }
        return password;
}

const includesLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;



function generateNew() {
    const inputValue = document.getElementById("numberOfChar");
    const passwordLength = Number(inputValue.value);
    console.log(`password length is: ${passwordLength}`);
    const password = generatorPassword(passwordLength,
        includesLowerCase, 
        includeUpperCase,
        includeNumbers,
        includeSymbols);


const result = document.getElementById("p1");
result.textContent = password;

console.log(`Generated password: ${password}`);
}
