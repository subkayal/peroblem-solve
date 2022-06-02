/**
 * Write a function called Max-Sub-Array-Sum which accepts an array of integers and a number called n. The function should calculate
 * Maximum sum of n consecutive elements in the array.
 * 
 * Example:
 * --------------
 * 
 * [1,2,5,2,8,1,5] , 2 => 10;
 * [1,2,5,2,8,1,5] , 4 => 17;
 * [] , 4 => null;
 * 
 * Time Complexity => 0(n)
 * Space Complexity => 0(1)
 * 
 */


const maxSubArraySum = (arr, num) => {
    let maxSum = 0;
    let temSum = 0;

    if(arr.length < num) return null;

    for(let i=0; i < num; i++){
        maxSum += arr[i]
    }
    temSum = maxSum;
    
    for(let i=num; i < arr.length; i++){
        let s = temSum - arr[i - num];
        temSum = s + arr[i];
        maxSum = Math.max(maxSum, temSum);
    }
    return maxSum;

};

console.log(maxSubArraySum([1,2,5,2,8,1,5], 2));