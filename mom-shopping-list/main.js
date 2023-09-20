//creating form variable using name property 
const form = document.mom

//submit event-by default-refreshes your page.

// const li3 =document.createElement('button');
// li3.textContent="X";

// submit event listener 
form.addEventListener("submit",function(event){
   
    event.preventDefault(); 

    const groceryInput = form.grocery.value;  
    form.grocery.value = "";  
    
   // create and append a li as a child to the listElement
    const li2 = document.createElement('li');

    let listElement = document.getElementById('list')
    console.log('list children', listElement.children)

    li2.textContent= "  " + groceryInput;
    listElement.appendChild(li2);
    // Add classname



   const button =document.createElement('button');
   button.textContent="X";
   li2.appendChild(button);

   


   button.addEventListener("click", function(event){
      console.log("delete test");
      li2.remove();

      //li2.remove();
     //this.removeChild(li2);
   });





   
   });

/*
let todoArr = []

submit button 
- add the todo to array
- display an array using the list items in todoArr

delete todo button
- delete the todo
- display the updated array

display function
- clears old todos
- loops the todoArra
   - todoArr for loop that creates elements for each item in todoArr.length


A function that creates elements
- create a list element for the item that's sent
- 
*/

   

   




















    
  




//here is the issue as clearly defined as I can explain it. I figured out how to produce an X button, the desired gorcery content
// and a bullet point. Now all I need to do is align it all properly and fix an event listener to the button. Onwards and upwards.






