// console. memory, dom all these are web features part of browser | not the features of javascript
// hence the word interface
// a soln which is closer to async

function printHello(){
    console.log("Hello!");
}
setTimeout(printHello, 1000); // node background thread
// we don't add () because we are passing the entire function as a parameter to setTimeout function
//that's how setTimeout works..uses timer of web browser
//this is feature of web browser, outside the javascript...interfacing

console.log("Me first!");

//Q1) what if the setTimeout function gets exec while something is being executed in call stack???
//Ans) randomly, or does it have to wait... we need rules!!!