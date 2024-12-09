//Array and Object Destructuring

let array = ['red', 'green', 'blue'];
let[value1, value2, value3] = array;
console.log("Array after destructuring: ");
console.log(value1, value2, value3);

let obj = {
    id: 123,
    sname: 'ABC',
    percentage: 94
};

let {id, sname, percentage} = obj;
console.log("Object after destructuring: ");
console.log(id, sname, percentage);

//Arrow Functions

let fact = (n) => {
    let f = 1;
    for(let i=2; i<=n; i++) {
        f *= i;
    }
    return f;
}

console.log(`Factorial of 5 is ${fact(5)}`);