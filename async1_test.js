function printHello(){
    setTimeout(function (){
        console.log("Hello")
    }, 1000);
}
setTimeout(printHello, 1000);
console.log("Me first!")

// chain of set timeouts