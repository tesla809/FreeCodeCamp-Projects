/*
Bonfire: Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
The lowest number will not always come first.

Use: 
Math.min()
Math.max()
Array.reduce()
*/

function sumAll(arr) {
    var rangeArray = [];
    var max = Math.max(arr[0],arr[1]);
    var min = Math.min(arr[0],arr[1]); 
    
    for(i = min; i<= max; i++){
        rangeArray.push(i);
        console.log(i);
    }
    
    rangeArray = rangeArray.reduce(function(a,b){
        return a+b;
    });
    
    return rangeArray;
}

console.log(sumAll([1, 4]));

