// Immediately Invoked Function Expression (IIFE)

/* IIFE is a JS design pattern where a function executes immediately as soon as it is defined.
   It is primarily used for creating local scope and prevent variable from polluting the global 
   namespace. */

(function one(){        // named IIFE --> function is having name just like here 'one'
    console.log(`DB connected`);
})();
// ()()
// () definition () execution call

( () => {
    console.log(`DB connected two`);
})();

( (name) => {
    console.log(`DB connected two ${name}`);
})('Adarsh')