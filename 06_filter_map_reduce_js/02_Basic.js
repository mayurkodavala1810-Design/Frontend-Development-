const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum = num.map( ( num ) => {
    num = num + 2
    return num;
})
console.log(newNum);

const mynum = [];
num.forEach( (num) => {
    num = num * 2
    mynum.push(num);
})
console.log(mynum);

const myNum = num.filter( (num) => {
    return num > 5
})
console.log(myNum);