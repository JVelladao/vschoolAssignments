function getData(){
    axios.get("https://api.vschool.io/joev/todo/")
    .then(response => {
        handleData(response)  
    })
    .catch(error => console.log(error))
    
}
getData()
const listDiv = document.getElementById('listDiv')
function handleData(response){
    clearList()
    for(let i=0 ; i < response.data.length; i++){
        const div = document.createElement('div')
        const h1 = document.createElement('h1');
        // const check =document.createElement('input');
        // check.type='checkbox';
        // check.name='check';
        h1.textContent=response.data[i].title +" | " + "Completed? -- "+ response.data[i].completed;
        
        //document.body.append(h1, check)
        div.append(h1)
        
        // img
        const img = document.createElement('img')
        img.src= response.data[i].imgUrl
        div.append(img)
        
        
        //checkbox element goes here
        const checkBox = document.createElement('input')
        checkBox.type = 'checkbox'
        
        
        if(response.data[i].completed === true){
            // strike-through our displayed object
            h1.style.textDecoration = "line-through"
            checkBox.checked = true
        }

        div.append(checkBox)
        // put req
        checkBox.addEventListener("click", function(){
        
            const updates = {
                completed: !response.data[i].completed
            }
            
            axios.put("https://api.vschool.io/joev/todo/" + response.data[i]._id, updates)
            .then(response => getData())
            .catch(error => console.log(error))        
        })
    
        //Delete Request
        // 0.) create and append a button to the dom
        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'X'
        div.append(deleteButton)

    
    //         1.) Clicking the button fires an event. (eventlistnere)
        deleteButton.addEventListener('click', function(){
    
            axios.delete("https://api.vschool.io/joev/todo/" + response.data[i]._id)
            .then(response => getData())
            .catch(error => console.log(error))
        })
    
    //         2.)That event triggers the delete request
    listDiv.append(div)
    };

}

function clearList(){
   
    while(listDiv.firstChild){
        listDiv.removeChild(listDiv.firstChild)
    }
}
//PII-Post Request

const toDoForm =document.toDoForm

toDoForm.addEventListener("submit", function(event){

    event.preventDefault() //

    const newToDo ={
        title: toDoForm.title.value,
        description: toDoForm.description.value,
        price: toDoForm.price.value,
        imgUrl: toDoForm.imgUrl.value,
        //checkbox: toDoForm.checkbox.value this command will not work because it doesn't sync up with the API property model.
    }

    axios.post("https://api.vschool.io/joev/todo/", newToDo)
    .then(response => getData())
    .catch(error => console.log(error))

})


//PIII-Put Request
















/**
 
Here's what needs to happen:

First off, I need to find a way to get the checkbox to showup with the to objects. Then, upon finishing that,
I have to knock out the following 3 bullets--

1.) Clicking the checkbox fires an event.

2.)That event triggers the post request

3.) The post request will change the "completed Boolean" and change it from false to true, which will cross off the toDO.


*/




//when the user clicks the checkbox (event), the following put request needs to fire.









