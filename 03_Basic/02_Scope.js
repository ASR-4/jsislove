var c = 300
let a = 300

if (true) {

    let a = 10
    const b = 20
    // var c = 30
    // console.log("Inner: ",a);
    
}


// console.log(a);
// console.log(b);
// console.log(c);


// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }


function one(){
    const username = "Sumant"

    function two(){
        const website = "Youtube"
        console.log(username);
        
    }
//     // console.log(website);
//    two() 

}

// one()


if(true){
    const username = "Shubhangi"
    if(username === "Shubhangi"){
        const website = "Youtube"
        console.log(username + website);  

    }
    // console.log(website);    // Error
    
}
// console.log(username);      // Error



// ++++++++++++++++++++++++++++++++++++++Intersting+++++++++++++++++++++++++++++++++++++++++++++++


console.log(addone(5));           // No error

function addone(num){
    return num + 1
}


// console.log(addTwo(8));       // Error


const addTwo = function(num){
    return num + 2
}

console.log(addTwo(8));


