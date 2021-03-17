"use strict"

console.log("Hello welcome to The best day trip planner");

console.log("Randomized Destintation, Restaurant, Transportation, And Entertainment Planner In One");

console.log("Your Complete Randomized Day Trip");





let destintation= ["Milwaukee ", "Minnesota ", "Colorado ", "Chicago"];
let restaurant= ["Japanica ", "Rodizio", "Phoholic ", "Sushi"];
let transportation= ["moped ", "lyft ", "bike ", "bus"];
let entertainment= ["karaoke ", "shopping ", "fishing ", "basketball"];





function genRandom (myArray){
    return myArray[Math.floor(Math.random() * myArray.length)]    
}


let destintationRandom= genRandom(destintation);
console.log(destintationRandom);





let restaurantRandom= genRandom(restaurant);
console.log(restaurantRandom);





    

let transportationRandom= genRandom(transportation);
console.log((transportationRandom));





    

let entertainmentRandom= genRandom(entertainment);
console.log((entertainmentRandom));




let userInput = prompt("Do you want to reselect any of your options? Yes or No");

if (userInput == "yes"){
    while (userInput =="yes"){
        console.log("You made a change to " + reChoose());
        userInput =prompt ("Any other changed you want to make? Yes or No?");
       
    }
}
else if ( userInput != "no"){
    console.log("Make it memorable");
}
else{
   userInput = prompt ("Are you satisfied with this?");
}
console.log("Have a great time!");



function reChoose(){
    let user =prompt( "Is there anything you would like to change?");
    if (user == "destination"){
        destintationRandom = genRandom(destintation);
        return destintationRandom;
    }
    else if(user === "restaurant"){
        restaurantRandom = genRandom(restaurant);
        return restaurantRandom;
    }
    else if (user === "entertainment"){
        entertainmentRandom =genRandom(entertainment);
        return entertainmentRandom;
    }
    else if (user === "transportation"){
        transportationRandom = genRandom(transportation);
        return transportationRandom;
    }
}

console.log(destintationRandom);
console.log(restaurantRandom);
console.log(entertainmentRandom);
console.log(transportationRandom);

console.log ("You are going to",destintationRandom,"have a great time");
console.log ("For transportation you have chosen to use the good ol", transportationRandom);
console.log("for some fun in the city you have selected to", entertainmentRandom);
console.log ("For dinner you will be eating at one of my favorites", restaurantRandom);



console.log("Have an amazing time :)")