/*
Bonfire: Confirm the Ending
Check if a string (first argument) ends with 
the given target string (second argument).

*/

function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  strEnd = str.substr(str.length - target.length);
  console.log(strEnd);
  if(strEnd === target){
     return true;     
  } else {
      return false;
  }
}

end('Bastian super name', 'name');