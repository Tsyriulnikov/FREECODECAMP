//Factorialize a Number
function factorialize(num) {
    return num ? num * factorialize(num-1):1 ;
  }
  
  factorialize(5);