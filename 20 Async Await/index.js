// Async/Await = Async - makes a finction  return a rpomis
//               Await - makes an async function wait for a promise

//               Allows you to write asynchronous code in a synchronous manner
//               Async doesn't have resolve or reject parameters
//               Everuthing after Await is placed in an event queue


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

async function doChores() {
    try {
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
        const takeTrashOutResult = await takeTrashOut();
        console.log(takeTrashOutResult);
    
        console.log("Done");
    } catch (e) {
        console.error(e);
    }
}

doChores();