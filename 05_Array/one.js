const myArray = ["Sumant", "Shubhangi", "Subhash","Rishu"]

for (const element of myArray) {
    console.log(element);
    
}


const arrObject = [
    {
        name:"Sumant Rai",
        age: 20
    },
    {
        name:"Shubhangi Mishra",
        age: 20
    },
    {
        name:"Subhash",
        age: 26
    },
    {
        name:"Rishu Rai",
        age: 18
    },
]

arrObject.forEach((item) =>{
    console.log(item.age);
    
})