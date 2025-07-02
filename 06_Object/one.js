const myObject = {
    name: "Sumant Rai",
    age: 20,
    email: "rai@gmail.com",
    isLoggedIn: true
}

for (const key in myObject) {
   console.log(key,":",myObject[key]);
   
}