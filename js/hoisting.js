b();
console.log(a);

var a = "a value";

function b(){
    console.log('function b called', c);
    var c = "c value";
}

/* output : 
   function b called undefined
   undefined
*/

/* if we use let instead of var then it will throw error instead of showing undefined and will say  
------------ Cannot access 'a' before initialization ---------
*/