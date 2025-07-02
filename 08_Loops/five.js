const coding = ["Js", "ruby", "python", "cpp", "c"]

// coding.forEach((item)=>{
//     console.log(item);
    
// })

// coding.forEach(function(value){
//     console.log(value);
    
// })

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)


coding.forEach((item,index,arr)=>{

    console.log(item,index,arr);
    
})


const myCoding = [
    {
        languagename: "JavaScript",
        languagefilename: "js"
    },
    {
        languagename: "Python",
        languagefilename: "py"
    },
    {
        languagename: "Java",
        languagefilename: "java"
    }
    
]

myCoding.forEach((item) =>{
    console.log(item.languagename);
    
})
