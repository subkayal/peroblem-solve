/**
 * Write a function called isSibsequence which takes in two strings and checkes whether the characters in the frist string
 * from a sub sequence of the characters in the second string. in other words, the function check whether the characters in the
 * first string appear somewhere in the second string without their order changing.
 * 
 * Sample Input:
 * ('hello', 'hello world') =>> false
 * ('sing', 'sting') =>> true
 * 
 * ---------------------------------
 * Time Complexity => 0(n)
 * Space Complexity => 0(1)
 * ---------------------------
 * 
 */


 function isSubsequence(str1, str2) {
   var i = 0;
   var j = 0;
   if (!str1) return true;
   while (j < str2.length) {
     if (str2[j] === str1[i]) i++;
     if (i === str1.length) return true;
     j++;
   }
   return false;
 }


 console.log(isSubsequence('hello', 'hello world'))

/**
 * Write a function called average pair. Given a sorted array of integers and target average, determing if there ia a paire of
 * values in the array where the average of the paire quals the target average. There may be more one paire that matches the
 * average target.
 * 
 * Sample Input:
 * ([1,4,5,6,7,8,9] 3) =>> true
 * ([1,4,5,6,7,8,9] 2) =>> false
 * 
 * ---------------------------------
 * Time Complexity => 0(n)
 * Space Complexity => 0(1)
 * ---------------------------
 * 
 */

 function averagePair(arr, num){
    let start = 0
    let end = arr.length-1;
    while(start < end){
      let avg = (arr[start]+arr[end]) / 2 
      if(avg === num) return true;
      else if(avg < num) start++
      else end--
    }
    return false;
  }

  console.log(averagePair([1,4,5,6,7,8,9], 3))