const arry = [1, 2, 3],
    arry2 = [1, '2', '4', 6, 10, '34', '88'];


const mapForEach = function (arr, fn) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i]));
    }
    return newArr;
}

const doubleArr = mapForEach(arry, function (item) {
    return item * 2;
});

console.log('------------------');
console.log(doubleArr);

// [ 2, 4, 6 ]


const checkPastLimit = function (limiter, item) {
    return item > limiter;
}

const isGreaterThanOne = mapForEach(arry, checkPastLimit.bind(this, 1));

console.log('------------------');
console.log(isGreaterThanOne);

// [ false, true, true ]

// 1. without binding function

const checkPastLimititer = function (limit) {
    return function (item) {
        return item > limit;
    }
}

const isGreaterThanTwo = mapForEach(arry, checkPastLimititer(2));

console.log('------------------');
console.log(isGreaterThanTwo);

// [ false, false, true ]


// 2. without binding function

const checkPastLimitSimplified = function (limiter) {
    return function (limit, item) {
        return item > limiter;
    }.bind(this, limiter);
}

const isGreaterThanThree = mapForEach(arry, checkPastLimitSimplified(3));

console.log('------------------');
console.log(isGreaterThanThree);

// [ false, false, false ]


const _filter = function (arr, fn) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (fn(item)) {
            newArr.push(item)
        }
    }
    return newArr;
}

const isNumber = (item) => typeof item === "number";

const onlyNumbers = _filter(arry2, isNumber);

console.log('Before : ', arry2, 'After : ', onlyNumbers);