function findLongestWord(str) {
    var strArray = str.split(' ');
    var largestWord = '';
    var multiWords = '';
    
    for(var i = 0; i< strArray.length; i++){
        var currentWord = strArray[i].toString();
        if(currentWord.length > largestWord.length){
            largestWord = currentWord;
        }
    }
    console.log(largestWord);
}

findLongestWord('The quick brown fox jumped over the lazy dog');

/*
split string into array.
set largestWord to ' '.
run a loop on the array of letters equal to zero, i <= 0, and i++ (incrementing).
set variable currentWord to ' '.
if there is a space between letters, the letters before the string are a word.
join those letters into a word and assign to currentWord.
compare the length of currentWord to the largestWord:
    if currentWord is greater, assign value of currentWord      to largestWord (keep)
    else discard by moving to next word in loop.
 
return largestWord with largest number.
*/
