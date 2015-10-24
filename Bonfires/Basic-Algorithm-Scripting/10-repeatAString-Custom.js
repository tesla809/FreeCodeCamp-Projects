/*
Bonfire: Repeat a string repeat a string
Repeat a given string (first argument) n times (second argument). 
Return an empty string if n is a negative number.
*/

function repeat(str, num) {
  // repeat after me
  if (num > 0){
      if(num === 1){
          return str;
      }
      else{
          var strAdd = str;
          var count = 1;
          console.log(count);
          for(var i = 1; i < num; i++){
              count++;
              console.log(count);
              str += strAdd; 
          }
      }
      return str;
  } else {
      str = '';
      return str;
  }
}

repeat('abc', 3);