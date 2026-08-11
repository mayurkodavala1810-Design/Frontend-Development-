function sayMyName() {
    console.log("Mayur");
    
}
// sayMyName()

// function addTwoNum(num1, num2) { // this is params
//     console.log(num1 + num2);
// }

function addTwoNum(num1, num2) { // this is params
    // let result  = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNum(10,10) // This is Agrument
// console.log("Result IS :- ",result);


function loginUser(username = "Anuj") {
    if (username === undefined) {
        console.log("Please Enter a Username");
        return
    }
    return `${username} just Logged In`
}
// console.log(loginUser());

// const login = loginUser("Mayur")
// console.log(login);


function calculateCartPrice(val1, val2, ...num1) {
    return num1
}
// console.log(calculateCartPrice(200,500,100,200));

const user = {
    username : "Mayur",
    age : 19
}

function handelUser(anyObj) {
    console.log(`Username is ${anyObj.username}, and Age is ${anyObj.age}`);
    
}
// handelUser(user)

handelUser({
    username : "anuj",
    age : 19
})

const myNewArr = [200,400,600,100]
function retuneSecVal(getArr) {
    return getArr[2]
}
// console.log(retuneSecVal(myNewArr));
console.log(retuneSecVal([200,400,600,800]));




