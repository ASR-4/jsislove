const user = {
    username: "Sumant",
    price: 999,

    welecomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }

}

// user.welecomeMessage()
// user.username = "Shubhangi"
// user.welecomeMessage()

// console.log(this);



// function chai(){
//     let username = "Rishu"
//     console.log(this.username);
    
// }

// chai()


// const chai = function(){
//     let username = "Rishu"
//     console.log(this.username);
    
// }

// chai()


// const chai = () => {
//     let username = "Rishu"
//     console.log(this);
    
// }
// chai()



// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }

// console.log(addTwo(3,4));

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Sumant"})

console.log(addTwo(3,4));


const myArr = [2, 5, 7, 9, 1]

// myArr.forEach(() => ())


