let arr = [1, 2, 3];

let secondArr = [
    1,
    false,
    {
        firstName: 'Khushbu',
        lastName: 'Thakur'
    },
    function sayHi(name) {
        console.log(`Hi ${name}. How are you?`)
    },
    'Hello'
];


secondArr[3](secondArr[2].firstName);


// Hi Khushbu. How are you?