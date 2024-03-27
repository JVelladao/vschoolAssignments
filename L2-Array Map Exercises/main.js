// 1. Make an array of numbers that are doubles of the first array

//here is my solution

var arr = [1,2,3,4,5,6,7,8]

const tt = arr.map(function(numero){
    return numero +10;
})

console.log(tt)




//const result =arr.map(function(num){
    //return num *2;
//});

//console.log(result);

//here is the path V School takes

array=[2,5,100]
const result2 = array.map(function(arr){
    return arr * 2;
})

console.log(result2);

//2. Take an array of numbers and make them strings

var arr3 = [1,2,3,4,5,6,7,8]

const result3 = arr3.map(function(number){
    return number.toString()
})

console.log(result3)



//3. capitalize the first letter of each name and make the rest of the characters lowercase

var arr4 = ["john", "JACOB", "jinGleHeimer", "schmidt"]

var result4 = arr4.map(function(nombre){
    return nombre[0].toUpperCase() + nombre.slice(1).toLowerCase()
    
})



console.log(result4)








//const result4= arr4.map(function(number1){
    //return number1[0].toUpperCase() + number1.slice(1).toLocaleLowerCase()
    
//});



//4. Make an array of strings of names ([array of objects])

var arname = [{
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

let reesult = arname.map(function(player){
    return player.name
})

console.log("Burbank Starting 5:" +" " + reesult)

//5. Make an array of strings of the names saying whether or not they can go to The Matrix

var arname2 = [{
    name: "Artem",
    age: 8
},{
    name:"Varton",
    age:18

},{
    name:"Argen",
    age:9
},{
    name:"Vehanz",
    age:9

},{
    name:"Giborg",
    age:2

}]

let reeesult = arname2.map(function(player1){
    if(player1.age < 18){
        return player1.name + "is younger than 18 so he cant see the movie"
    } else {
        return player1.name + "is of age and can see the movie"
    }
})

console.log(reeesult)





//let reeesult = arname2.map(function(viewer){
   // if(viewer.age >= 10){
     //   return viewer.name +" "+ "can see the movie";
    //} else {
       // return viewer.name + " " + "is under age, so can't view";
   // }
//})

//console.log(reeesult);

//6. make an array of the names in h1s and the ages in h2s

var arname3 = [{
    name: "Artem",
    age: 8
},{
    name:"Varton",
    age:18

},{
    name:"Argen",
    age:9
},{
    name:"Vehanz",
    age:9

},{
    name:"Giborg",
    age:2

}]

let resulllt = arname3.map(function(tag){
    return "<h1>" + tag.name + "</h1>"  + "<h2>" + tag.age + "</h2>"
})

console.log(resulllt)

