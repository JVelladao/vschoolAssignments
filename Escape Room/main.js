const readline = require("readline-sync");
//const name = readline.question("What is your name? ");
//console.log(name)


/*
**Write a game that lets a user escape a room:

-The character finds him/herself locked in a room. 

-In order to escape the room, your character needs to find the key in the room and then open the door. 

-There's also a hole in the wall in the room. 

-If your character puts his hand in the hole, he dies. 

------------------------------------------------------------------------------------------------------------------------------------------

# **Game start:**

Tell the user their options:

1. Find the key

or

2. Open the door

or

3. Put hand in hole
    

They can't open the door unless they find the key first.

They die if they put their hand in the hole.
 
 */

const characterName = readline.question("What is your character name? ");
console.log(characterName)

const firstQuestion = readline.question(characterName +"," + " would you like to accept the challenge to leave the room?")

if(firstQuestion === "yes"){
    var num = readline.question("Do you want to (a) Find the key, (b) Open the door, or (c) put your hand in the whole?");
   
}

if(num === "c"){
    console.log("you're a dead duck");
} else if(num ==="b"){
    console.log("hmmmmmm,try again");
}else if(num ==="a"){
    console.log("very good, now what?")
};

if(num === "a"){
    var num2 = readline.question("do you want to (a)open the door or (b)put your hand in the whole?")
};

if(num2 ==="a"){
    console.log("ding ding ding you win");
} else if(num2==="b"){
    console.log("nope, you die.")
};








