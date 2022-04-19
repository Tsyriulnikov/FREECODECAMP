//Find the Longest Word in a String
function findLongestWordLength(str) {
    return str.split(' ').reduce((acc,cur)=> acc.length>cur.length ? acc:cur).length;
   }
   
   findLongestWordLength("The quick brown fox jumped over the lazy dog");