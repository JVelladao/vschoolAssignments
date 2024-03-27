// axios.get("https://swapi.dev/api/people/1")
// .then(response => console.log(response.data.name))
// .catch(error => console.log(error))


const arr1 = [ 1, 3, 5 ]
const arr2= [ 2, 4, 6 ]
let arr3 = [ ]
//arr3.push(...arr1,...arr2)

arr3 = [...arr1,...arr2]



console.log(arr3)
//const newArray = [...arr1,...arr2]

//console.log(newArray)