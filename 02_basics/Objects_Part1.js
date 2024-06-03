
// object literals

const mySym = Symbol("key1") //**** creaing a symbol which is a primitive data type*/

//+++++++++++++++++++++++++ Creating a object and try diffrents method on it+++++++++++++++
const JsUser = {
    name: "Shobit",
    "full name": "Shobit Ranabhat", //**** We use " " because in back side the key in object works as a string  */
    [mySym]: "mykey1", // **** We use [] because when we call the mySum which is a symbol, will be print as a symbol data type otherwise if we call it without [] it will give the same result but the data type will be string
    age: 18,
    location: "Maryland",
    email: "Shobit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)   **** This is the way to call a particular elemet of the object by using .
// console.log(JsUser["email"]) **** This is the another way we can call a element of the object and this will help user when they want to call a key of the object which is in the string form like "Full name " in the above example.
// console.log(JsUser["full name"])**** This is the another way we can call a element of the object and this will help user when they want to call a key of the object which is in the string form like "Full name " in the above example.
// console.log(JsUser[mySym])

JsUser.email = "shobit@chatgpt.com"  //**** This is the way we can edit or change something in objects for ex. here we are changing the email key which was diffrent before */
// Object.freeze(JsUser)  //**** This Freeze method will freeze the information of the object  that means after using this method the user will not be able to make any changes like we did before by changing the email */
JsUser.email = "shobit@microsoft.com" //**** This will not work because above we use the Freeze method which will freeze the information */
// console.log(JsUser);

//+++++++++++++++++++++++++++++ Some function examples.+++++++++++++++++++++++++++++++++

JsUser.greeting = function(){
    console.log("Hello JS user");  // Format of a function.
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  //**** if we want to call a key from our object in a functoin we can simpliy use the this.  method  */
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());