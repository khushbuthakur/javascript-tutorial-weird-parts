function a() {
    var num = 2;
    b();
}

function b() {
    console.log(num);
}

var num = 1;
a();


/*
output : 1

here since function b does not has it's own num variable it then goes to outer environment which is global object for it

so since num in global is 1
it prints 1
*/


function c() {

    function d() {
        console.log(num1);
    }

    var num1 = 2;
    d();
}

var num1 = 1;

c();

/*
output : 2

here since function d does not has it's own num1 variable it then goes to outer environment which is function c for it

so since num1 in function a is 2
it prints 2

*/


function e() {

    function f() {
        console.log(num2);
    }

    f();
}

var num2 = 3;

e();


/*

output : 3

here since function f does not has it's own num2 variable it then goes to outer environment which is function e for it

but even function e does not have variable num2 

so it goes to it's outer environment which is global object 

so since num2 in global object is 3

it prints 3

*/
