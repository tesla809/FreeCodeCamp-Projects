function rot13(str) {
    var unicodeValues;
    var unicodeArray = [];
    var result = '';
    
    for(var i = 0; i < str.length; i++){
        unicodeValues = str.charCodeAt(i);
        // A thru M is equal to 65 thru 78, so it goes up 13
        // N thru Z is equal to 78 thru 90, so it goes down 13
        // or else it will pass to punctuation. 
        if(unicodeValues >= 65 && unicodeValues <= 77){
            unicodeValues += 13;
        } else if(unicodeValues >=78 && unicodeValues <= 90){
            unicodeValues -= 13;
        }
        unicodeArray.push(unicodeValues);
    }
    
    for(var j = 0; j < unicodeArray.length; j++){
        result += String.fromCharCode(unicodeArray[j]);     
    }
    
    return result;
}

// Change the inputs below to test
var test1 = rot13("SERR PBQR PNZC"); // FREE CODE CAMP
var test2 = rot13("SERR CVMMN!"); // FREE PIZZA!
var test3 = rot13("SERR YBIR?"); // "FREE LOVE?"
var test4 = rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."); 
//"THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);