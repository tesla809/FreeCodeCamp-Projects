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






