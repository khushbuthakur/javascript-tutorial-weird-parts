/* OR ||
Or returns first truthy value or last value if all are false
*/

console.log(1 || 0); // 1 (1 is truthy)
console.log(true || 'no matter what'); // (true is truthy)

console.log(null || 1); // 1 (1 is the first truthy value)
console.log(null || 0 || 1); // 1 (the first truthy value)
console.log(undefined || null || 0); // 0 (all falsy, returns the last value)


// Short-circuit evaluation

let x, y;

true || (x = 1);

false || (y = 1);

console.log(x); // undefined as (x = 1) not evaluated, returns first truthy value
console.log(y); // 1


/* AND &&

And returns first falsy value or last truthy value if all are true

*/

console.log(1 && 0); // 0
console.log(1 && 5); //5

console.log(0 && null && undefined); //0
console.log(null && 'abc'); // null

console.log('abc' && 'xyz'); //xyz


let z = 1;
z > 0 && console.log('passed');


/* Precedence of AND && is higher than OR || 

So the code a && b || c && d is essentially the same as if the && expressions were in parentheses: (a && b) || (c && d)

*/

// QUIZ

//1. 
alert(alert(1) || 2 || alert(3));

//2. 
alert(1 && null && 2);

//3. 

alert(alert(1) && alert(2));

//4. 

alert(null || 2 && 3 || 4);



//Answers


/*

1. Answer: 1 then 2

The alert will first try to execute firt alert(1);
this will be executed but will return undefined
so it will go to find next truthy

2 is truthy value so it will return it  

and then alert(2) will be executed and stops her.

------------------------------------------------------------------------------------

2. The answer: null, because it’s the first falsy value from the list.

------------------------------------------------------------------------------------

3. Answer: 1 and undefined

The call to alert returns undefined (it just shows a message, so there’s no meaningful return).

Because of that, && evaluates the left operand (outputs 1), and immediately stops, 
because undefined is a falsy value. And && looks for a falsy value and returns it, so it’s done.

------------------------------------------------------------------------------------

4. The answer: 3.

alert( null || 2 && 3 || 4 );
The precedence of AND && is higher than ||, so it executes first.

The result of 2 && 3 = 3, so the expression becomes:

null || 3 || 4
Now the result is the first truthy value: 3.
*/

//------------------------------------------------------------------------------------

//5.

/*
Write an “if” condition to check that age is between 14 and 90 inclusively.

“Inclusively” means that age can reach the edges 14 or 90
*/

// solution
let age = 20;

if (age >= 14 && age <= 90) {
    console.log('in range');
} else {
    console.log('out of range');
}

//------------------------------------------------------------------------------------

/*
Write an if condition to check that age is NOT between 14 and 90 inclusively.

Create two variants: the first one using NOT !, the second one – without it.
*/

if (!(age >= 14 && age <= 90)) {
    console.log('in range');
}

if (age < 14 || age > 90) {
    console.log('in range');
}

//------------------------------------------------------------------------------------

/*

Which of these alerts are going to execute?

*/

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );

// Runs.
// The result of -1 || 0 = -1, truthy
if (-1 || 0) alert( 'first' );

// Doesn't run
// -1 && 0 = 0, falsy
if (-1 && 0) alert( 'second' );

// Executes
// Operator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert( 'third' );


//------------------------------------------------------------------------------------


