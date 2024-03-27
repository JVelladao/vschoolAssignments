//1. Write a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.

const numbers = [4, 2, 7, 1, 9, 5]

 numbers.sort(function(a,b){
    return a-b;
 });

 console.log(numbers);

 //2.Write a function that takes an array of strings and returns a new array where each string is converted to uppercase.

 const strings = ['hello','world','javascript']

 const result =strings.map(function(word){
    return word.toUpperCase()
 })

 console.log(result)



 //___________________________________________________________________________________________________________________________________________________

 // Given the following code below, write a function that uses  .map() 
 // to wrap each string/name in the array in an <h1> opening and closing tag.
 //Expected Output: [ "<h1>John</h1>", "<h1>Adam</h1>", "<h1>Amber</h1>" ]
 
 
 
 const people = [ "John", "Adam", "Amber" ] 
 
  const resultx = people.map(function(name){
        return "<h1>" + name + "</h1>"
  })
 
 console.log(resultx)
 
 
 
 
 
 //function peopleElements(arr) 


//console.log(peopleElements(people))