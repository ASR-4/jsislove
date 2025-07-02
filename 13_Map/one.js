// const myMap = new Map()


const myMap = new Map ()

myMap.set ( "India", "Rupees")
myMap.set("USA", "Dollar")
myMap.set("Dubai", "Dhiram")
myMap.set("Nepal","Nepalees Rupees")
  
// console.log(myMap);

// for (const [key] in myMap) {                 // Not Work
//     console.log(key,myMap[key]);
    
// }

myMap.forEach((item)=>{                // Work
    console.log(item);
    
})


for (const element of myMap) {        // return a array
    console.log(element);
 
}