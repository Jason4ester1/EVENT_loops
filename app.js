//part 1
let number = 0;
function recursiveFunc() {
    if(counter === 1000){
        console.log(counter);
        return counter;
    }
    counter++;
    recursiveFunc();
}

try{
    recursiveFunc();
}catch (error){
    console.log("Nub")
}
// for( let i = 0 ; i <= 1000 ; i++){

// }
//     console.log(recursiveFunc());
// }
// function incrementCounter() {
//     number++;
// }

// function incrementAndCallSelf() {
//     number++;
// }    
// console.log(number)  

//part 2
//setTimeout(()=>)