class Player {
    constructor(name, totalCoins , status, hasStar){
        this.name = name
        this.totalCoins =totalCoins
        this.status = status
        this.hasStar= hasStar
    
    };
    setName(namePicked){
        this.name =namePicked;
        }

    gotHit(statuss){
        this.status = statuss
        //this is called whenever the player is hit by an enemy. 
        //gotHit() will set the status property accordingly. (Statuses go from "Powered Up" to "Big" to "Small" to "Dead".)
    }

    gotPoweredUp(){
        this.status =statuss
        // called when a powerup is received and sets the status accordingly. 
        // (Statuses go from "Small" to "Big" to "Powered Up". If you are Powered Up and it hits this function, you get a star)

    }

    addCoin(){
        //adds a coin to totalCoins

    }

    print(){
        console.log(guy)
    // prints to the console the name, totalCoins, status, and star properties. Make sure you make this look nice such as:
    // Name: Luigi,
    // Status: Small, etc, etc
    }
    
}



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;

    

}


let james = getRandomInt(1,2)



if(james === 1){
    console.log("yo");
} else {
    console.log("no")
}





let guy = new Player()

guy.setName('Luigi')//set name to either 'Mario' or 'Luigi'

guy.gotHit('powered up')

console.log(guy)


