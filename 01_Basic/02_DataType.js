// Datatype 
// Datatype is a defined as which type of data like Number,string,boolean etc


//  Primetive data type

const name = "Sumant Rai"
let age = 20
isLoggedIn = true

const city = null
const state = undefined

const dt = Symbol(565)

// console.table([ typeof name, typeof age, typeof isLoggedIn, typeof city, typeof state, typeof dt])
// console.table([name,age,isLoggedIn,city,state,dt]);



//  Non primetive data type

const myArr = [2, 3, 5, 8, 12, 15]

const myObj = {
    name: "Sumant Rai",
    age: 20,
    isLoggedIn: false,
    city: null
}
 


 const fun = function (num1,num2){
    
    return num1+num2;
    
}

const result = fun(8,6);
// console.log(result);






// console.table([typeof myArr, typeof myObj, typeof fun])

// console.table([myArr,myObj,result]);



// ++++++++++++++++++++++++++++++++++++++++++ Type Conversion ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const num = "34"

console.log(typeof Number(num));


const loginTimes = 8


console.log(String(loginTimes));

const isVote = true

console.log(typeof Number(isVote));

const pin = null

console.log(typeof String(null));

const dob = undefined
console.log(typeof Number(undefined));













