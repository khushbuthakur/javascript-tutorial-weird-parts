function greet(whatToSay) {
    return function (name) {
        console.log(`${whatToSay} ${name}`);
    }
}

greet('Hello')('Khushbu');

let greetings = greet('Namaste');
greetings('Chandler');


/*
output 

Hello Khushbu
Namaste Chandler

*/
console.log('----------------------------------------------------------------------------------------------------------------------');


function buildFunctions() {
    let arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(function () {
            console.log(i)
        });
    }
    return arr;
}

let fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();


//output : 3,3,3


/*  
explanation:

1. fs gets new array with 3 different functions
2. When fs[0](); is called, it executes console statement, there it see that it does not have i variable
so it goes to parent. And since in case of closures the value is not destoryed, it is avaialble in parent.
 In parent since loop has already run, the value is 3. 

 So it prints 3;

 Same for fs[1](); and fs[0]();

 To avoid this we can use let instead of var as let is blocked scoped. 
 So it is created again during each loop.

*/

console.log('----------------------------------------------------------------------------------------------------------------------');
// solution 1

function buildFunctions1() {
    let arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push((function (j) {
            // iife
            return function () {
                // will find for j
                console.log(j)
            }
        }(i))); // passing i
    }
    return arr;
}

let fs1 = buildFunctions1();
fs1[0]();
fs1[1]();
fs1[2]();

console.log('----------------------------------------------------------------------------------------------------------------------');

// solution 2

function buildFunctions2() {
    let arr = [];
    for (let i = 0; i < 3; i++) {

        // let i is blocked scoped
        // everytime loop runs a new variable in memory weill be created
        arr.push(function () {
            console.log(i);
        });
    }
    return arr;
}

let fs2 = buildFunctions2();
fs2[0]();
fs2[1]();
fs2[2]();



