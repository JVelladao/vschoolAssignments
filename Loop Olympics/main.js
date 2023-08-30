//Preliminaries: 1. Write a for loop that prints to the console the numbers 0 through 9.

var arr = []

for (var i = 0 ; i<9; i++){
    console.log(arr.push(i));
}

//Preliminaries: 2. Write a for loop that prints to the console 9 through 0.

var nums = []

for (var i = 9 ; i >= 0; i--){
    nums.push(i);
    }

    console.log(nums)

//Preliminaries: 3. Write a for loop that will push every other fruit to an array.
//const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]


//               0         1        2       3      4      5
var fruit = ["banana", "orange", "apple","kiwi","pear","peach"]

for (i = 0 ; i < fruit.length ; i++){
    if([i] % 2 !== 0){
        console.log(fruit[i]);
    }
}

//Bronze: 1. Write a loop that will push the numbers 0-9 to an array 

var pin = []

for(var i = 0 ; i <10 ; i++){
    pin.push(i);
}

console.log(pin)

//Bronze: 1B Write a loop that will push the numbers 9-0 to an array (in that order)

var yes = []

for( i=9 ; i>=0 ; i--){
    yes.push(i)
}

console.log(yes)

// Bronze: 2. Write a for loop that prints to the console only even numbers 0 through 100.

var evens = []

for(var i = 0 ; i<100 ; i++){
    evens.push(i);
    if([i] % 2 === 0){
        console.log(evens[i])
    }
}

// Bronze: 3. Write a for loop that will push every other fruit to an array.
//const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

var frutas = []
//                   0        1         2       3        4       5
const frutees = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

for (var i= 0 ; i <frutees.length ; i++){
    if(i % 2 !==0){
        console.log(frutees[i]);
        frutas.push(frutees [i]);
    }
}

console.log(frutas)








