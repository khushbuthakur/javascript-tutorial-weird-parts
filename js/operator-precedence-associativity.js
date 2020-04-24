var a = 3 + 4 * 5;
console.log(a);

// 23

var b = (3 + 4) * 5;
console.log(b);

// 35

// all have same precedence so called left to right
var c = 2 * 10 / 4;

console.log(c);
// 5

// all have same precedence so called left to right
var d = 2 / 10 * 4;

console.log(d);

// 0.8

var a = 0;

if (a || a === 0) {
    console.log('something is there');
} else {
    console.log('empty');
}

/*
    output : something is there
    1. === has more precedence than ||
    so fir === statement will run, which will return true
    2. then it would be a || true
    3. a will be coerced -> false || true
    4. final answer will be true 
*/

function greet(name) {
    name = name || '<Your name here>';

    console.log(`Hi ${name}. Welcome to javascript weird parts!`);
}

greet();
greet('Khushbu');

/* output  
Hi <Your name here>. Welcome to javascript weird parts!

Hi Khushbu. Welcome to javascript weird parts!

1. check if name is ther
*/

console.log(undefined || 'hello');

console.log('hi' || 'hello');

/*
    output : hello

    output : hi

    It returns the first value that can be coerced to true
*/

console.log('hi' && 'hello');

/*
    output : hello

    It returns the last value if all (or can be coerced to) true.
    
*/