/* < , > <=, >= all goes left to right */

console.log(1 < 2 < 3);
// true

console.log(3 < 2 < 1);

// true

/*
1. 3 < 2 -> false (as good as 0)
2. False < 1 
3. Now one is bolean and another is number, so JS will coerce false to number i.e. 0
4. 0 < 1 -> true
so final output is true
*/

var num = 0;
var obj = new String('0');
var str = '0';

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false