// primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')


console.log(id === anotherId);

const bigNumber = 45362819348763234764n


//Reference(Non primitive)

// Array, Objects, Functions


const myFriends = ["Mukesh", "Shubhangi", "Gokul", "Ankit"]

const myObj = {
    name: "Sumant Rai",
    age : 20
}

const myFunction = function(){
    console.log("Hello Javascript");
    
}

console.log(typeof bigNumber);
console.log(typeof scoreValue);
console.log(typeof outSideTemp);

console.log(typeof myFunction);



