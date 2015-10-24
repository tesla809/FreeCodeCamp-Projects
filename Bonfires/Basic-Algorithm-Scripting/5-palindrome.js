/*
Bonfire: Check for Palindromes
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, 
ignoring punctuation, case, and spacing.

You'll need to remove punctuation and turn everything lower case in order to check for palindromes.

*/


function palindrome(str) {
    var revStr = null;
    var shortStr = null;
    var holderStr = null;
    
    holder = str.toLowerCase();
    shortStr = holder.replace(/\W+/g, '');
    revStr = holder.split('').reverse().join('').replace(/\W+/g, '');

    if (shortStr === revStr){
        return true;
    }
    return false;
}

palindrome("a man, a plan, a canal.");

