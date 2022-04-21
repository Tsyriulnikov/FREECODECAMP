//Finders Keepers
function findElement(arr, func) {
    return arr.find(func);
  }



  function findElement(arr, func) {
    return arr[arr.map(func).indexOf(true)];
  }


  