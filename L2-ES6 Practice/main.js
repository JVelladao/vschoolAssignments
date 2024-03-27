//spread operator (connecting different arrays)

array1 = [1,2,3,4,5,6,7]
array2 = ["dog","cat","hippo"]

let newArray = ["I ate the magic pie",...array1,...array2]

console.log(newArray);


/**
1.
Replace all the `var`s with `let` and `const`. Alter the code however necessary to make sure this continues 
to work (so the pet's name **isn't** `"John"`, but instead `"spot"` is returned). You only need to delete `var` and 
insert `let` and `const`

John is the pet owner, and his name should be stored differently than the other names.
*/

const name = "John"
const age = 101

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

/**

2.
 
ES6 Arrow Functions

**Task 1**

Re-write this `.map()` using an arrow function:

Be aware that if JavaScript sees a `{` directly after the `=>` it will think it's starting a function, and 
not starting an object, so the `:` will be an unexpected symbol.

*/

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(function(carrot) {
        return { type: "carrot", name: carrot }
    })
}


console.log()

const result = carrots.map(function(carrot){
    return {type: "carrot", name: carrot};

})

console.log(result)

const result1 = carrots.map(carrot => ({type: "carrot", name: carrot}))
console.log(result1);

//3. Re-write this .filter() ’s callback function using an arrow function:

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(function(person) {
        return person.friendly
    })
}

const resullt = people.filter(function(character){
    return character.friendly
})

console.log(resullt)

const resulllt = people.filter(character => character.friendly)
console.log(resullt)

//4. Re-write the following functions to be arrow functions:

function doMathSum(a, b) {
    return a + b
}

const reps = (a , b) =>  a + b;

console.log(reps(2,5))
//____________________________________________________________________________________________________________________________________________________


var produceProduct = function(a, b) {
    return a * b
}

let brick = (a,b) => a*b

console.log(brick(2,7))


//4. Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:

//Hi Kat Stark, how does it feel to be 40?

//firstName should default to "Jane"lastName should default to "Doe"age should default to 100

const person= {firstName: "Jane", lastName: "Doe", age: 100 }


function printString({firstName, lastName, age}){
    return `Hi ${firstName} ${lastName} , how does it feel to be ${age}`
}

console.log(printString(person))

//5. Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 function filterForDogs(arr) {
     return arr.filter(animal => {
         if (animal.type === "dog") {
             return true
         } else {
             return false
         }
     })
 }

 
 let arg = animals.filter(function(animal){
    if(animal.type ==="dog"){
        return true
    } else {
        return false
    }
 });

 console.log(arg)

 let arg1 =animals.filter(animal => animal.type ==="dog")
 
 console.log(arg1)

 //6. Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:

 /**
Hi Janice!

Welcome to Hawaii.

I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.

*/


const object = {name:"Janice", location:"Hawaii"}

function printStuff({name,location}){
    return `Hi ${name}! Welcome to ${location}. I hope you enjoy your stay. Please ask the president of Hawaii if you need anything`
};

console.log(printStuff(object))


const objecct = {name: "Rodriguez", branch: "USMC"};

function printSoldier ({name, branch}){
    return `The soldier in question is ${name}. He is part of the ${branch + " hooroah"}`;
}

console.log(printSoldier(objecct))

//____________________________________________________________________________________________________________________________________________________
//[[[[Slope Style exercise]]]]

//1.  Use the rest operator to help this function return an array of animals no matter how many animals are passed to it
// ["dog", "cat", "mouse", "jackolope", "platypus"]

function collectAnimals(...animals){
    return animals
}

let varst = collectAnimals("dog", "cat", "mouse", "jackolope", "platypus","angry bird","eel");

console.log(varst)



//______________________________________________________________________________________________________________________________________________________
// 2. [return]

/**
 
Write a function that returns a food object with the array names as properties.
 You'll use an ES6 shorthand syntax that becomes useful when a variable name 
 is mentioned twice in both the name and value of properties in your object:

 */

 // { fruit: ["apple", "pear"], sweets: ["cake", "pie"], vegetables: ["carrot"] }


 function combineFruit(...produces){
    return produces.reduce(function(final,produce){
       // return ()

    }, {})
   
}

let ork = combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"])

console.log(ork)
//______________________________________________________________________________________________________________________________________________________
//3. Use destructuring to use the property names as variables. Destructure the object in the parameter:

let objective = {location: "Burly, Idaho", duration: "2 weeks", time:15}

function parseSentence({location,duration,time}){
    return `We're going to have a good time in ${location} for ${duration} for ${time} days.`
  };
  
  console.log(parseSentence(objective));
//____________________________________________________________________________________________________________________________________________________
//4.Use array destructuring to make this code ES6:

const items = ["important", "skip", "important"]
const [firstItem, secondItem, thirdItem]=items


function returnFirst(items){
    const [firstItem, secondItem, thirdItem]=items
   // const firstItem = items[0]; /*change this line to be es6*/
    return firstItem
}

console.log(returnFirst(items))
//_____________________________________________________________________________________________________________________________________________________
//5.Write destructuring code to assign variables that will help us return the expected string.
// Also, change the string to be using Template literals [return]

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];
const obeee = {...favoriteActivities}
//console.log(obee)

function doIt(){
    return `My top three favorite activites are ${0}`
}

console.log(doIt(obeee))

//function returnFavorites(favoriteActivities){
    //return favoriteActivities.reduce(function(final, stuffs){
       // return final.stuff

    //}, {})

//}

//returnFavorites(favoriteActivities)



// return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav";



//______________________________________________________________________________________________________________________________________________________
//6.Use the Rest and Spread Operator to help take any number of arrays, and return one array.
// You will need to change how the arrays are passed in. 
//You may write it assuming you will always recieve three arrays if you would like to.

function combineAnimals(...arr) {
    return arr
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

//console.log(combineAnimals( realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]

console.log(combineAnimals(...realAnimals,...magicalAnimals,...mysteriousAnimals))

const nArray = realAnimals.concat(magicalAnimals).concat(mysteriousAnimals)

console.log(nArray)
//___________________________________________________________________________________________________________________________________________________
//7.Try to make the following function more ES6y:

let numbers = [1,2,3,4,5]

function product(...numbers) {
    
    //return numbers.reduce(function(final, number) {
      //return final * number;
    //}, 1)

    return numbers.reduce((final,number) => final*number,1)
  }
  
  console.log(product(...numbers))

  //_________________________________________________________________________________________________________________________________________________
  //8. Make the following function more ES6y. Use at least both the rest and spread operators:
  
  function unshift(array, ...second) {
  return [...second,...array];
}

let array=[1,2,3,4,5,6,7]

let second=['a','b','c','d','e','f']

console.log(unshift(array,second))

//______________________________________________________________________________________________________________________________________________________
//9.Write some destructuring code to help this function out.
// Use the ES6 shorthand that helps make the syntax look less redundant to simplify it:

let names = ["Frank Peterson", "Suzy Degual", "Liza Jones"]

function populatePeople(names){
    return names.map(function(name){
      return  
      //name = name.split(" ").JSON.parse(name);
      

        





       }) ;
       
        
    }

         //your code
        //return {
           // firstName: firstName,
            //lastName: lastName
        //}
 //})
//}

console.log(populatePeople(names))



//populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]

//let persons =[["Frank Peterson", "Suzy Degual", "Liza Jones"]]

//let enterprise = persons.map(function(namee){
   // return " "
    
//})

//console.log(enterprise)