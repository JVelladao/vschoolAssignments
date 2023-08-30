const form = document.mom

//submit event-by default-refreshes your page.

form.addEventListener("submit",function(event){
   
    event.preventDefault();     //this is a method, thus you need ().Note:this will be the first command in any submit/form function.
    //alert("It's working");      //to test the submit event...
    const groceryInput = form.grocery.value;  //saves the value inputed into the tag   progression: form(document.mom) to input (tag) to value(actual stuff typed in)
    form.grocery.value = ""; //clears out the form for the user after they click submit. Note we can do this on this line becuase we captured the users input in line 9.
    
    
    //const button =document.createElement('button');
    //button.textContent= 'X';
    //document.getElementById("li1").append(button);
    
    
   // var xray= "X"

    //const button =document.createElement('button');
    //button.textContent = xray;
    //document.getElementById("xnow").append(button);


    const li1 =document.createElement('button');
    li1.textContent= "x"; 

    const li2 =document.createElement('li');
    li2.textContent= groceryInput;
    document.getElementById("list").append(li2);


    document.getElementById("list").append(li1);

   

    

   

  
   
    //setAttribute


})

//here is the issue as clearly defined as I can explain it. I figured out how to produce an X button, the desired gorcery content
// and a bullet point. Now all I need to do is align it all properly and fix an event listener to the button. Onwards and upwards.






