greet();

function greet() {
    console.log('hi from greet');
}

//------------------------------------ Anonymous functions ------------------------------------

/* below line will give error

Cannot access 'anonymousGreet' before initialization 

function is assigned to a variable just as object.

*/

// anonymousGreet();  

let anonymousGreet = function () {
    console.log('hi from anonymousGreet');
}

anonymousGreet();

/*
output 

hi from greet
hi from anonymousGreet

*/

//------------------------------------ function expressions ------------------------------------

function log(a) {
    a();
}

log(function () {
    console.log('Hi from log function')
});

/*
output: Hi from log function

a function expression creates an object, a function object on the fly.
create function on fly, put some code in it and Pass it to another function which is then referenced by argument and then execute it.
*/