/*
Bonfire: Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, 
and access each member with array syntax arr[i] .
*/


//method 1
/* but uses
1- function inside array
2- built in functions.

I'd like to make my own custom solution.
*/
function largestOfFour(arr) {
  var array = arr;
  var largestNum = 0;
  var largestArray = [];
  
  
  for(var i = 0; i < array.length; i++){
       // console.log(array[i]);
       var arrayJ = array[i].sort(function(a,b){return a-b;
       });
       largestNum = arrayJ.pop();
       largestArray.push(largestNum);
       console.log(largestArray);
  }
  arr = largestArray;   
  return arr;
}
  

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);



// method 2
/*
Uses no built in functions
no functions inside an array
*/

function largestOfFour(arr) {
  var array = arr;
  var largestNum = 0;
  var largestArray = [];
  /*
  pointless function but I still like it.
  function compareNum(currentNum, biggestNum){
      if(isNaN(currentNum) === true || isNaN(biggestNum) === true){
        return false;
      }
      
      if (currentNum > biggestNum){
          biggestNum = currentNum;
          return biggestNum;
      } else {
          return biggestNum;
      }
  }
  */
  
  for(var i = 0; i < array.length; i++){
       //console.log(array[i]);
      for(var j = 0; j < array[i].length; j++) {
           // console.log(array[i][j]);
           var currentNumJ = array[i][j];
           if (currentNumJ > largestNum){
               largestNum = currentNumJ;
           }
           largestArray[i] = largestNum;
      }
    console.log(largestArray);
  }
  
  arr = largestArray;
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);