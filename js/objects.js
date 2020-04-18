var person = new Object();


// dot notation is also called member access -> it has highest precendence after ();

// bracket notation is also called computed member access -> it has highest precendence after ();

person.firstNamae = "Khushbu";
person['lastName'] = "Thakur";

var firstNameProperty = 'firstNamae';

// it evaluates the variable in [] and gives it value
console.log(person[firstNameProperty]);

console.log(person.lastName);

person.address = new Object();
person['address']['street'] = "M.G. Road";
person.address.city = "Mumbai";

console.log(person);
console.log(person.address.street);
console.log(person['address']['city']);

/*
output :

{
  firstNamae: 'Khushbu',
  lastName: 'Thakur',
   address: { street: 'M.G. Road', city: 'Mumbai' }
}

Khushbu
Thakur
M.G. Road
Mumbai
*/