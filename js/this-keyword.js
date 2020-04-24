// here this is window object, but in strict mode it will be undefined, but in strict mode it will be undefined
function getStatus() {
    console.log('from getStatus', this);
}

getStatus();

//------------------------------------------------------------------------------------------------------------------------------

// here this is window object, but in strict mode it will be undefined
const getContantStatus = function () {
    console.log('from getContantStatus', this);
}

getContantStatus();

// here this is window object, but in strict mode it will be undefined
console.log('from outside', this);

//------------------------------------------------------------------------------------------------------------------------------

const nameObj = {
    name: 'Khushbu',
    logName: function () {
        // in objects value get passed by reference. Here this points to nameObj. Since self wil lalso point to nameObj
        let self = this;

        // now if we replace all below this with self, everyone will alter nameObj and not global window obj

        //------------------------------------------------------------------------------------------------------------------------------

        // here this refers to the object. 
        console.log('from obj before:', this);
        this.name = 'Ross';

        //------------------------------------------------------------------------------------------------------------------------------

        /* though everything inside a method of object points to the object, but in case of initernal functions like below,
            when they are declared they get stored in memory and are stored at global level and so point to window object
        */
        const setName = function (newName) {
            // here this is window object, but in strict mode it will be undefined
            this.name = newName;
            console.log('from set name func', this);
        }

        setName('Janice');

        console.log('from obj after setName:', this);

        //------------------------------------------------------------------------------------------------------------------------------

        function setAnotherName(anotherName) {
            this.name = anotherName;
            console.log('from setAnotherName function', this);
        }

        setAnotherName('Joey');

        console.log('from obj after setAnotherName:', this);

        //------------------------------------------------------------------------------------------------------------------------------

        const setNameWithSelf = function (nameWithSelf) {
            // since this function does not have self, because of scope chain it will go to it's outer environment and find for self
            self.name = nameWithSelf;
        }

        setNameWithSelf('Monica');
        console.log('from obj after setNameWithSelf:', self);
    }
}

nameObj.logName();


/*
Output:

from getStatus Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
from getContantStatus Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
from outside Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
from obj before: {name: "Khushbu", logName: ƒ}
from set name func Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
from obj after setName: {name: "Ross", logName: ƒ}
from setAnotherName function Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
from obj after setAnotherName: {name: "Ross", logName: ƒ}
from obj after setNameWithSelf: {name: "Monica", logName: ƒ}

*/


//------------------------------------------------------------------------------------------------------------------------------



console.log('------------------------------------------------------------------------------------------------------------------------------');

let user = {
    name: 'Khushbu',
    greet: function () {
        console.log(`Hello ${this.name}`);
    },
    welcome() {
        /* There exists a shorter syntax for methods in an object literal, we can omit function keyword */
        console.log(`Welcome ${this.name}. How are you?`);
    },
    bye() {
        console.log(`Bye ${user.name}`); // avoid this as it can cause error, if somewhere below user object gets changed, see line no. 121
    }
}

user.greet(); // Hello Khushbu
user.welcome(); // this-keyword.js:106 Welcome Khushbu. How are you?

let admin = user;

user = null;

admin['greet'](); //  Hello Khushbu
admin['welcome'](); // Welcome Khushbu. How are you?

try {
    admin['bye'](); //  Uncaught TypeError: Cannot read property 'name' of null
} catch (err) {
    console.log(err, ' while printing bye from admin');
}


//------------------------------------------------------------------------------------------------------------------------------
console.log('------------------------------------------------------------------------------------------------------------------------------');

const user1 = {
    name: 'Harley'
};

const user2 = {
    name: 'Queen'
};

function sayHello() {
    console.log(`Hello ${this.name}`);
}

// use the same function in two objects

user1.sayHello = sayHello;
user2.sayHello = sayHello;

// these calls have different this
// "this" inside the function is the object "before the dot"


