// Immediately Invoked Function Expressions (IIFE)

// There are two method to use this methods

// 1st Method

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();


// 2nd Method

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Shobit')