// if statement 

// if(condition){

// }

if(2 == "2"){
    console.log("Executed");
    
}
if(2 === "2"){
    console.log("Executed");
    
}


// const isUserLoggedIn = true
// const temperature = 41
// if(temperature < 50){

//     console.log("Temperature is less than 50");
      
// }else{
//     console.log("Temperature is grater than 50");
    
// }

// <, >, <=, >=, ==, !=, === , !==


const score = 200

if(score > 100){
    const power = "Fly"
    console.log(`User power ${power}`);   
}
// console.log(`User power ${power}`);     // out of scope 




const balance = 1000

// if(balance > 500)
//     console.log("grater than 500");
// else
//     console.log("less than 500");
    
if(balance < 500){
    console.log("less than");
    
}else if(balance < 750){
    console.log("less than 750");
    
}else if(balance < 900){
    console.log("less than 900");
    
}else{
    console.log("less than 12000");
    
}
    

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const LoggedInFromEmail = true

if(userLoggedIn && debitCard && 2 === 2){
    console.log("Allow to buy courses");
    
}

if(loggedInFromGoogle || LoggedInFromEmail){
    console.log("user loggedIn");
    
}



