function sayMyName(){
    console.log("Sumant Rai");
    
}
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
    
}
const result = addTwoNumbers(4, 5)
// console.log("Result: ", result);

function logingUserMessage(username = "Sumant"){
    if(username === undefined){
        console.log("please enter a username");
        return   
    }
    return `${username} just logged in `
    

}
// const message = logingUserMessage("Shubhangi")
// const message = logingUserMessage()               // undefined
const message = logingUserMessage("Diksha")               // undefined
console.log(message);




function calCulateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calCulateCartPrice(100, 200, 300, 400, 2000));


const user = {
    username: "Sumant Rai",
    price: 199

}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handleObject(user)
handleObject({
    username : "Shubhangi",
    price: 400
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]

}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300, 400]));

