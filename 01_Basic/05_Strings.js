const name = "Sumant Rai"
const repoCount = 10

// console.log(name + repoCount);

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);


const gameName = new String("Sumant-Am")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "    Sumant Rai    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://sumant.com/sumant%20rai"


console.log(url.replace('%20', '-' ));

console.log(url.includes('rai'));

const newGameName = new String("Shubhangi-Sumant-Rai")

console.log(newGameName.split("-"));


