/*
 
You should use multiple array methods to solve these problems. Don't use `for` loops!
Using the provided `peopleArray`, write a function that:

1. Returns a list of everyone older than 18, which is


2. sorted alphabetically by last name, and where


3. each name and age is embedded in a string that looks like an HTML `<li>` element.

Output:
 [
     "<li>Kyle Mooney is 27</li>",
     "<li>Sarah Palin is 47</li>",
     "<li>Rick Sanchez is 78</li>",
     "<li>Morty Smith is 29</li>",
     "<li>Lev Tolstoy is 82</li>"
 ]

*/

var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

const resultAge = peopleArray.filter( function (person){
    if(person.age >= 18){
        return true;
    };
})

console.log(resultAge)




resultAge.sort(function(a,b){
    return a.lastName.localeCompare(b.lastName) 
});
    

console.log(resultAge)

const finalArray =resultAge.reduce(function(final,person){
    
        final.push("<l1> " + person.firstName + " " + person.lastName + " " + "is " + person.age + " years old </li>")

    
    return final
}, [])

console.log(finalArray)



//____________________________________________________________________________________________________________________________________________________
//extra credit

//1. Create another array of one or more individuals and add it to the original array.

var newarr = [
    {firstName: "Rick",
    lastName: "Dinger",
    age: 45}
]

peopleArray.unshift(newarr);
    
console.log(peopleArray)

//2.Create a function that filters out all people who's last names end with "y" or "a" and save those people in another array.

const nuevoArray = peopleArray.filter(function(peep){
    if(peep.firstName==="Frank" || peep.firstName === "Kyle" || peep.firstName === "Lev"){
        return peep
    }
});

console.log(nuevoArray)

//3.Remove the second individual from the array.

const aaaa = nuevoArray.filter(function(peep){
    if(peep.age===12 || peep.age ===82){
        return true
    }

})

console.log(aaaa)

//4. Return the array in reverse order.

aaaa.sort(function(a,b){
    return a.lastName.localeCompare(b.lastName)
})

console.log(aaaa)