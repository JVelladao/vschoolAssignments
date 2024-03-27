//Establish Readline-Sync

const readline = require("readline-sync");


//Introductory Greeting

const playerName = readline.question("Hello! What is your player name?");//Whatever the user inputs will be stores as playerName
console.log(`Welcome, ${playerName}, to the RPG game!`);

//boolean to use initial game-running loop. Below, when we want the game to end, simply change the boolean to isGameRunning =false;

let isGameRunning =true; // see line 66


//ES5 Class Constructor---4-point constructor with four different things set to 4 different "this." properties

function Character(name, healthPoints, attackPoints, inventory){ 
    this.name=name;
    this.healthPoints=healthPoints;
    this.attackPoints=attackPoints;
    this.inventory=inventory;
    this.printInventory = function(){

        console.log(`Name: ${this.name}`)
        console.log(`Inventory: ${this.inventory}`)

    }
};

//Establishing playerInventory as a global variable; accessible beyond any individual function...


let playerInventory = ["bow","sword","axe","rocket launcher"];

// Feeding the constructor function with 1 hero and 3 enemies...

const hero = new Character(playerName, 100, 5, playerInventory);
const enemy1 = new Character("dragon",25,2, ["fire sack", "talon"]);
const enemy2 = new Character("goblin", 36, 3, ["rust sword", "black grenade"]);
const enemy3 = new Character("ork", 19,1, ["scimitar","dagger"]);

//Practice console logs (used during build)
//---------------console.log(hero);
//---------------console.log(enemy1);
//---------------console.log(enemy2);
//---------------console.log(enemy3);



// Establishing enemies as a global array...

let enemies = [enemy1, enemy2, enemy3];


//Establishing a getRandomNumber function to use for odds and chances (ex:1/4 chance of facing an enemy) later in the game
 
const getRandomNumber =(min,max) => {
    return Math.floor(Math.random()*(max-min +1)+ min);
};


//This while loop is the game loop. The game will continuw so long as it is true. Note this is a truthy statement
//so the only way to falsify it is to say so expressly isGameRunning=false or to hard exit it via a process.exit();

while(isGameRunning) {

    //victory message for when player has defeated all enemies and he's emptied the array

    if(enemies.length === 0){ //when the enemy array hits 0 (all enemies have dropped below 0 health points). Game ends)
        console.log(`Congratulations ${hero.name}, you have defeated all enemies. You win!!!`);
        process.exit(); //forces the whole thing to shut down
    }
    //first question beyond the intro remarks. Answer to this question ques up 'if statements.'
    let action =readline.question("What do you want to do? Press [w] to walk, [i] to see inventory, [q] to quit", {limit:["w","i" ,"q"]});
    //if player selects walk option, the following function runs...
    if (action==="w"){
        console.log("You chose to walk")

        let enemyChance =getRandomNumber(1,4) //use this # to determine if an enemy occured. Fires the (global) getRandomNumber function

        console.log(enemyChance)

        if(enemyChance ===2){ //recall this can be any number between 1/4. If 2, an enemy will appear (see below)

            let randomEnemyIndex =getRandomNumber(0,enemies.length-1) // Accessing enemies...indexed v. length 
            let currEnemy =enemies[randomEnemyIndex]
            console.log(`${currEnemy.name} has appeared!!`);//template literals
            
            const options = ["fight", "run"]; //in the face of the enemy appearance, you have two choices, fight or run
            let fightOrRun = readline.keyInSelect(options, "do you want to fight or run?"); //
            console.log(options[fightOrRun]);
            if(options[fightOrRun]==="fight"){
                fight(currEnemy);//see line 87 for currEnemy variable
            } else if(options[fightOrRun]==="run"){
                run(currEnemy);//see line 87 for currEnemy variable. Launches run function (line 142)
            }
        }


    } else if (action==="i"){
        hero.printInventory();
        console.log("health points:" + hero.healthPoints);
    } else if(action==="q"){
        console.log("you're a quitter!!!!!")
        isGameRunning= false;//toggles boolean to false. makes while loop condition false= nofire
    }

};



//Fight Function (Global)

function fight(currEnemy){ //feeding the function with whatever the enemy generated is. (line 87)
   console.log(`You Chose to FIGHT ${currEnemy.name}`);

    while(hero.healthPoints>0 && currEnemy.healthPoints>0 ){ //while this is true we will continue to do something.
        currEnemy.healthPoints -= hero.attackPoints;//this will all repeat untill the while loop closes
        console.log(` Bam!! You delivered ${hero.attackPoints} damage! ${currEnemy.name} is now at ${currEnemy.healthPoints}`);
        hero.healthPoints -= currEnemy.attackPoints;
        console.log(` Ouch! You received ${currEnemy.attackPoints} damage from ${currEnemy.name}! ${hero.name} is now at ${hero.healthPoints}`);
    
        //the below if statement closes out the while loops
    if(hero.healthPoints<=0){
        console.log("You die, loser!!");
        isGameRunning=false;
    }

    if(currEnemy.healthPoints<=0){
        console.log(`Success! You defeated ${currEnemy.name}`);
        enemies = enemies.filter(item => item.name !== currEnemy.name) //.filter() returns an array of a different length
    }
       
    };
};



//Run Function (Global)

function run(currEnemy){
    console.log(`you chose to RUN from ${currEnemy.name}`);
    let escapeChance = getRandomNumber(1,2);
    if(escapeChance===1){
        console.log(`You escaped the enemy, ${hero.name}`);

    }else if(escapeChance===2){
        console.log(`You tripped. You fell. You didn't escape. Prepare to fight ${currEnemy.name}`);
        fight(currEnemy);

    }
};



