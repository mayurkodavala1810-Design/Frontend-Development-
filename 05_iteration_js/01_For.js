// For Loop
for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element == 5) {
        console.log("5 is Best Number");
        
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    console.log(`Outer Loop : ${i}`);
    
    for (let j = 1; j <= 10; j++) {
    // console.log(`Inner Loop : ${j} and Inner Loop : ${i}`);
    // console.log(`${i} * ${j} = ${i * j}`);
    
            
    }    
}

let arr = ["Mayur","Anuj", "Keyur", "Savan"]
console.log(arr.length);
    
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    // console.log(element);
    
}

//Break and Continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("5 is Deteced");
        break
    }
    // console.log(`Value of i is  ${index}`);
    
}


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("5 is Deteced");
        continue
    }
    console.log(`Value of i is  ${index}`);
    
}

