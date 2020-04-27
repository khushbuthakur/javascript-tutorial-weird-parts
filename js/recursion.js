// find factorial of a number

// 3 -> 3*2*1 = 6
//4 4*3*2*1 = 24
// 5 - 5*4*3*2*1 = 120


// using for loop
/* let factorial = function (num) {
    let fact = 1;
    if (num !== 1) {
        for (let i = num; i > 0; i--) {
            fact *= i;
        }
    }
    return fact;
} */


// using recursion

let factorial1 = function (num) {
    let fact = 0;
    if (num == 1) return num;
    let prevNum = factorial1(num - 1);
    fact = num * prevNum;
    console.log(fact, 'fact', 'num', num, 'prevNum', prevNum);
    return fact
}


let factorial2 = function (num) {
    // if (num == 1) return num;
    return num === 1 ? num : num * factorial2(num - 1);
}


// recfactored

let fact = (num) => num === 1 ? num : num * fact(num - 1);

/*

5 * fact(4)

fact(4) = 4 * fact(3)

fact(3) = 3 * fact(2)

fact(2) = 2 * fact(1)

fact(1) = 1

*/

console.log(factorial1(5));
console.log('------------------');
console.log(factorial1(3));
console.log('------------------');
console.log(factorial2(6));

/* add all numbers uptill n  */

let sum = (num) => num === 0 ? num : num + sum(num - 1);

console.log('-------- sum upto n ----------');

console.log(sum(10), ' 10 ');
console.log(sum(3), ' 3 ');
console.log(sum(4), ' 4 ');

function sumT(num) {

    if (num === 0) return num;
    let str = `${num} + ${sumT(num - 1)}`;

    let total = parseFloat(num) + parseFloat(sumT(num - 1));
    return `${total} -> ${str}`;
}

function sumLoop(num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total += i;
    }
    return total;
}

console.log('-------- sum upto n ----------');

console.log(sumT(4));

console.log('--------******************************----------');
console.time('loop sum');
console.log(sumLoop(10000));
console.timeEnd('loop sum');
console.log('--------******************************----------');
console.time('recursive sum');
console.log(sum(10000));
console.timeEnd('recursive sum');
console.log('--------******************************----------');


/*

--------******************************----------
50005000
loop sum: 2.407958984375ms
--------******************************----------
50005000
recursive sum: 1.426025390625ms
--------******************************----------

*/

// create function pow(x,n) where x raises to natural power of n

let pow = function (x, n) {
    let num = 1;
    for (let i = n; i > 0; i--) {
        num *= x;
    }
    return num;
}

let pow1 = (x, n) => n === 1 ? x : x * pow1(x, n - 1);

function pow2(num, power) {
    if (power === 1) return num;
    let total = `${num} * ${pow2(num, power - 1)}`;
    return total;
}

console.log(pow1(-5, 3));

// -125

console.log(pow2(-5, 3));

// -5 * -5 * -5


// get sum of salaries of all

let company = {
    sales: [{
        name: 'John',
        salary: 1000
    }, {
        name: 'Alice',
        salary: 1600
    }],

    development: {
        sites: [{
            name: 'Peter',
            salary: 2000
        }, {
            name: 'Alex',
            salary: 1800
        }],

        internals: [{
            name: 'Jack',
            salary: 1300
        }]
    }
};

// let total = 0;
// function getSalary(obj) {
//     debugger;
//     for (let keys in obj) {
//         if (typeof obj[keys] === 'object') {
//             if (Array.isArray(obj[keys])) {
//                 for (let val of obj[keys]) {
//                     getSalary(val);
//                 }
//             } 
//         }else if (keys === 'salary') {
//             total += obj[keys];
//         }
//     }

//     return total;
// }

function getSalary(obj) {
    if (Array.isArray(obj)) {
        return obj.reduce((prev, current) => prev + current.salary, 0);
    } else {
        let sum = 0;
        for (let keys in obj) {
            sum += getSalary(obj[keys]);
        }
        return sum;
    }
}

console.log(getSalary(company)); // 7700



// get nth number from fibonacci series

// series : 1 1 2 3 5 8 13 21 43 

let getFinNum = (index) => {
    // let firstNum = 0;
    // let lastNum = getFinNum(index - 1),
    //     lastButOne = getFinNum(index - 2);

    // console.log('index:', index, lastButOne, ': getFinNum(index - 2)', lastNum, ': getFinNum(index - 1)');
    return index <= 1 ? index : (getFinNum(index - 1) + getFinNum(index - 2))
}

// let fibnum = 0,
//     fibStr = "";

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765

// for (let i = 0; i < 10; i++) {

// }

// console.log(fibStr);

let gitFibNoFast = (num) => {
    let a = 1,
        b = 1;

    for (let i = 3; i < num; i++) {
        let c = a + b;
        b = c;
        a = b;
    }

    return b;
}

function getNum(num) {
    console.log('-------- fibonacci ----------');
    console.time('recursion');
    // console.log(getFinNum(num));   // browser hangs in case of 70 num
    console.timeEnd('recursion');
    console.log('-------- fibonacci ----------');
    console.time('loop fib');
    console.log(gitFibNoFast(num));
    console.timeEnd('loop fib');
}

getNum(6);

getNum(10);

getNum(70);

// console.log(getFinNum(6)); //8

// console.log(getFinNum(5)); //5

// console.log(getFinNum(3)); //2

// console.log(getFinNum(2)); //1

// console.log(getFinNum(1)); //1


/*
4

1 + getFinNum(3)
1 + 1 

*/