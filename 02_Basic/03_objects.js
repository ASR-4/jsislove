// singleton
// Object.create

// objects literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Sumant Rai",
    "full name":"Sumant Surendra Rai",
   [ mySym]:"mykey1",
    age: 19,
    location: "Mumbai",
    email: "rai@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Mondey", "Tuesday"]

}

// console.log(JsUser.email);    // dot acess 


// console.log(JsUser["email"]);    // string acess
// console.log(JsUser["full name"]);

// console.log( JsUser[mySym]);

JsUser.email = "rai@chatgpt.com"
// console.log(JsUser);

// Object.freeze(JsUser)
JsUser.age = 20

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this["full name"]}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





