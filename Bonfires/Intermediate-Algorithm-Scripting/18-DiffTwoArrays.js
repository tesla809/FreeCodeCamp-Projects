/*
Compare two arrays and return a new array with any items only found in one of the original arrays.
*/

function diff(arr1, arr2) {
  // compare each element to each other
    // cycle one element of first array
    // each element of first array compared to all elements
    // in second array
    
  // if elements match,
    // eliminate all instances of element
    // in both arrays
    
    var arr1Temp = arr1;
    var arr2Temp = arr2;
    var finalArr = [];
    
    for(var i = 0; i < arr1.length; i++){
        for(var j = 0; j < arr2.length; j++){
            console.log("arr1:"+ arr1[i] + 
                        " compared to arr2:" + arr2[j]);
            if(arr1[i] === arr2[j]){
                console.log("Match!");
                delete arr2Temp[j];
                delete arr1Temp[i];
                break;
            }
        }
        console.log("\n");
    }
    
    var newArr = arr1Temp.concat(arr2Temp);
    
    for(var k = 0; k < newArr.length; k++){
        if(newArr[k] !== undefined){
            finalArr.push(newArr[k]);
            console.log("got ya! " + newArr[k]);
        }
    }
    
    return finalArr;

}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

