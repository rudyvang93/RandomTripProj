"use strict"

console.log("Welcome to The best day trip planner");
console.log("Randomized Destintation, Restaurant, Transportation, And Entertainment");
console.log("Completed Day Trip As Of Now");





let destintation= ["milwaukee ", "minnesota ", "hawaii ", "thailand"];

function random(myArray){
    return myArray[Math.floor(Math.random() * myArray.length)]
    
}
console.log(random(destintation));



let restaurant= ["japanica ", "rodizio", "pho ", "sushi"];

function random(myArray){
    return myArray[Math.floor(Math.random() * myArray.length)]

}
console.log(random(restaurant));



let transportation= ["moped ", "lyft ", "bike ", "bus"];

function random(myArray){
    return myArray[Math.floor(Math.random() *myArray.length)]
    
}
console.log(random(transportation));



let entertainment= ["karaoke ", "shopping ", "fishing ", "basketball"];

function random(myArray){
    return myArray[Math.floor(Math.random() *myArray.length)]
    
}
console.log(random(entertainment));





function reChoose(input){
    let userInput2 = prompt("Do you want to reselect any of your options?")
console.log('Do you want to reselct any of these options?');
console.log(userInput2);
}


if (userInput == "yes"){
    while (userInput =="yes"){
        console.log("you have selected" + reChoose(userInput));
    }
}

let userInput1 = prompt("Which selection do you want to reselect? destination, restaurant, entertainment, transportation")
console.log(' Do you want to change anything else?')
console.log(userInput1);


let userInput3 = prompt("Would you like to change any random selections on your day trip?")
let reChoose = (transportation)

if (userInput3 == "yes"){
    while (userInput3 =="yes"){
        console.log("You have selected" + reChoose(userInput3))
        userInput3 = prompt (" Would you like to change anything else?")
    }
}