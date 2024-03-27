// PracticetoUpperCase & toLowerCase

// var names = "steve"


// var newSteve = names.toUpperCase()

// console.log(newSteve)

// newNewSteve = newSteve.toLowerCase()

// console.log(newNewSteve)

// /*Write a function that takes a string as a parameter and returns the same string in 
// all capital letters followed by all lowercase letters.
// **/

// function upper(nombre){
//     return nombre.toUpperCase();
// }

// var nombre = "mike"

// var hi = upper("nombre")

// console.log(hi)

// //round 2 (iterate)

// function uppers(nameee){
//     return nameee.toUpperCase();
// }

// var nameee = "jamie"

// var yo = uppers(nameee)

// console.log(yo)

// //again

// function capitalize(string){
//     return string.toUpperCase();
// }

// var string = "jim"

// var cap = capitalize(string)

// console.log(cap)

// /**Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.
// Hint: You'll need to use Math.floor().
// */

// //var stringo = "Hello World"

// //var lengtho = stringo.length

// //console.log(lengtho)

// //var n1 = (Math.floor(lengtho) / 2)

// //console.log(n1)

// //var n2 = Math.floor(n1)

// //console.log(n2)

// stringo ="Hello World"

// function hello(stringo){
//     var lengtho = stringo.length;
//     var n1 = (Math.floor(lengtho)/2);
//     var n2 = Math.floor(n1);
//     return console.log(n2)

// }

// hello(stringo)

// //Write a function that uses slice() and the other functions you've written to return the first half of the given string.

// /** 
// var div = "Airborne"

// var okay = div.split("")
// console.log(okay)
// okay.splice(3,5)
// console.log(okay)
// var one = okay.join("")
// console.log(one)

// var marines = "twentyninepalms"
// var splitmarines = marines.slice(0,6)
// console.log(splitmarines)
// **/

// var marines ="twentyninepalms"

// function divs(marines){
//     var splitmarines = marines.slice(0,6);
//     return console.log(splitmarines);

// }

// divs(marines)

// //Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.
// // Hint: If your string length is odd, use Math.floor() to round down.

// //var country ="lebanon"

// //leb1 = country.slice(0,3)
// //console.log(leb1)

// //console.log(country)

// //leb2 =country.slice(3,7)
// //console.log(leb2)

// //var newleb1 = leb1.toUpperCase()
// //console.log(newleb1)

// //var allTogether = newleb1.concat(leb2)
// //console.log(allTogether)

// var country ="lebanon";

// function improvement(country){

//         var leb1 = country.slice(0,3);
//         var leb2 = country.slice(3,7);
//         var newLeb1 = leb1.toUpperCase();
//         var allTogether = newLeb1.concat(leb2);
//         return console.log(allTogether);

// }

// improvement(country)


// //just a random constuctor function

// function Car(make,model, year){
//     this.make=make;
//     this.model=model;
//     this.year=year;
// }

// var jeep = new Car("Jeep", "Cherokee",2006)
// console.log(jeep)
// console.log(jeep.make)

function flipCoin(){
    return new Promise((resolve,reject)=>{
        const randomNum = Math.floor(Math.random()*2)

        if(randomNum === 0){
            resolve("heads")
        }
        else if(randomNum === 1){
            reject("tails")
        }


    })
}

flipCoin()

.then(response => console.log("resolved" + " " + response))
.catch(error => console.log("rejected" + " " + error))