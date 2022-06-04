/**
 * Write a function called Same Frequency. Given two positive integers, fine out if the
 * two numbers have the same frequency of digits.
 * 
 * Sample Input:
 * (182,281) =>> True
 * (34, 14) =>> False
 * 
 * ---------------------------------
 * Time Complexity => 0(n)
 * Space Complexity => 0(1)
 * ---------------------------
 * 
 */

const sameFrequency = (s, t) => {
    let str1 = s.toString();
    let str2 = t.toString();

    if (str1.length !== str2.toString().length) {
        return false;
    }
    let lookup = {};

    for (let x = 0; x < str1.length; x++) {
        lookup[str1[x]] ? lookup[str1[x]] += 1 : lookup[str1[x]] = 1;
    };

    for (let i = 0; i < str2.length; i++) {
        if(!lookup[str2[i]]){
            return false;
        }
        lookup[str2[i]] -= 1;
    }
    return true;
};

console.log(sameFrequency(182, 281));


// Other Way

function sameFrequency2(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;
    
    let countNum1 = {};
    let countNum2 = {};
    
    for(let i = 0; i < strNum1.length; i++){
      countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }
    
    for(let j = 0; j < strNum1.length; j++){
      countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }
    
    for(let key in countNum1){
      if(countNum1[key] !== countNum2[key]) return false;
    }
   
    return true;
  }

  console.log(sameFrequency2(182, 281));