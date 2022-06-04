
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


// minSubArrayLen Solution
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
 
  while (start < nums.length) {
    // if current window doesn't add up to the given sum then 
		// move the window to right
    if(total < sum && end < nums.length){
      total += nums[end];
			end++;
    }
    // if current window adds up to at least the sum given then
		// we can shrink the window 
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
			total -= nums[start];
			start++;
    } 
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
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
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}