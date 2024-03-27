//ARRAY REDUCE EXERCISES

//1. Turn an array of numbers into a total of all the numbers

nums=[1,2,3,4,5,6]

const result1 = nums.reduce(function(final, num){
    final += num;
    return final;
},0)

console.log(result1)

//____________________________________________________________________________________________________________________________________________________
//2. Turn an array of numbers into a long string of all those numbers 1,2,3, to "123" 

numbers = [1,2,3]

const result2= numbers.reduce(function(final,number){
        final += number
        return final
},"Hi ")

console.log(result2)


//____________________________________________________________________________________________________________________________________________________
//3.Turn an array of voter objects into a count of how many people voted

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const result3 =voters.reduce(function(final, voter){
    if(voter.voted){
        final++;
    }
    return final
},0)

console.log(result3)

//____________________________________________________________________________________________________________________________________________________
//4. Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once (RETURN)

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

const result4 = wishlist.reduce(function(final, wisher){
    
        final += wisher.price
    


    return final;
}, 0)

console.log(result4)
//_________________________________________________________________________________________________________________________________________________________
//5. Given an array of arrays, flatten them into a single array (RETURN) // ["1", "2", "3", true, 4, 5, 6];

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

const result5 = arrays.reduce(function(final,array){

    
    return final.concat(array);

    
},[])

console.log(result5)

//________________________________________________________________________________________________________________________________________________________
/* 6. Given an array of potential voters, return an object representing the results of the vote**

Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of
 each of those age ranges actually voted. The resulting object containing this data should have 6 properties. 
 See the example output at the bottom.
*/

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const result6 = voters.reduce(function(final,voter){
    if(voter.age <=25){
        final.totalyoungvoters++;
        
    }else if(voter.age >=26 && voter.age <= 35){
        final.totalmidvoters++;
    } else if(voter.age >=36){
        final.totaloldvoters++;
    }
    if(voter.age<=25 &&voter.voted){
        final.totalyoungvotersvoted++;
    } else if(voter.age >=26 && voter.age <= 35 && voter.voted){
        final.totalmidvotersvoted++;
    } else if(voter.age >=36 && voter.voted){
        final.totaloldvotersvoted++;
    }
    return final
}, {
    totalyoungvoters: 0,
    totalmidvoters: 0,
    totaloldvoters: 0,
    totalyoungvotersvoted:0,
    totalmidvotersvoted: 0,
    totaloldvotersvoted:0
})

console.log(result6)