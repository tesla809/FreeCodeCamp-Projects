/*
Bonfire: Falsy Bouncer
Remove all falsy values from an array.

Falsy values in javascript are false, null, 0, "", undefined, and NaN.

Remember to use Read-Search-Ask if you get stuck. Write your own code.
*/

function destroyer(arr) {
    var argsArr = Array.prototype.slice.call(arguments);
    var target = argsArr[0];
    var terminator = [];
    
    for(var i = 1; i < argsArr.length; i++){
        terminator.push(argsArr[i]);
    }
    
    function test(value){
        return value !== terminator[0] &&
        value !== terminator[1] &&
        value !== terminator[2];
        
    }
    
    target = target.filter(test);
    
    return target;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3, "");

