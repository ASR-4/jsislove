// const tinderUser = new Object()  // singleton 

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Gaurav"
tinderUser.isLoggedIn = true

// console.log(tinderUser);

const regularUser = {
    email: "rai@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sumant",
            lastname: "Rai"

        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "A",
    2: "B",
    3: "C"
}
const obj2 = {
    4: "I",
    5: "J",
    6: "K"
}
const obj4 = {
    7: "X",
    8: "Y",
    9: "Z"
}

// const obj3 = {obj1, obj2}    // Not works properly

// const obj3 = Object.assign({}, obj1, obj2, obj4)  

const obj3 = {...obj1, ...obj2, ...obj4}

// console.log(obj3);


const users = [
    {
        id: 1,
        email: "user1@gmail.com"
    },
    {
        id: 2,
        email: "user2@gmail.com"
    },
    {
        id: 3,
        email: "user3@gmail.com"
    }
]

users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));




const course = {
    courseName: "js in Hindi",
    price: "999",
    courseInstructor: "Sumant"
}

const {courseInstructor: Instructor} =course
console.log(Instructor);

// {
//     "name": "sumant",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {},
// ]