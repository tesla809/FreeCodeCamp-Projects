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
    
    // scales amount to arguments
    function scaleArguments(value){
        var string = '';
        for(var k = 0; k < value; k++){
            string += 'value !== terminator[' + k + ']';
            if(k < value - 1){
                string += ' && ';
            }
        }
        return string;
    }
  
    // set value
    var freeScale = scaleArguments(terminator.length);
    
    function eliminate(value){
        // evaluates string to executable code
        return eval(freeScale);
    }
    
    target = target.filter(eliminate);
    
    return target;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3, '');


