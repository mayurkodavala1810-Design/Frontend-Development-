// const coding = ["MySQL", "Python","Html", "Css"]

// const logCoding = coding.forEach( (item) => {
//     // console.log(item);
//     return item; // This return value is not used by forEach
// })
// console.log(logCoding); // undefined because forEach does not return a value


// const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const logNumbers = Numbers.map( (item) => {
//     return item * 2; // This return value is used by map to create a new array
// })
// console.log(logNumbers); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNumbers = Numbers.filter( (num) => {
//     return num > 5
// })

const newNum = []
Numbers.forEach( (num) => {
    if (num > 5) {
        newNum.push(num)
    }
})
// console.log(newNum); // [6, 7, 8, 9, 10]



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const userBook = books.filter( (book) => {
    if (book.publish > 1990 && book.edition > 2005) {
        return true;
    }
    return false;
});

const userBook2 = books.filter( (book) => book.genre === "Fiction" && book.publish > 1985 && book.edition > 2005);
console.log(userBook2);

// console.log(userBook);


