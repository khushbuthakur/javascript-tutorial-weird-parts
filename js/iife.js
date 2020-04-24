// function statement

// function declaration
function greet(name) {
    console.log(`Hi ${name}`);
}

greet('Khushbu');

//Hi Khushbu

// function expresion
const greetFunc = function (name) {
    console.log(`Hi ${name}`);
}

greetFunc('Joey');

//Hi Joey

// immediately invoked function expression : iife
(function (name) {
    console.log(`Hi ${name} from IIFE`);
}('Ross'));

//Hi Ross from IIFE


function aGreet(name) {
    console.log(`Hi ${name}`);
}('abc');

// Hi abc

const updateCores = () => {
        let totalVal = formArray.reduce((acc, val) => {

            let {
                slider,
                cpuValue
            } = val;

            cpuValue = isNotNullOrEmpty(cpuValue) ? parseFloat(cpuValue) : 0;
            slider = isNotNullOrEmpty(slider) ? parseFloat(slider) : 0;

            let mulUnit = cpuValue * slider;

            return acc + mulUnit;
        }, 0);
        setTotalCores(totalVal);
    }


    +
    function () {
        // Code that runs in your function
        return 10;
    }();

-
function () {
    // Code that runs in your function
    return 10;
}();

! function () {
    // Code that runs in your function
    return 10;
}();

~ function () {
    // Code that runs in your function
    return 10;
}();

void
function () {
    // Code that runs in your function
    return 10;
}();


/*

IIFE, it needs to be an anonymous function, a function without a name, this is because IIFE needs to be Invoked Immediately without invoking it a function name. We also need to wrap the anonymous function with parenthesis, so the Javascript parser treats our anonymous function as a function expression.
(function() {}());
A function expression is when you assign a function to a variable or property of an object. Anything that is a Javascript expression, including function expression, returns a value.

*/


// QUIZ

// 1.

/*
Does the following snippet illustrate an Immediately-Invoked Function Expression (IIFE), a Higher-Order Function (HOF), both, or neither?

*/

((fn, val) => {
    return fn(val);
})(console.log, 5);


/*
a. IIFE only
b. HOF only
c. Both IIFE and HOF CORRECT ANSWER
d. Neither

*/


// answer : c

/* explanation : 
The snippet clearly illustates an IIFE as we immediately invoke a function by passing console.log and 5 to it. 
Additionally, we find that this is a HOF as fn is a function, and a HOF 
is defined as any function that takes another function as a parameter or returns a function.
*/