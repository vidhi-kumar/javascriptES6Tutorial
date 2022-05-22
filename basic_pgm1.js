// here we will see the execution of a simple js program
const num = 3; // in memory a space gets the value 3 and is constant
function multiplyBy2(inputNumber){ // multiplyBy2 is also a variable which stores the whole funtion as its value in mem.
    const result = inputNumber*2;
    return result;
}
const name = "Will";
// all these are variables globally present in the environment. They are part of global execution context
// for each funtion, a local execution context is generated

console.log(multiplyBy2);

//so far we are in global execution call stack since we didn't invoke multiplyBy2 function