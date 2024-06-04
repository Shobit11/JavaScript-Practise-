//**** We can construct object byy two method  */

// const tinderUser = new Object() ***** This is the first method *****

const tinderUser = {}    //**** This is the second method */

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


//**** We can have objects nested inside an objects  */
const regularUser = {          
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);   **** This is how we can retrieve the key or pair of a nested object ****


//**** I f we have three or multiple object and want to merge it we can use the split method (...) to merge all the object in one by assigne it to new object */
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }  +++++ We cannot merge multiple object like this because it will merge the object inside other object make objects render to each other  ++++++++

// const obj3 = Object.assign({}, obj1, obj2, obj4)  ++++ We can use this method to merge the objects and by using this object all the mentioned object will merge inside {} this. ++++

const obj3 = {...obj1, ...obj2}    //**** We can use this method also to merge alll the object same as we did in arrays **** */
// console.log(obj3);


//***** More  examples */
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); **** This is how we can find the all the key of object *****
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); **** This method will check weather we have the given value in our object or not ****


//++++++++++++++++++++++++++++++++++++++++ Object Destructuring ++++++++++++++++++++++++++++++++++

const course = {
    coursename: "javaScript",
    price: "199",
    courseInstructor: "Shobit"
}

// course.courseInstructor //**** this is the basic way to pull out the name of the instructor from the object **** */

const {courseInstructor: instructor} = course  //**** This method is known as object destructuring where we dont have to write all the things like console.log(course.courseinstructor) */

// console.log(courseInstructor);
console.log(instructor);
