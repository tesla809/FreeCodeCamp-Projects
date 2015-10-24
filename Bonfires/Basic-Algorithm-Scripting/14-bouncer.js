/*Bonfire: Falsy Bouncer
Remove all falsy values from an array.

Falsy values in javascript are false, null, 0, "", undefined, and NaN.

Remember to use Read-Search-Ask if you get stuck. Write your own code.
*/

function bouncer(arr){
    function noFalseValues (value){
        if(Boolean(value) === true){
            return value;
        }
    }  
    arr = arr.filter(noFalseValues);
    return arr;
}


bouncer([7, "ate", "", false, 9], "");






