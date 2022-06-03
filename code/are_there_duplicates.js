/**
 * Implement a function called Are There Dupicates which accepts a variable number of arguments, and checks whether there are any
 * duplicates among the arguments passed in. 
 * 
 * Sample Input:
 * (1,2,3) =>> false
 * (1,2,2) =>> true
 * 
 * ---------------------------------
 * Time Complexity => 0(n)
 * Space Complexity => 0(1)
 * ---------------------------
 * 
 */

//Frequency Counter pattern

const isDuplicateWithFCP = (arr) => {
    if (arr.length <= 0) {
        return false;
    };

    let lookup = {};

    for (let x = 0; x < arr.length; x++) {
        lookup[arr[x]] ? lookup[arr[x]] += 1 : lookup[arr[x]] = 1;
    };
    for (const property in lookup) {
        if(lookup[property] >= 2){
            return true;
        }
    };
    return false;
}

console.log(isDuplicateWithFCP([1,2]));

// Other Way
function areThereDuplicates1() {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
  }

//  areThereDuplicates Solution (Multiple Pointers)

function areThereDuplicates2(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}

// areThereDuplicates One Liner Solution
function areThereDuplicates3() {
  return new Set(arguments).size !== arguments.length;
}