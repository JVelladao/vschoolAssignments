//Applying variables to each form 

var goombahForm =document.gb;

var bobsform =document.bes;


var cheepsform=document.nms;

let arr=[]



//adding event listeners to each form 

//goombahs



goombahForm.addEventListener("submit",function(event){
    event.preventDefault();
    //alert("yo yo yo");
    let goomtot= goombahForm.goombahname.value;
    console.log(goomtot);
    let thot = document.getElementById("goombahprice");
    thot.append(" " + goomtot * 5);  //okay, we got it to produce on the DOM. Now how do we get it to go away??

    arr.push(" " + goomtot * 5);
    console.log(arr);

    var product = 1
    for(let i=0 ; i < arr.length; i++){
        product += +arr[i];
    };

    let totalheader = document.getElementById("totalheader")
    totalheader.append(product - 1 + "coins");

});



//bob-ombs

bobsform.addEventListener("submit",function(event){
    event.preventDefault();
    //alert("yo yo yo");
    let bobstot= bobsform.bobname.value;
    console.log(bobstot);
    let boby=document.getElementById("bobprice");
    boby.append(" " + bobstot * 7);

    arr.push(" " + bobstot * 7);
    console.log(arr);

    var product = 1
    for(let i=0 ; i < arr.length; i++){
        product += +arr[i];
    };

    let totalheader = document.getElementById("totalheader")
    totalheader.append(product - 1 + "coins");

});


//cheaps

cheepsform.addEventListener("submit",function(event){
    event.preventDefault();
    //alert("yo yo yo");
    let cheepstot= cheepsform.cheepname.value;
    console.log(cheepstot);
    let chepies=document.getElementById("cheapsprice");
    chepies.append(" " + cheepstot * 11);

    arr.push(" " + cheepstot * 11);
    console.log(arr);


    var product = 1
    for(let i=0 ; i < arr.length; i++){
        product += +arr[i];
    };


    //for total

    let totalheader = document.getElementById("totalheader")
    totalheader.append(product - 1 + "coins");

    
});


//reset button??





/*
Questions for 4 October 2023:

(1) Notice how you can put a single number in an input field. Good. But then when I go to put in another number.
 The first stays and it creates a long line. This is also problematic because the additional numbers get added to my array which 
 messes up the total.
 
 So here's the question: how do you put a number in an input field then automatically replace it when a new one gets entered? That
 would also imply the removal of the old number from an array and the addition its replacement.

(2) How do I reset everything in the calculator? At the end of the initial calculation, if I don't manually reset everything, all the numbers
stay in the calculator.



To do:

-eliminate string effect in indivual bad guys sections and in the total section
-reset the calculator (reset button perhaps???)


*/