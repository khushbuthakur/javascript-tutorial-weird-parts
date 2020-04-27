// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)

let timerId = setTimeout(()=> console.log('run'), 1000);
console.log(timerId);


// A call to setTimeout returns a “timer identifier” timerId that we can use to cancel the execution.