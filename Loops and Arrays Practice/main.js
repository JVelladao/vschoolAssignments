//Challenge 1: loop through the following array and count how many "computers" there are and log the final count.

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

var target = "computer";
var counter = 0;
        


    for(var i = 0 ; i<officeItems.length ; i++){

        if(officeItems[i] === target){
        
           counter++;
           
        }
    }
        
    console.log(counter)

//Challenge 2: loop through the following array and log to the console "old enough" if they are 18 or older and "not old enough"
//  if they are not 18 or older.
var peopeWhoWantToSeeMadMaxFuryRoad =[
    {
        name: "Mike",
        age: 12,
        gender: "male"
    },{
        name:"Madeline",
        age: 80,
        gender: "female"

    },{
        name: "Cheryl",
        age: 22,
        gender: "female",

    },{
        name:"Sam",
        age: 30,
        gender: "Male"
    },{
        name:"Suzy",
        age: 4,
        gender: "female"
    }
]


console.log(peopeWhoWantToSeeMadMaxFuryRoad[3].age)

for(var i = 0 ; i < peopeWhoWantToSeeMadMaxFuryRoad.length ; i++){

    if(peopeWhoWantToSeeMadMaxFuryRoad[i].age>= 18){
        console.log(peopeWhoWantToSeeMadMaxFuryRoad[i].name + "  is old enough to see Mad Max");
    } else {
        console.log(peopeWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough")
    }

}


   




            
    



