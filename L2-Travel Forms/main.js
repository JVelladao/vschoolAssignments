
const form = document.myForm

let arr = []

form.addEventListener("submit",function(event){
    event.preventDefault();
    //alert("clicked");
    //console.log(form.firstname.value);
    arr.push(" "+ "Name:" +" " + form.firstname.value +" " + form.lastname.value + " ");
    
    arr.push(" " + "Gender:" + " " + form.gender.value + " ");

    arr.push( " " + "Destination:" +" " + form.destination.value + " ");
  
    

    for(let i = 0 ; i < form.restricted.length; i++){
        if(form.restricted[i].checked){
            arr.push(" "+ "Dietary Restrictions:" + " " + form.restricted[i].value)
        }
    };

    console.log(arr);
    alert(arr);

});


//for(let i = 0 ; i < form.restricted.length; i++){
    //console.log(form.restricted[i].checked)
//}
