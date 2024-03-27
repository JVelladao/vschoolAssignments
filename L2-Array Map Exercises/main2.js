// 1. Make an array of numbers that are doubles of the first array

var arr = [1,2,3,4,5,6,7,8]

const result = arr.map(function(num){
    return num+10;
})


console.log(result)

//2. Take an array of numbers and make them strings

var arr2 = [1,2,3,4,5,6,7,8]

const result2 = arr2.map(num => num.toString())

console.log(result2)



//3. capitalize the first letter of each name and make the rest of the characters lowercase

var arr3 = ["john", "JACOB", "jinGleHeimer", "schmidt"]

const result3 = arr3.map(function(name){
    return name[0].toUpperCase() + name.toLowerCase().slice(1)
})

console.log(result3)








//4. Make an array of strings of names ([array of objects])

var arr4 = [{
    name: "Artem",
    age: 18
},{
    name:"Varton",
    age:17

},{
    name:"Argen",
    age:16
},{
    name:"Vehanz",
    age:19

},{
    name:"Giborg",
    age:17

}]

const result4 = arr4.map(function(name){
    return name.name;
})

console.log(result4)



//5. Make an array of strings of the names saying whether or not they can go to The Matrix

const result5 = arr4.map(function(player){
    if(player.age >= 18){
        return  `${player.name} is of age and can go see the Matrix `
    } else{
        return `${player.name}  is too young to see the movie`
    }
})

console.log(result5)






//6. make an array of the names in h1s and the ages in h2s

const result6 = arr4.map(function(player){
    return ` <h1> ${player.name} <h1> <h2> ${player.age} <h2>`
})

console.log(result6)