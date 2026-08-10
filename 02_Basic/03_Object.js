let mySym = Symbol("key1")

let JsUser = {
    Name : "Mayur",
    "Full Name" : "Mayur Kodavala",
    Age : 19,
    [mySym] : "key1",
    Location : "Ahmedabad",
    Email : "mayurkodavala01@gmail.com",
    IsLoggedIn : true,
    astLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser);
// console.log(JsUser.Name);
// console.log(JsUser["Full Name"]);

// console.log(JsUser[mySym]);
JsUser.Email = "mayurkodavala11@gmail.com"
// console.log(JsUser.Email);

JsUser["Location"] = "Surat"
// console.log(JsUser["Location"]);

// Object.freeze(JsUser) // This will not allow to change the object properties
JsUser.Email = "mayurkodavala11@micro.com"
// console.log(JsUser.Email);

// console.log(JsUser.astLoginDays);
// console.log(JsUser["Location"]);

JsUser.greeting = function() {
    console.log("Hello Mayur");
}
console.log(JsUser.greeting);

JsUser.greetingTwo = function() {
    console.log(`Hello ${this.Name} your email is ${this.Email}`);
}
console.log(JsUser.greetingTwo());






