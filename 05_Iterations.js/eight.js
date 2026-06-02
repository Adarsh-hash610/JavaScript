const array1 = [1,2,3,4]

const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);
console.log(sumWithInitial);

const myNums = [1,2,3]

const myTotal = myNums.reduce((acc, currVal)=>{
    console.log(`acc: ${acc} and curr: ${currVal}`);
    return acc + currVal
    
},0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName : "cpp course",
        price : 2000
    },
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "python course",
        price : 1999
    }
];

const totalPrice = shoppingCart.reduce((acc,currVal) => {
    return acc + currVal.price
},0)
console.log(totalPrice);

