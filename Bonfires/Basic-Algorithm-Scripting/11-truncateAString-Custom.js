/*
Bonfire: Truncate a string
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a "..." ending.

Note that the three dots at the end add to the string length.

If the length of the string is less than or equal to 3 characters, 
then the length of the three dots is not added to the string length.
*/


// custom slicer string prototype v.1
/* 
by Anthony Albertorio aka Tesla809
8/11/2015
https://www.linkedin.com/in/anthonyalbertorio
http://www.quora.com/Anthony-Albertorio-1
https://github.com/tesla809
https://twitter.com/Tesla809

http://www.freecodecamp.com/tesla809
*/

// custom slice prototype to practice.
String.prototype.slicer = 
function (beginSlice, endSlice){
    var strArray = this.split('');
    var sliceArray = [];
    /* if beginSlice < endSlice
       if beginSlice > endSlice
       if beginSlice but no endSlice
       if endSlice = 0 */
       
    if (beginSlice >= 0){
        if (endSlice === undefined || endSlice === 0){
            /* write custom function for charAt
               to reduce depedency? */
            return this.charAt(beginSlice);
        }
        for(var i = beginSlice; i <= endSlice + beginSlice -1; i++){
            sliceArray.push(strArray[i]);
        }
        var strNew = sliceArray.join('');
        return strNew;
    }
    
    // if beginSlice negative
    if (beginSlice < 0){
        // if (-)beginSlice, no endSlice
        if (endSlice === undefined || endSlice === 0){
            var wholeStr = this.length;
            var newStr = 0;
            wholeStr = wholeStr + beginSlice;
            var outputStr = this.charAt(wholeStr);
            return outputStr;
        } else {  
            // if (-)beginSlice, w/ endslice.
            wholeStr1 = this.length;
            newStr1 = 0;
            wholeStr1 = wholeStr1 + beginSlice;
            for (var j = wholeStr1; j >= wholeStr1 - endSlice + 1; j--){
            sliceArray.push(strArray[j]);
        }
        
        // reverse string so it looks normal
        var modStr = [];
            for(var k = sliceArray.length; k >=0; k--){
                modStr.push(sliceArray[k]);
            }
            modStr = modStr.join('');
            return modStr;
            }
        }   
};

function truncate(str, num) {
    // Clear out that junk in your trunk
    strLength = str.length;
    if (strLength <= num){
        return str;
    } else {

      var strSample = str.slicer(0,num - 3) + '...';
      str = strSample;
      return str;
    }
}

truncate('A-tisket a-tasket A green and yellow basket', 11);
