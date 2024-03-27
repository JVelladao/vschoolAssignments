//1.Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type [number]

function sum(a,b){
    //check data types first and throw error
    try{
        
        if(typeof(a) !== "number" || typeof(b) !== "number"){
            throw new Error("This is an error")
            
        };
        
    }
    catch(err){
        console.log(err)
    }
    return a + b;
};

let answer = sum(5 ,6);

//console.log(answer)

//______________________________________________________________________________________________________________________________________________________
//2.Given a user object, write a function called login that takes a username and a password as parameters. Throw an error if either of them
// do not match. Otherwise log to the console a message saying, "login successful!"

var user = { name: "sam", password: "123abc"}

function login(username,password){
    try{
        if(username !== "sam" || password !== "123abc"){
            throw "This is the wrong guy"
        }
        console.log("login successful!")
    } catch (err){
        console.log(err);
    }
    

}


credentials = login("sam", "123abc")


