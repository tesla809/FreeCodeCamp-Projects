//Convert the given number into a roman numeral.

/* the data structure repeats itself
it can be abstracted away */

function convert(num) {
    var number = num;
    var roman = [];
    var numPlace = 0;
    
    function repeat(letter, times){
        var output = "";
        for(var x = 0; x < times; x++){
            output += letter;
        }
        return output;
    }
    
    console.log(number);
    
    // 1000s
    if (number/1000 > 1 && number/1000 < 10){
        numPlace = Math.floor(number/1000);
        roman.push(repeat("M",numPlace));
        number = number % 1000;
        console.log(number);
    } 
    
    // 100's
    if (number/100 > 1 && number/1000 < 10){
        numPlace = Math.floor(number/100);
        // 900
        if (numPlace === 9){
            roman.push("CM");
        } 
        // 500 or more
        else if (numPlace >= 5){
            numPlace = numPlace - 5;
            roman.push("D"),
            roman.push(repeat("C",numPlace));
        }
        // 400
        else if (numPlace === 4){
            roman.push("CD");
        }
        // 300 or less
        else {
            roman.push(repeat("C",numPlace));
        }
        
        number = number % 100;
        console.log(number);
    } 
    
    // 10's
    if (number/10 > 1 && number/10 < 10){
        numPlace = Math.floor(number/10);
        // 90
        if(numPlace === 9){
            roman.push("XC");
        }
        
        // 50 or more
        else if (numPlace >= 5){
            numPlace = numPlace - 5;
            roman.push("L");
            roman.push(repeat("X",numPlace));
        }
        
        //40
        else if (numPlace === 4){
            roman.push("XL");
        } 
        // 30 or less
        else if (numPlace <= 3){
            roman.push(repeat("X",numPlace));
        }
        
        number = number % 10;
        console.log(number);
    }
    
    // 1's
    if (number < 10 && number > 0){
        // 9
        if (number === 9){
            roman.push("IX");
        } 
        // 5 and up
        else if (number >= 5){
            numPlace = numPlace - 5;
            roman.push("V");
            roman.push(repeat("I",numPlace));
        } 
       // 4
       else if (number === 4){
           roman.push("IV");
       }
       // 3 or less
       else if (number <= 3) {
            roman.push(repeat("I",numPlace));            
       }
       
    }
    
    console.log(number);
    return roman;
}

convert(3331);
