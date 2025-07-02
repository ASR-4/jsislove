// for of

// ["", "", ""]
// [{}, {}, {}]

const myArr = [1, 2, 3, 4, 5, 6, 7]

for (const element of myArr) {

    // console.log(element);
   
}


const greetings = "Hello World!"

for (const element of greetings) {
    // console.log(`Each element is: ${element}`);
    
}


// Maps

const map = new Map()

map.set("IN","India")
map.set("USA","United Sate of America")
map.set("Fr","France")
map.set("IN","India")

// console.log(map);

for (const [element,value] of map) {
    console.log(element,":",value);
    
}


const myObj = {
    Game1: "NFS",
    Game2: "Spiderman"
}

// for (const [element,value] of myObj) {
//     console.log(element,value);                   // Not Work
    
// }