function factorialize(num) {
  var holder = 1;
  for(var i = num; i > 0; i--){
  	holder *= i;
  }
  return holder;
}

factorialize(5);