/*
for sayHello in user1, THIS is user1
for sayHello in user2, THIS is user2

during function call "THIS" is object and not window or undefined

*/

user1.sayHello(); // Hello Harley
user2.sayHello(); // Hello Queen


/*
The rule is simple: if obj.f() is called, then this is obj during the call of f. So it’s either user1 or user2 in the example above
*/


//------------------------------------------------------------------------------------------------------------------------------
console.log('------------------------------------------------------------------------------------------------------------------------------');

/* if we remove semi-colon from line 180 -> 

JavaScript does not auto-insert a semicolon before a bracket (user.go)(), so it reads the code like:

let user = { go:... }(user.go)()

So we get error: Uncaught ReferenceError: Cannot access 'userQ' before initialization
*/

let userQ = {
    name: "John",
    go: function () {
        console.log(this.name)
    }
};

(userQ.go)();

//------------------------------------------------------------------------------------------------------------------------------
console.log('------------------------------------------------------------------------------------------------------------------------------');

/*
In the code below we intend to call obj.go() method 4 times in a row.

But calls (1) and (2) works differently from (3) and (4). Why?
*/


let obj, method;

obj = {
    go: function () {
        console.log(this);
    }
};

obj.go(); // (1) [object Object]

(obj.go)(); // (2) [object Object]

(method = obj.go)(); // (3) undefined

(obj.go || obj.stop)(); // (4) undefined



/*

Here’s the explanations.

That’s a regular object method call.

The same, parentheses do not change the order of operations here, the dot is first anyway.

Here we have a more complex call (expression).method(). The call works as if it were split into two lines:

f = obj.go; // calculate the expression
f();        // call what we have
Here f() is executed as a function, without this.

The similar thing as (3), to the left of the dot . we have an expression.

To explain the behavior of (3) and (4) we need to recall that property accessors (dot or square brackets) return a value of the Reference Type.

Any operation on it except a method call (like assignment = or ||) turns it into an ordinary value, which does not carry the information allowing to set this.


------------------------------------------------------------------------------------------------------------------------------

When parentheses () are called on the Reference Type, they receive the full information about the object and its method, and can set the right this (=user in this case).

Reference type is a special “intermediary” internal type, with the purpose to pass information from dot . to calling parentheses ().

Any other operation like assignment hi = user.hi discards the reference type as a whole, takes the value of user.hi (a function) and passes it on. So any further operation “loses” this.

So, as the result, the value of this is only passed the right way if the function is called directly using a dot obj.method() or square brackets obj['method']() syntax (they do the same here).
*/

//------------------------------------------------------------------------------------------------------------------------------
console.log('------------------------------------------------------------------------------------------------------------------------------');


/*
Create an object calculator with three methods:

read() prompts for two values and saves them as object properties.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.

*/

let calculator = {
    num1 : 0,
    num2 : 0,
    read(){
        this.num1 = +prompt('Enter first number', this.num1);

        // this.num1 = this.num1 || 0;

        this.num2 = +prompt('Enter second number', this.num2);

        // this.num2 = this.num2 || 0;
    },
    sum(){
        // debugger;
        let total = parseFloat(this.num1) + parseFloat(this.num2);
        return total;
    },
    mul(){
        // debugger;
        let multiply = parseFloat(this.num1) * parseFloat(this.num2);
        return multiply; 
    }
}

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

//------------------------------------------------------------------------------------------------------------------------------
console.log('------------------------------------------------------------------------------------------------------------------------------');

/*

There’s a ladder object that allows to go up and down:


let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};

Now, if we need to make several calls in sequence, can do it like this:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
Modify the code of up, down and showStep to make the calls chainable, like this:

ladder.up().up().down().showStep(); // 1
Such approach is widely used across JavaScript libraries.

*/



let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // shows the current step
      console.log( this.step );
    }
  };


  // The solution is to return the object itself from every call.

  ladder
  .up()
  .down()
  .up()
  .up()
  .down()
  .showStep();

  // 1