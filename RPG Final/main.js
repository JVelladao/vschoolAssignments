//while loops

//let count =1; //accumulator

//while (count <=5){
    //console.log("Current Count", count);
    //count++;
//}

//for(let i = 1 ; i<=5 ; i++){
   // console.log("current index",i);
//}

//using loops for data processing **iterating through [arrays] of numbers

//const numbers =[1,2,3,4,5];

//let sum=0;

//for (let i=0; i<numbers.length; i++){
   // sum += numbers[i];
//}

//console.log("sum of numbers:", sum);

//searching and filtering (finding the first even number)**

//const numbers2 =[1,3,5,7];
//let foundEvenNumber =false; //boolean-keep looping untill this becomes false

//for (let i=0; i < numbers2.length; i++) {
    //if(numbers2[i] % 2===0){
        //console.log("First even number found:", numbers2[i]);
        //foundEvenNumber =true;
       // break;
    //};

//};

//if(!foundEvenNumber){
    //console.log("No Even Numbers Found");
//};


const numbers2= [1,3,5,7,8,10];

let foundEvenNumber =false;

let i = 0;

while (i < numbers2.length){
    if (numbers2[i] % 2 ===0){
        console.log("First Even Number Found", numbers2[i]);
        foundEvenNumber=true;
        break;
    }
    i++;
}



