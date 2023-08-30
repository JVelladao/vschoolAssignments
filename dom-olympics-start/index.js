

//BRONZE

//First Directive: applying Text Content to Header

var firstHeader = document.getElementById("header")
firstHeader.textContent="Java Script Made This!!"
firstHeader.style.display="block"


//Changing title to green

firstHeader.style.color="green"

//"Your Name Here"...

var newSpan= document.createElement ("span")
newSpan.textContent="[Your Name Here]"
firstHeader.append(newSpan)
newSpan.style.display="block"
newSpan.style.color="tan"
newSpan.style.fontSize="10px"






//"Wrote the JavaScript"...

var newSpan1 =document.createElement ("span")
newSpan1.textContent=" wrote the JavaScript"
newSpan.append(newSpan1)
newSpan1.style.display="inline"
newSpan1.style.color="black"
newSpan1.style.fontSize="15px"








//Silver--Text Change
var firstDiv = document.getElementById("1div")
firstDiv.textContent="this is now something happy"
firstDiv.style.backgroundColor="green"

var secondDiv = document.getElementById("2div")
secondDiv.textContent="I would be delighted to speak with you"
secondDiv.style.backgroundColor="green"

var thirdDiv =document.getElementById("3div")
thirdDiv.textContent="You are a farmer"
thirdDiv.style.backgroundColor="green"

var fourthDiv = document.getElementById("4div")
fourthDiv.textContent="I am indeed a farmer"
fourthDiv.style.backgroundColor="green"

//Silver--Clear Event Listener

var mother = document.getElementById("mother")


var clearButton = document.getElementById("clear-button")
clearButton.addEventListener("click",function(){
mother.removeChild(firstDiv),mother.removeChild(secondDiv),mother.removeChild(thirdDiv),mother.removeChild(fourthDiv)
})


document.getElementById("theme-drop-down").onChange