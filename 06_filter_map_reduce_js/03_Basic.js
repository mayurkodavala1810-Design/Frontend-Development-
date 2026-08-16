const myNum = [1,2,3,4]
const priceToPay = myNum.reduce( (acc,item) => (acc + item),0)
console.log(myNum); // [1, 2, 3, 4]
console.log(priceToPay); // 10

const myNums = [1, 2, 3]
const myTotal = myNums.reduce( function (acc, currVal)  {
    console.log(`acc : ${acc} and currVal : ${currVal}`);
    return acc + currVal;
},0)
console.log(myTotal); // 6

const myNumbers = [1, 2, 3, 4, 5]
const myTotal2 = myNumbers.reduce( (acc, currVal) => acc + currVal, 0)
console.log(myTotal2); // 15

const ShopingCart = [ 
    {
        itemName : "Shirt",
        itemPrice : 500
    },
    {
        itemName : "Pant",
        itemPrice : 1000
    },
    {
        itemName : "Shoes",
        itemPrice : 2000
    },
    {
        itemName : "Belt",
        itemPrice : 300
    },

]
const totalPrice = ShopingCart.reduce ( (acc, Val) => acc + Val.itemPrice, 0)
console.log(totalPrice); // 3800