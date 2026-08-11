const user = {
    name : "Mayur",
    price : 999,
    welcome : function () {
        console.log(`${this.name}, welcome to website`);
        // console.log(this);
        
    }
}

// user.welcome(); // Mayur, welcome to website

// user.name = "Anuj"; // update the name
// user.welcome();     // Anuj, welcome to website
// console.log(this);


// function name() {
//     const username = "Mayur"
//     console.log(this.username)
// }
// name()

// const name = function() {
//     const username = "Mayur"
//     console.log(this.username);
    
// }
// console.log(name());

// const name = ()  => {
//     const username = "Mayur"
//     console.log(this);
    
// }
// name();

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(5,9))

// const addTwo = (num1, num2) =>  (num1 + num2)
const addTwo = (num1, num2) =>  ({
    username : "Mayur"
})


console.log(addTwo(5,9))







