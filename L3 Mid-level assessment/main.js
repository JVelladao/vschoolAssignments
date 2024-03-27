/**


Question #1:

You are given an array a containing integers. 

Your task is to implement the solution function to sort the array in ascending order, while preserving the original index positions of -1 values.

Write a function solution(a) that takes in an array a and returns a new array with the following conditions:

1. All non -1 values in the array should be sorted in ascending order.

2. The -1 values should retain their original index positions in the sorted array.

 */

const array = [-1, 190, 150, 170, -1, -1, 160, 180]
     

function solution(arr){

    const filtered = arr.filter(num => num !== -1).sort(function(a,b){
        return a -b;
    })

    for (let i =0; i < arr.length; i++){
        if (arr[i] !== -1){
            arr[i] = filtered[0]
            filtered.splice(0,1)
        }
    }

    return arr

   
}


console.log(solution(array));

/**
 
Question #2:

Write a JavaScript function called **`countVowels`** that takes a string as input and counts the number of vowels 
(a, e, i, o, u) in the string.

The function should return the count.

Implement the **`countVowels`** function using either the provided example solutions or your own solution.

 */

const input = "Let's get the job done."

function CountVowel(input){
    let count = 0
    const vowels = ["a", "e", "i", "o", "u"]
    const arr = input.toLowerCase().split("")
    for (let i =0; i<arr.length; i++){
        if (vowels.includes(arr[i])) {
            count ++
        }
    }
    
    // const count = input.match(/[aeiou]/gi).length

    return count;
}

console.log(CountVowel(input))

