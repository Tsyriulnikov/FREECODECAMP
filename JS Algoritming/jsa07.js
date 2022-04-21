//Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
    let strtemp='';
    if (num > 0 ) {
    for(let i=0; i<num;i++) {strtemp=strtemp+str};
    }
      return strtemp;
    }
    repeatStringNumTimes("abc", 3);

    function repeatStringNumTimes(str, num) {
        if (num < 1) {
          return "";
        } else {
          return str + repeatStringNumTimes(str, num - 1);
        }
      }

      function repeatStringNumTimes(str, num) {
        return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
      }