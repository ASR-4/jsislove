const myObj = {
    js: "Javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"   
}

for (const key in myObj) {

    // console.log(key,":",myObj[key]);
 
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
//    console.log(key, programming[key]);
   
}


const map = new Map()

map.set("IN","India")
map.set("USA","United Sate of America")
map.set("Fr","France")
map.set("IN","India")


// for (const key in map) {                           // Not working 
//     console.log(key);
    
// }