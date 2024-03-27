//1. Sort an array from smallest number to largest

arr=[1,3,5,2,90,20,1.5]

arr.sort(function(a,b){
    return a-b;
});

console.log(arr)

//ES6

arr.sort((a,b) => a-b)
console.log(arr)

//___________________________________________________________________________________________________________________________________________________________
//2. Sort an array from largest number to smallest

arr2=[1,3,5,2,90,20]

arr2.sort(function(a,b){
    return b-a;
});

console.log(arr2)

//ES6

arr2.sort((a,b) => b-a)
console.log(arr2)




//_______________________________________________________________________________________________________________________________________________________
//3. Sort an array from shortest string to longest string

arr3=["dog", "wolf", "by", "family", "eaten"]

arr3.sort(function(a,b){
    return a.length-b.length
});

console.log(arr3)

//ES6

arr3.sort((a,b)=> a.length-b.length)
console.log(arr3)

//___________________________________________________________________________________________________________________________________________________
//4. Sort an array alphabetically
arr4=["dog", "wolf", "by", "family", "eaten"]

arr4.sort(function(a,b){
    
    })



arr4.sort()
//arr4.reverse()

console.log(arr4)

//_____________________________________________________________________________________________________________________________________________________
// 5. Sort the objects in the array by age

arr5=[
{ name: "Quiet Samurai", age: 22 },
{ name: "Arrogant Ambassador", age: 100 },
{ name: "Misunderstood Observer", age: 2 },
{ name: "Unlucky Swami", age: 77 }
];

arr5.sort(function(a,b){
    return a.age -b.age
})

console.log(arr5)

//ES6

arr5.sort((a,b)=> a.age-b.age)
console.log(arr5)