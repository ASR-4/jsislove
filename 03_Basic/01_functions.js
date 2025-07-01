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



