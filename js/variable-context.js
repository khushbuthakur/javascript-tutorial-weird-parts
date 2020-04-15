function c() {
    var a;
    console.log(a);
}

function b() {
    var a = 2;
    console.log(a);
    c();
}

var a = 1;
console.log(a);
b();

// by the point we move here function b and c have been removed from stack so now we are again on global obj
console.log(a);


/*
Output ->
1
2
undefined
1
*/
