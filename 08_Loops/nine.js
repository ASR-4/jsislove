// reduce 

const myNums = [1, 2, 3]


// const myTotal = myNums.reduce( (acc, curval) =>{
//     console.log(`acc: ${acc}, curval: ${curval}`);

//     return acc + curval
// },0)

const myTotal = myNums.reduce(function (acc, curval) {
    return acc + curval
}, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js",
        price: 2999
    },
    {
        itemName: "python",
        price: 3999
    },
    {
        itemName: "Mobile dev",
        price: 9999
    },
    {
        itemName: "Data science",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce((acc, curval) => {
    return acc + curval.price

}, 0)
console.log(totalPrice);
