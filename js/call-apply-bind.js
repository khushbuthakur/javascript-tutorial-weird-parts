// ------------- Syntax for bind ---------------

// let boundFunc = func.bind(thisArg[, arg1[, arg2[, ...argN]]])

const person = {
    firstName: "Khushbu",
    lastName: "Thakur",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}

// we cannot directly access fullname method from any other function, so that's why we bind logName function with person. 
// so "this" for logName is person and not global object

let logName = function (language) {
    console.log(this.fullName());
    console.log(language);
    console.log('-----------');
};

// here bind returns a new function i.e. copy of logName pointing to person object
const logPersonName = logName.bind(person);

// logName takes same arguments only THIS variable will be person object
logPersonName('eng');

/* output : Khushbu Thakur
eng
----------- */


// ------------- Syntax for call ---------------

//  let callFunc = func.call(thisArg[, arg1[, arg2[, ...argN]]])

// Calls a method of an object, substituting another object for the current object. Call does not create copy of the function but instead executes it


logName.call(person, 'hindi');

/* output : 
    Khushbu Thakur
    hindi
    ----------- 
*/


// ------------- Syntax for call ---------------

//  let applyFunc = func.apply(thisArg,[ arg1, arg2, ...argN]]])

// apply is same as call, only difference that it wants all arguments in an array

logName.apply(person, ['marathi']);


/* output : 
    Khushbu Thakur
    telgu
*/

(function logSomeName(language) {
    console.log('from iife : ', this.fullName());
    console.log(language);
}).apply(person, ['telgu']);

/* output : 
    Khushbu Thakur
    from iife :  Khushbu Thakur
*/



// Real life use cases


// ---------------------------------- function borrowing ----------------------------------

/*
We have a object with firstName and lastName and want to print their full name
*/


const person2 = {
    firstName: 'Joey',
    lastName: 'Tribbiani'
};

// very important line. we are now passing person2 object to 
console.log(person.fullName.apply(person2));

/*

Output:
Joey Tribbiani

*/


// ---------------------------------- Currying ----------------------------------

const multiply = function (a, b) {
    return a * b;
}

console.log(multiply(2, 4)); // 8


// here new copy of multiply is created with default paramter value of a as 2; 
// so when we will call multiplyByTwo, a will always be 2 and will pass value of b;

const multiplyByTwo = multiply.bind(this, 2);

// here 10 is value of b
console.log(multiplyByTwo(10)); //20


const multiplyByFour = multiply.bind(this, 4);

console.log(multiplyByFour(20));
// 80


/*
we created copy of multiply function
then set a default value

this is called currying
*/ 