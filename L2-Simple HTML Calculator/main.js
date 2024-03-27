

//addition


var adFo = document.addform;


adFo.addEventListener("submit",function(event){   //when the submit even goes off, the function fires
    event.preventDefault();
    //alert("it work");

    const firstAddBoxValue = adFo.addBox1.value;
    const secondAddBoxValue =adFo.addBox2.value;
    adFo.addBox1.value="";
    adFo.addBox2.value="";

    const addedTogether = +firstAddBoxValue + +secondAddBoxValue;

    console.log();

    document.getElementById("addAnswer").append(addedTogether);
    

})
   
    
//subtraction

var suFo = document.subtractform;


suFo.addEventListener("submit",function(event){   //when the submit even goes off, the function fires
    event.preventDefault();
    //alert("it work");

    const firstSubBoxValue = suFo.subBox1.value;
    const secondSubBoxValue =suFo.subBox2.value;
    suFo.subBox1.value="";
    suFo.subBox2.value="";

    const subbed = firstSubBoxValue - secondSubBoxValue;

    console.log();

    document.getElementById("subAnswer").append(subbed);

});


//multiplication

var muFo = document.multiplyform;


muFo.addEventListener("submit",function(event){   //when the submit even goes off, the function fires
    event.preventDefault();
    //alert("it work");

    const firstMultBoxValue = muFo.multBox1.value;
    const secondMultBoxValue =muFo.multBox2.value;
    muFo.multBox1.value="";
    muFo.multBox2.value="";

    const multiplied = firstMultBoxValue * secondMultBoxValue;

    console.log();

    document.getElementById("multAnswer").append(multiplied);

    
});















