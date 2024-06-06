//++++++++++++++++++++++++++++  While Loops ++++++++++++++++++++++++++++++++++++++++++


let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    //console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

// +++++++++++++++ Do - While loops. +++++++++++++++++++++++++++++++++

let score = 1     

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);

// The reason why we use this is if we change the value which is score = 11 then we dont get the error because in do while first we go through do insted of checking 