function a() {
    // console.log(b);
    let b = true;
};

a();

for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        // here everytime we will get a different variable in memory as let is block scoped
        console.log(i)
    }, 1);
}


/*
output
0
1
2
*/

for (var j = 0; j < 3; j++) {
    setTimeout(() => {
        // because of var j is defined only once, and after that it's value just keeps on updating
        console.log(j)
    }, 1);
}

/*
output
3
3
3
*/