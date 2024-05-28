// JSON = (JavaScript Object Notation) data-interchange format
//        Used for exchanging data betweem a server and a web application
//        JSON files {key:value} OR [value1, value2, value3]

//        JSON.stringify() = converts a JS object to s JSON string.
//        JSON.parse() = converts a JSON string to a JS object

// names stringify
const names = ["Kathleen Booth", "Dennis Ritchie", "James Gosling", "Ada Lovelace"];
const jsonStringNames = JSON.stringify(names);

console.log(names);
console.log(jsonStringNames);

// person stringify
const person = {"name": "Kathleen Booth","age" : 100,"isAlive": false,"hobbies": ["assembly", "computer scientist"]};
const jsonStringPerson = JSON.stringify(person);

console.log(person);
console.log(jsonStringPerson);

// people stringify
const people = [{"name": "Kathleen Booth","age": 100,"isAlive": false},
                {"name": "Dennis Ritchie","age": 70, "isAlive": false},
                {"name": "Ada Lovelace","age": 36,"isAlive": false},
                {"name": "James Gosling","age": 69,"isAlive": true}];
const jsonStringPeople = JSON.stringify(people);

console.log(people);
console.log(jsonStringPeople);




// names parse
const jsonNames = `["Kathleen Booth", "Dennis Ritchie", "James Gosling", "Ada Lovelace"]`;
const parseJsonNames = JSON.parse(jsonNames);

console.log(jsonNames);
console.log(parseJsonNames);

// person parse
const jsonPerson = `{"name": "Kathleen Booth","age" : 100,"isAlive": false,"hobbies": ["assembly", "computer scientist"]}`;
const parseJsongPerson = JSON.parse(jsonPerson);

console.log(jsonPerson);
console.log(parseJsongPerson);

// people parse
const jsonPeople = `[{"name": "Kathleen Booth","age": 100,"isAlive": false},
                {"name": "Dennis Ritchie","age": 70, "isAlive": false},
                {"name": "Ada Lovelace","age": 36,"isAlive": false},
                {"name": "James Gosling","age": 69,"isAlive": true}]`;
const parseJsongPeople = JSON.parse(jsonPeople);

console.log(jsonPeople);
console.log(parseJsongPeople);


// fetch json file

fetch("utils/json/person.json").then(response => response.json())
                               .then(value => console.log(value))
                               .catch(error => console.error(error));

fetch("utils/json/names.json").then(response => response.json())
                              .then(value => console.log(value))
                              .catch(error => console.error(error));                           

fetch("utils/json/people.json").then(response => response.json())
                              .then(value => console.log(value))
                              .catch(error => console.error(error)); 
// iterate through values
fetch("utils/json/people.json").then(response => response.json())
                               .then(values => values.forEach(value => console.log(value)))
                               .catch(error => console.error(error)); 
// iterate over name
fetch("utils/json/people.json").then(response => response.json())
                               .then(values => values.forEach(value => console.log(value.name)))
                               .catch(error => console.error(error)); 