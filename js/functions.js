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

/*
They are called first call functions. Because JS functions can be asigned to
            variables, passed as an argument, returned from other function. They can even reside inside another object.
*/

// assigned to variables
const getName = function (name) {
    console.log(name);
}

// passed as an argument
const logName = (name) => {
    name();
}

logName(function () {
    console.log('some random name');
});

// returned from another function

function getFullName(firstName) {
    return function (lastName) {
        console.log(`${firstName} ${lastName}`);
    }
}

getFullName('John')('Doe');

// can reside inside objects

const person = {
    name: 'John Doe',
    getName: () => this.name
};