const person = {
    firstName: 'default',
    lastName: 'default',
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
};

console.log(person.getFullName());

// default default

// only for demo purpose, do not do this ever. Affects performance.

const john = {
    firstName: 'John',
    lastName: 'Doe',
};

// error john.getFullName is not a function
// console.log(john.getFullName());

/* since john does not have it's own getFullName property we are trying to get it from person object.*/
john.__proto__ = person;

console.log(john.getFullName());

// John Doe


const janice = {
    firstName: 'Janice'
};

janice.__proto__ = person;

console.log(janice.getFullName());

// Janice default

// ------------------------------------------------------------------------------------------------------------------------------

/* Error: Uncaught TypeError: Cyclic __proto__ value
    at Object.set __proto__ [as __proto__] (<anonymous>) */

// person.__proto__ = john;


// ------------------------------------------------------------------------------------------------------------------------------

const animals = {
    name: 'animal',
    walk() {
        if (!this.isSleeping) {
            return true
        }
    },
    sleep() {
        return this.isSleeping = true
    }
}

const rabbit = {
    name: 'Rabbie',
    __proto__: animals,
};

const snake = {
    name: 'snaky',
    __proto__: animals
}

// modifies isSleeping only in rabit object
rabbit.sleep();

console.log(rabbit.isSleeping); // true
console.log(animals.isSleeping); // undefined (no such property in the prototype)
console.log(snake.isSleeping); // undefined (no such property in the prototype)

// this is in prototype always refers to the object before dot.

console.log(snake.name);

// ------------------------------------------------------------------------------------------------------------------------------

/*  get to know all OWN properties is object */

console.log(Object.keys(rabbit));

//  ["name", "isSleeping"]

/*  get to know all properties (OWN + INHERITED) in an object */

//  for..in loops through all enumerable properties in an object

for (let keys in rabbit) {
    console.log(keys);
}

/*
isSleeping
walk
sleep
*/

/* object.hasOwnProperty(key) tells us whether the key is inherited or not   */

// differentitate properties

for (let keys in snake) {
    let isOwn = snake.hasOwnProperty(keys);
    let type = 'INHERITED';

    if (isOwn) {
        type = 'OWN'
    }

    console.log(`${type} property : ${keys}`);
}

/*

OWN property : name
INHERITED property : walk
INHERITED property : sleep

*/


/* if we look closesly hasOwnProperty is also a property in prototype
 but it does not get printed in for..in loop because
 it's enumerable flag is set to false

*/

// ------------------------------------------------------------------------------------------------------------------------------



/*

Quiz

*/


// 1. 

let animal2 = {
    jumps: null
};
let rabbit2 = {
    __proto__: animal2,
    jumps: true
};

console.log(rabbit2.jumps); // ? (1)

delete rabbit2.jumps;

console.log(rabbit2.jumps); // ? (2)

delete animal2.jumps;

console.log(rabbit2.jumps); // ? (3)


/* output:
true, taken from rabbit.
null, taken from animal.
undefined, there’s no such property any more.
*/

// ------------------------------------------------------------------------------------------------------------------------------

// 2. 


/*

1. Use __proto__ to assign prototypes in a way that any property lookup will follow the path: 
pockets → bed → table → head. 
For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).

2. Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.

*/

let head = {
    glasses: 1
};

let table = {
    pen: 3
};

let bed = {
    sheet: 1,
    pillow: 2
};

let pockets = {
    money: 2000
};


table.__proto__ = head;

bed.__proto__ = table;

pockets.__proto__ = bed;


console.log(pockets.pen); // 3

console.log(bed.glasses); // 1


console.time('From head');
console.log(head.glasses);
console.timeEnd('From head');

// From head: 0.512109375ms

console.time('From pockets');
console.log(pockets.glasses);
console.timeEnd('From pockets');

// From pockets: 0.33095703125ms

/* 

2. In modern engines, performance-wise, there’s no difference whether we take a property from an object or its prototype. 
They remember where the property was found and reuse it in the next request.

For instance, for pockets.glasses they remember where they found glasses (in head), and next time will search right there. 
They are also smart enough to update internal caches if something changes, so that optimization is safe.

*/

// ------------------------------------------------------------------------------------------------------------------------------

//3.

/*

We have rabbit inheriting from animal.

If we call rabbit.eat(), which object receives the full property: animal or rabbit?


let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();


*/


/*
Answer : The answer: rabbit.

That’s because this is an object before the dot, so rabbit.eat() modifies rabbit.

Property lookup and execution are two different things.

The method rabbit.eat is first found in the prototype, then executed with this=rabbit.

*/

// ------------------------------------------------------------------------------------------------------------------------------


// 4. 


/*

We have two hamsters: speedy and lazy inheriting from the general hamster object.

When we feed one of them, the other one is also full. Why? How can we fix it?

*/

let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    },

    // fix 1.
    eatIndividual(food) {
        this.stomach = [...this.stomach, food]
    }
};

let speedy = {
    // fix 2.
    stomach: [],
    __proto__: hamster
};

let lazy = {
    // fix 2.
    stomach: [],
    __proto__: hamster
};

// This one found the food
speedy.eat("apple");

speedy.eat("banana");

console.log(speedy.stomach); // apple

// This one also has it, why? fix please.
console.log(lazy.stomach); // apple


/*

push mutates original array
whereas spread operator creates new array

1st fix : eatIndividual(food) {
        this.stomach = [...this.stomach, food]
    }


2nd fix : have each object it's own property

*/


speedy.eatIndividual("apple");

speedy.eatIndividual("banana");


console.log(speedy.stomach); // apple

// This one also has it, why? fix please.
console.log(lazy.stomach); // apple