//+++++++++++++++++++++++++++ for each loops. ++++++++++++++++++++++++++++++++++++++++++++

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )                                  Note : we can use either normal format of function or we can use the arrow function  format 

// coding.forEach( (item) => {
//     console.log(item);
// } )


//******************* Example for calling a function inside a function in for each loops ******/
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )


// Practicle example when we get information from the database it will in object form inside an array.

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
// ****************8888 This way we can pull out any information from the object inside an array 