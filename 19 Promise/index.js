// Promise = An Object that manages asynchronous oprations.
//           Wrap a Promise Object around {asynchronous code}
//           "I promise to return a value"
//           PENDING -> RESOLVED OR REJECTED
//           new Promise((resolve, reject) => {asynchronous code})

// DO this in order

// 1. Walke the dog 
// 2. Clean kitchen
// 3. Take trash out

function walkDog() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You walked the dog 🦮");
        }, 1500);
    })
}

function cleanKitchen() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You cleaned the kitchen🎯");
        }, 2500); 
    })
}

function takeTrashOut() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You tooked trash away🛒");
        }, 1500);
    })
}

// Callback Hell
// console.log("Start");
// walkDog(() =>{
//     cleanKitchen(() => {
//         takeTrashOut(() => console.log("All done"));
//     })
// })

// Method chaining (another hell)
// console.log("Start");
// walkDog().then(value => {console.log(value); return cleanKitchen()})
//          .then(value => {console.log(value); return takeTrashOut()})
//          .then(v => {console.log(v); return console.log("All done!")});



// 2 (with failed/reject)

function walkDog() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogwalked = true;

            if(dogwalked) {
                resolve("You walked the dog 🦮");
            } else {
                reject("You didn't walk with the dog🦮");
            }

        }, 1500);
    })
}

function cleanKitchen() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kitchenCleaned = false;
            
            if(kitchenCleaned) {
                resolve("You cleaned the kitchen🎯");
            } else{
                reject("Kitchen is not clean");
            }
        }, 2500); 
    })
}

function takeTrashOut() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trashOut = true;

            if(trashOut) {
                resolve("You tooked trash away🛒");
            } else {
                reject("You didn't take out the trash");
            }
        }, 1500);
    })
}
console.log("Start");
walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeTrashOut()})
         .then(v => {console.log(v); return console.log("All done!")})
         .catch(error => console.error(error));
