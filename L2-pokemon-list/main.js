const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState===4 && xhr.status === 200){
        const JSONdata = xhr.responseText;
        const data = JSON.parse(JSONdata);
        console.log(data.objects[0].pokemon);
        showData(data.objects[0].pokemon);
    };
};


function showData(arr){

     for(let i = 0 ; i<arr.length ; i++){
       const h1 =document.createElement('h1'); //create
       const h2 =document.createElement('h2');

       h1.textContent =arr[i].name;          //populate & set
       h2.textContent =arr[i].resource_uri;

       document.body.append(h1);             //placing on browser
       document.body.append(h2);

    };
}


