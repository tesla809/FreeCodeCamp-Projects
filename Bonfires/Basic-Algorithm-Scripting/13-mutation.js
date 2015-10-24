/*
Bonfire: Mutations
Return true if the string in the first element of the array 
contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in 
the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien
*/

function mutation(arr) {
    function stringToArray(string){
        var arr = [];
        for (var i = 0; i < string.length; i++){
            arr.push(string[i]);
        }
        return arr;
    }
    
    function compareLetters(stringMain, stringSub){
        var i = 0;
        if (stringMain.indexOf(stringSub[0]) === -1){
            return false;
        }
        
        do {
            index = stringMain.indexOf(stringSub[i]);
            i++;
            // console.log(i, index);
        } while(index != -1);
 
        
        if (i -1 === stringSub.length){
            return true;
        } else {
            return false;
        }

    }
    
    //set elements to variables
    var stringMain = stringToArray(arr[0].toLowerCase());
    var stringSub = stringToArray(arr[1].toLowerCase());
    // console.log(stringMain, stringSub);
    
    var answer = compareLetters(stringMain, stringSub);
    
    if (answer === true){
        return true;
    } else {
        return false;
    }
}

mutation(['hello', 'hey']);

/*
problem that letters of line are not found in Alien
is that by passing the entire string thru, it has to 
find the string in that order. Need to pass the letters
individually.
*/







/*
string in arrTwo have to match arrOne:

returns with different cases?
returns with different order?
returns with different amount of letters?

*/

/*
How?

Step 1:
Which is string one; which is string two?
Set them each to a variable.

Step 2:
How do you compare each string?
Compare each letter from string two with string one
You use two for loops, one nested in another. 
The first outer for loop iterates the elements of string two.
the inner for loop iterates the elements of string one and compares the two letters?

Where do we use the .indexOf() operator?

Step 3:
Do they match?
If yes, return true
If no, return false

What conditions should be met if they match?
If the whole thing goes thru, then return true.
If not, then return false.
.indexOf() could be used here.


extra credit:
Where can we optimize?

1- If letter is repeated?
Since letter is repeated, we can check all letters, group them by letter. If one passes, then they all pass. Saving time if lots of repeated letters.
Do this for string one and string two.
Create its own function.



*/