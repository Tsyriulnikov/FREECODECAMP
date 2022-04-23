//Where do I Belong

function getIndexToIns(arr, num) {
    return arr.filter(val => num > val).length;
  }


  function getIndexToIns(arr, num) {
    // sort and find right index
    let index = arr
      .sort((curr, next) => curr - next)
      .findIndex(currNum => num <= currNum);
    // Returns index or total length of arr
    return index === -1 ? arr.length : index;
  }

  function getIndexToIns(arr, num) {
    return arr
      .concat(num)
      .sort((a, b) => a - b)
      .indexOf(num);
  }
  
  getIndexToIns([1, 3, 4], 2);
