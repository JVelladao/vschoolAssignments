//Below is my book constructor function

function Book(title, author, year){
    this.title= title;
    this.author= author;
    this.year= year;
}

let Book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925)

let Book2= new Book("To Kill a Mockingbird", "Harper Lee", 1960)

console.log(Book2)

//Additional practice
//note: the purpose of a constructor is to create a new object and set of values for any existing object property

function Marine(name, rifle, unit, age){
    this.name= name;
    this.rifle= rifle;
    this.unit= unit;
    this.age= age;
}

let Marine1 = new Marine("Garcia, Hector", "M-16", "1/7", 24)

console.log(Marine1)

//challenge 2:Arrays and Loops




function removeDuplicates(array){
    return [...new Set(array)];
}

var rd = removeDuplicates([1,2,2,2,2,2,2,4])
console.log(rd)

console.log(removeDuplicates([1,2,2,3,4,4,5]))

console.log(removeDuplicates([5,5,5,5,5]))


//Write a function called findEvenNumbersthat takes in an array of numbers
// and returns a new array containing only the even numbers from the input array. 
//Can you implement this function using arrays and loops? Remember to consider the
// condition for determining even numbers.  Use the below code to test your solution.


/*function findEvenNumbers(array){
    for(var i= 0; i< array.length ; i++);
}
  
findEvenNumbers(array1)

var array1 = ([1,2,3,4,5,6,7,8,9,10])

console.log(findEvenNumbers(array1))

*/

// Function to find even numbers
function findEvenNumbers(arr) {
    const evenNumbers = [];//Use array to store even numbers
  
    for (let i = 0; i < arr.length; i++) {//Iterate through array1 array or other passed array
      const num = arr[i];// Set the current item in our array to num variable
      if (num % 2 === 0) {// Divide current number by 2 and if the remainder is 0,
        evenNumbers.push(num);// push the current number in the array to evenNumbers array
      }
    }
  
    return evenNumbers; //Return the results 
  }

  var array1 = ([1,2,3,4,5,6,7,8,9,10])

console.log(findEvenNumbers(array1))






















//array modifier practice

var array1 =[1,2,3,4,5,6,7]

array1.pop()


console.log(array1)

//splicing

//ex-1

var array2= ["apple","orange","bananna","starfruit","kiwi"]

array2.splice(0,3, "mango","blueberry","rasberry")

console.log(array2)

//ex-2

var weaponsArray=["mace","m-4","ak","m-16","kbar"]

weaponsArray.splice(3,2,"sword","crossbow")

console.log(weaponsArray)


//additional practice

//function boilerplates

function sum(num,num){
   return (num + num) 
}

var result = sum(2,2)

console.log(result)

function add(num,num){
    return num + num
}

var add1 = add(9,9)

console.log(add1)

//More constructor functions 
//(remember:the purpose of a constructor is to create new objects and a set of values for any existing object property)

function Soldier(base,mos,name,age){
    this.base=base;
    this.mos=mos;
    this.name=name;
    this.age=age;
}

let Soldier1 = new Soldier("Fort Benning","paratrooper","Schmitty, Mike", 25)
let Soldier2 = new Soldier("Fort Drum","General Infantry","Kruchekovski, Andrev", 28)

console.log(Soldier1)
console.log(Soldier2)

//Remove-duplicates-from-an-array code practice

function removeDuplicates(array){
    return [...new Set(array)];
}

console.log(removeDuplicates([1,2,2,2,3,4,5]))

var redup = removeDuplicates([1,2,2,2,2,2,2,2,3,4,5])
console.log(redup)



