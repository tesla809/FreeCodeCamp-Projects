function chunk(arr, size) {
  // Break it up.
  var arrBox = [];
  var arrayHolder = [];
  var length = arr.length;
  var buckets = length/size;
  var mod = length % size;
  
  // break up each array into segments by size
  function chopArray(sample, start, end){
      if(start < 0 || end < 0){
          return false;
      } else {
          var array = [];
          var starter = start;
          var ender = end;
          
          for(var i = start; i < end; i++){
              array.push(sample[i]);
              if(sample[i] ===  undefined){
                  array.pop(sample[i]);
              }
          }
          
          return array;
      }
  }
  
  // then add them each to new array
  // then push each array into new array
  
  
  // fix remainder issue with modulus
  var count = 0;
  var start = 0;
  var end = start + size;
  
  while(count < buckets){
      arrHolder = chopArray(arr, start, end);
      arrBox.push(arrHolder);
      start += size;
      end += size;
      count += 1;
      console.log(arrBox);
  }
  
    
}

chunk([0, 1, 2, 3, 4, 5], 4);

