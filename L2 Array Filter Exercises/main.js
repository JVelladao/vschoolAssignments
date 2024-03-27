//______________________________________________________________________________________________________________________________________________________________________________
//1. Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

const arr = [3,6,8,2]

const result = arr.filter(function(num){
    if(num >= 5){
        return num;
    }
})

console.log(result);

//ES6
const resultt =arr.filter(num => num>=5)
console.log(resultt)
//________________________________________________________________________________________________________________________________________________________________________
//2. Given an array of numbers, return a new array that only includes the even numbers.

const arr2 = [3,6,8,2]

const result2 = arr2.filter(function(num2){
    if(num2 % 2 === 0){
        return true
    }
})

console.log(result2)

//ES6
const resultt2 = arr2.filter(numm2 => numm2 % 2 === 0)
console.log(resultt2)
//___________________________________________________________________________________________________________________________________________________________________
//3. Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

const stringarray = ["dog", "wolf", "by", "family", "eaten", "camping"];

const resultstring = stringarray.filter(function(string){
    if(string.length <=5){
        return true
    }
})

console.log(resultstring)

//_______________________________________________________________________________________________________________________________________________________
//4. Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

const members =[
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
];

let clubarray = members.filter(function(member){
    if(member.member ===true){
        return true;
    }
})

console.log(clubarray)
//_______________________________________________________________________________________________________________________________________________________
//5. Make a filtered list of all the people who are old enough to see The Matrix (older than 18)

const peoples = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
];

const agearray = peoples.filter(function(people){
    if(people.age >=18){
        return true;
    }
})

console.log(agearray)

//ES6

const ageearray =peoples.filter(people => people.age >=18);
console.log(ageearray)