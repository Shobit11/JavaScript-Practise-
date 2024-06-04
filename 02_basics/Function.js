function addingTwoNumber (num1,num2){
        let sum = num1 + num2
        return sum;
}
console.log(addingTwoNumber(2,5));

//**** Second Example ****/

function isLogIn(username){
    return(`${username} is log in `)
}
console.log(isLogIn("Shobit"))



//**** How to call a function in a object */

const employee = {
    name : "Shobit",
    age : 25,
    state: "glen Burnie",
    country : "USA"
}

function detail(bio){
console.log((`the name is ${bio.name} and the age is ${bio.age}`))
}

detail(employee);


//**** How to call a function in a Array */

const employee = ["shobit","sangita","sagar","dipesh"]

function selectOne(bestEmployee){
    console.log(`The best employe is ${bestEmployee}`);
}

selectOne(employee[1]);