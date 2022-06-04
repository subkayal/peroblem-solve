
/**
 * Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a
 * subarray with the length of the number passed to the function.
 * 
 * Sample Input:
 * ([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) =>> 39
 * (34, 14) =>> False
 * 
 * ---------------------------------
 * Time Complexity => 0(n)
 * Space Complexity => 0(1)
 * ---------------------------
 * 
 */

const maxSubarraySum = (arr, num) => {
    let maxsum = 0;
    let tempsum = 0;

    if(arr.length < num) return false;

    for (let i = 0; i < num; i++) {
        maxsum += arr[i];
    }
    tempsum = maxsum;
    for (let i = num; i < arr.length; i++) {
        let del_val = tempsum - arr[i - num];
        tempsum = del_val + arr[i];

        maxsum = Math.max(tempsum, maxsum)
    }

    return maxsum;

};

console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 3));


// // minSubArrayLen Solution
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
 
  while (start < nums.length) {
    if(total < sum && end < nums.length){
      total += nums[end];
			end++;
    }
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
			total -= nums[start];
			start++;
    } 
    else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}


// findLongestSubstring Solution
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }
  return longest;
}

console.log(findLongestSubstring('rithmschool'));