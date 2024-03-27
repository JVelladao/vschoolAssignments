//1. Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

const arr = [2,3,4,5,6,7,8,9]

const result = arr.filter(function(num){
    if(num>= 5){
        return true;
    }
})

console.log(result)




//2. Given an array of numbers, return a new array that only includes the even numbers.


const arr2 = [2,3,4,5,6,7,8,9,10, "jim","mark"]

const result2 = arr2.filter(function(num){
    if(num %2 === 0){
        return true;
    }
})

console.log(result2)


//find(), findIndex()


const anotherResult = arr2.find(function(num){
    if(num[0] === "j"){
        return true
    }
})

console.log(anotherResult)

const anotherResult2 = arr2.findIndex(function(num){
    if(num[0] === "j"){
        return true;
    }
})

console.log( anotherResult2)

//3. Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length


const arr3 = ["marked", "jj", "Deluigi", "note"]

const result3 = arr3.filter(function(name){
    if(name.length <=5){
        return true;
    }
})

console.log(result3)











//4. Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

const members =[
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
];

const result4 = members.filter(function(member){
    if(member.member === true){
        return member;
    }
})

console.log(result4)

//5. Make a filtered list of all the people who are old enough to see The Matrix (older than 18)

const peoples = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
];

const result5 = peoples.filter(function(person){
    if(person.age >= 18){
        return person;
    }
})

console.log(result5)

//.map(),.filer(),.find(),.findIndex(), .some(), .every() ----> both return booleans, .sort() --- > mutates the OG ARRAY