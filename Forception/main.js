/**
Write a function that takes two arrays as parameters. 
The first array will be an array of people's names, and the second array will be the alphabet. 
Using a for loop within a for loop, create and return array that looks like this:

function forception(people, alphabet){
    // your code here
}
// Output:
["Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
 "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jacob:", "A", "B",
"C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
"T", "U", "V", "W", "X", "Y", "Z", "Jingle:", "A", "B", "C", "D", "E", "F", "G", "H",
 "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
 "Heimer:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", 
 "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Schmidt:", "A", "B", "C", "D", "E", "F", "G", 
 "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
*/

var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

//new alpha = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]

alphabet.split("")
var newAlpha = alphabet.split("")

//console.log(newAlpha)

var alphaName = []

function forception(people, newAlpha) {
    for (var i = 0; i < people.length; i++) { ///everytime you bump in a notch you create a parent/child
        alphaName.push(people[i])
        for (var j = 0; j < newAlpha.length; j++){
            alphaName.push(newAlpha[j])
        };
    };
    console.log(alphaName)

}

var forcep = forception(people, newAlpha)
