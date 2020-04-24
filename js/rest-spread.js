/* rest operator -> The rest of the parameters can be included in the function definition by 
using three dots ... followed by the name of the array that will contain them. 
The dots literally mean “gather the remaining parameters into an array”. */

function sum(...args) {
    console.log(args);
    let total = 0;

    for (let val of args) {
        total += val;
    }

    return total;
}

console.log(sum(1, 4, 50, -10, 9));



// We can choose to get the first parameters as variables, and gather only the rest.


function name(fName, lName, ...otherNames) {
    console.log(`Hi ${fName} ${lName}`);
    console.log(otherNames[0]);
    console.log(otherNames[1]);
}

name('Khushub', 'Thakur', 'abc', 'pqr');



/*

The rest parameters must be at the end
The rest parameters gather all remaining arguments, so the following does not make sense and causes an error:


The ...rest must always be last.

*/

// function f(arg1, ...rest, arg2) { // arg2 after ...rest ?!
//     // error
// }


//error : SyntaxError: Rest parameter must be last formal parameter


// ------------------------------------------------------------------------------------------------------------------------

// spread -> it spreads iterable object into list of arguments

var a = [10, 1, 90];

console.log(Math.max(...a));
//90