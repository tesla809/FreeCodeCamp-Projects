/*
Bonfire: Title Case a Sentence
Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
    str = str.toLowerCase();
    var strArray = str.split(' ');
    finalStr = '';
    
    function capLetter(string){
            return string.charAt(0).toUpperCase() + string.slice(1); }
    
    // apply function thru out each word
    for(var i = 0; i< strArray.length; i++) {
        finalStr += capLetter(strArray[i]) + ' ';
    }
    // removes extra space.
    finalStr = finalStr.substring(0, finalStr.length - 1);
    return finalStr;
}

titleCase("I'm a little tea pot");

