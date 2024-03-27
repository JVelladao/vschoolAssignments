document.querySelector("button").addEventListener("click", clickCounter) //query selector selects the very first item in the page in ""

document.addEventListener("DOMContentLoaded", showValue) //On refresh/page load it will run showValue


var input = document.getElementById("apple");
let product = 0

function showValue() {
    // solition 2 & 3
    input.value = `Current count = ${localStorage.getItem("count") || 0}`//sets input value to either 0 or the other thing
    //  input.value....solution 1
    // input.value = `Current count = ${localStorage.clickcount || 0}` 
}

function clickCounter() {
    // solution 1
    // if (localStorage.clickcount) {
    //     localStorage.clickcount = Number(localStorage.clickcount) + 1;
    //     console.log(5)
    //   } else {
    //     localStorage.clickcount = 1;
    //   }
    // solution 3
        product++
        localStorage.setItem("count", product)
    // solution 2
    // if (localStorage.getItem("count")) {
    //     product++
    //     localStorage.setItem("count", product)
    //     console.log(5)
    //   } else {
    //     product++
    //     localStorage.setItem("count", product);
    //     console.log("initialize")
    //   }
      showValue()
}

// button.addEventListener("click", function(event){
//     console.log("clicked");
//     product++
//     localStorage.setItem("count", product)
//     document.getElementById("inc").value = localStorage.getItem("count")
//     console.log(product)
       
//         //++product;
// //    document.getElementById("inc").value = 1 + product++;
// //    localStorage.setItem("count", product);
// //    const count = localStorage.getItem("count")
    
// });

//localStorage.setItem("count", product);
//localStorage.getItem("count")


// 1. increment count
// 2. save to localstorage
// 3. display localstorage

