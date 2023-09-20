var nav1 = document.getElementById("nav1");
console.log(nav1.textContent);

nav1.addEventListener("click",function(event){
    console.log("clicked");
})

//----------------------------------------------------------------------------

var nav2 = document.getElementById("nav2");
console.log(nav2.textContent);

nav2.addEventListener("click",function(event){
    console.log("clicked");
})

//-----------------------------------------------------------------------------

var nav3 = document.getElementById("nav3");
console.log(nav3.textContent);

nav3.addEventListener("click",function(event){
    console.log("clicked");
})

//Below are my event listeners 

var img1 =document.getElementById("img1");
img1.addEventListener("click",function(event){
    console.log("the image has been clicked");
});

var img2 =document.getElementById("img2");
img2.addEventListener("click",function(event){
    console.log("the image has been clicked");
});

var img3 =document.getElementById("img3");
img3.addEventListener("click",function(event){
    console.log("the image has been clicked");
});
