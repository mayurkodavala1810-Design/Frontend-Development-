const coding = ["java", "Python","Html", "Css"]
coding.forEach( function (item) {
    // console.log(item);
    
} )
const coding2 = ["java", "Python","Html", "Css"]
coding.forEach( (val) => {
    // console.log(val);
    
})

function printMe(item) {
    console.log(item);
    
}
// coding.forEach(printMe)


coding.forEach( (item, index,arr) => {
    // console.log(item, index, arr);
    
})

myCoding = [
    {
    languageName : "JavaScript",
    languageFileName : "JS"
    },
    {
    languageName : "Operating System",
    languageFileName : "OS"
    },
    {
    languageName : "Python",
    languageFileName : "PY"
    },
    
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})