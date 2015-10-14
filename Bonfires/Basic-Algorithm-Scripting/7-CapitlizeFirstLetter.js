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

