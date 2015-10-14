function where(arr, num) {
  // goal: Find nums in this sorted array.
  
  // push num into copy of arr
  var arrSorted = arr;
  arrSorted.push(num);
  
  // sort the arr from lowest to highest
  // the implementation of sort function in JS is stupid
  arrSorted = arrSorted.sort(function(a, b) {
                        return a - b;
                        });
                        
  // get num's index in the arr
  var numIndex = arrSorted.indexOf(num);
  
  // return position of num
  return numIndex;
}

where([2, 5, 10], 15);


/*
Return the lowest index at which a value (second argument) should be inserted into a sorted array (first argument).

Basically, return the position where the second argument should go in the first argument's array.

*/