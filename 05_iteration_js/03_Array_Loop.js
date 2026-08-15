const arr = ["Mayur", "Anuj", "Keyur", "Raj", "Rumit"]
for (const num of arr) {
    // console.log(num);
    
}

const greeting = "Hello Friend";

for (const greet of greeting) {
    if (greet === " ") {
        continue; // skip when space is found
    }
    // console.log(`Each Greeting is ${greet}`);
}

// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type. 
// not allowed in Object. Map remembers the original insertion order of the keys. Map has a property that represents the size of the map. 
// Map is an iterable, so we can iterate through it.

const map = new Map()
map.set("Name", "Mayur")
map.set("Age", 25)
map.set("City", "Ahmedabad")
// console.log(map);
for (const [key, value] of map) {
    // console.log(`${key}:- ${value}`);
}

// const myObj = {
//     Name: "Mayur",
//     Age: 25,
//     City: "Ahmedabad"
// }
// for(const  [key, value] of myObj) {
//     console.log(`${key}:- ${value}`);
// }