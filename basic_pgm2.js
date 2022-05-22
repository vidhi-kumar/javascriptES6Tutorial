// here we will see the execution of a simple js program
const num = 3; // in memory a space gets the value 3 and is constant
function multiplyBy2(inputNumber){ // multiplyBy2 is also a variable which stores the whole funtion as its value in mem.
    const result = inputNumber*2;
    return result;
}
// all these are variables globally present in the environment. They are part of global execution context
// for each funtion, a local execution context is generated
const output = multiplyBy2(4);
// initially value of output is undefined since in thread of execution, only the declaration happens and since the
//function is just declared, it cannot return value..hence undefined
// js has automatic garbage collection of local execution contexts once they have returned value..except one thing..
//will come to it later
const newOutput = multiplyBy2(10);
// only after returning value to output, the thread reaches the newOutput. This is why we call js single threaded
// it wont run code in global context until it deals with local context :)
//this is its synchronous nature

//so its easy to understand code since everything is happening sequentially

// for pgm to know which exec context it is in and which one to visit next, it uses an execution call stack
// []
// [global]
// [global, multiplyBy2(4)]
// [global]
// [global, multiplyBy2(10)]
// [global]
// []