
// var c = 300
let a = 300 // Globle Scope
if (true) {
    let a = 10
    const b = 20
    // var c = 30
    // console.log("Inner", a);  // BlockScope
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function name() {
    const name = "Mayur"
    function name1() {
        const website = "MDN"
        console.log(name);
        
    }
    // console.log(website);
    name1()
}
// name()


if (true) {
    const username = "Mayur"
    if (username == "Mayur") {
        const website = " Kodavala"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);



// console.log(addOne(2))
function addOne(num) {
    return num + 1
}
console.log(addOne(2))


// console.log(addtwo(2))
const addtwo = function(num) {
    return num + 3
}
console.log(addtwo(9))



