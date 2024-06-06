


let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

//******************  how local scope and global scope works ************/
function one(){
    const username = "Shobit"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);     [IMPORTANT NOTE : here this console will not wprk and gives an error because this is outside from the scope of function two]

     two()   //  [IMPORTANT NOTE : here this console will not wprk and gives an error because this is outside from the scope of function one]


}

// one()  ***** This will execute and gives and output of username which is Shobit because we have a console.og in line number 24 **************8

if (true) {
    const username = "Shobit"
    if (username === "Shobit") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);       **** This will not work and the reson is outside from the scope ******
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))     // This will execute because it is not stored in any variable ******

function addone(num){
    return num + 1
}



addTwo(5)   // ****** This will not work because it's value is store in variable *******
const addTwo = function(num){
    return num + 2
}