var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

console.log("fruit: " + fruit);
console.log("vegetables: " + vegetables);

//Remove the last item from the vegetable array
vegetables.pop()
console.log(vegetables)

//Remove the first item from the fruit array

fruit.shift()
console.log(fruit)

//Find the index of Orange

var indexOf = fruit.indexOf("orange")
console.log(indexOf)

//Add the above number to the end of the fruit array

fruit.push(1)

console.log(fruit)

//Use the length property to find the length of the vegetable array

var smitty = (vegetables.length)

console.log(smitty)

//Add the above result to the end of the vegetable array

vegetables.push(3)

console.log(vegetables)

 //Put the two arrays together into one array. Fruit first. Call the new Array "food."
food = fruit.concat(vegetables)

console.log(food)

//Remove two elements from your array starting at index 4 with one method.

food.splice(4,2)
console.log(food)

//Reverse your array

food.reverse()

console.log(food)

//turn the array into a string then return it


 



console.log(food)

