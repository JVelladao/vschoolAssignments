//Establish Readline-Sync

const readline = require("readline-sync");


//Introductory Greeting

const playerName = readline.question("Hello! What is your player name?");//variable (player) name now saved as playerName
console.log(`Welcome, ${playerName}, to the RPG game!`);

//boolean to use initial game-running loop
let isGameRunning =true;


//ES5 Class Constructor

function Character(name, healthPoints, attackPoints, inventory){ //4-point constructor with four different things set to 4 different "this." properties
    this.name=name;
    this.healthPoints=healthPoints;
    this.attackPoints=attackPoints;
    this.inventory=inventory;
    this.printInventory = function(){

        console.log(`Name: ${this.name}`)
        console.log(`Inventory: ${this.inventory}`)

    }
};

//establish player inventory as a global variable


let playerInventory = ["bow","sword","axe","rocket launcher"];

//instantiating 1 hero and 3 enemies using a constructor function

const hero = new Character(playerName, 100, 5, playerInventory);
const enemy1 = new Character("dragon",25,2, ["fire sack", "talon"]);
const enemy2 = new Character("goblin", 36, 3, ["rust sword", "black grenade"]);
const enemy3 = new Character("ork", 19,1, ["scimitar","dagger"]);

//---------------console.log(hero);
//---------------console.log(enemy1);
//---------------console.log(enemy2);
//---------------console.log(enemy3);

//print inventory template and function

//enemy1.printInventory()

//manipulatable enemy array

let enemies = [enemy1, enemy2, enemy3];


 
const getRandomNumber =(min,max) => {
    return Math.floor(Math.random()*(max-min +1)+ min);
};


//we need to keep asking this question then execute using different logic depending on what answer the user gives us

while(isGameRunning) {

    //victory message for when player has defeated all enemies and he's empties the array

    if(enemies.length === 0){
        console.log(`Congratulations ${hero.name}, you have defeated all enemies. You win!!!`);
        isGameRunning=false;
    }
    
    let action =readline.question("What do you want to do? Press [w] to walk, [i] to see inventory, [q] to quit", {limit:["w","i" ,"q"]});
    
    if (action==="w"){
        console.log("You chose to walk")

        let enemyChance =getRandomNumber(1,4) //use this # to determine if an enemy occured

        console.log(enemyChance)

        if(enemyChance ===2){

            let randomEnemyIndex =getRandomNumber(0,enemies.length-1)
            let currEnemy =enemies[randomEnemyIndex]
            console.log(`${currEnemy.name} has appeared!!`);//template literals
            //console.log(currEnemy);

            const options = ["fight", "run"];
            let fightOrRun = readline.keyInSelect(options, "do you want to fight or run?");
            console.log(options[fightOrRun]);
            if(options[fightOrRun]==="fight"){
                fight(currEnemy);
            } else if(options[fightOrRun]==="run"){
                run(currEnemy);
            }
        }


    } else if (action==="i"){
        hero.printInventory()
    } else if(action==="q"){
        console.log("you're a quitter!!!!!")
        isGameRunning= false;//toggles boolean to false. makes while loop condition false= nofire
    }

};



//Fight Function (Global)

function fight(currEnemy){
   console.log(`You Chose to FIGHT ${currEnemy.name}`);

    while(hero.healthPoints>0 && currEnemy.healthPoints>0 ){ //while this is true we will continue to do something.
        currEnemy.healthPoints -= hero.attackPoints;
        console.log(` Bam!! You delivered ${hero.attackPoints} damage! ${currEnemy.name} is now at ${currEnemy.healthPoints}`);
        hero.healthPoints -= currEnemy.attackPoints;
        console.log(` Ouch! You received ${currEnemy.attackPoints} damage from ${currEnemy.name}! ${hero.name} is now at ${hero.healthPoints}`);
    

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

//const options = ["fight", "run"];
//let fightOrRun = readline.keyInSelect(options, "do you want to fight or run?");

//if(options[fightOrRun]==="fight"){
  //  fight();
//} else if(options[fightOrRun]==="run"){
   // run();
//}





//console.log(enemies);


//enemy2.printInventory()

