/**
 * Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum
 * is 0. Return an array that includes both value that sum to zero or undefined if a pair does not exist.
 * 
 * Example:
 * --------------
 * 
 * [-3,-2,-1,0,1,2,3] => [-3, 3];
 * [-2,0,1,3] => undefined
 * 
 * Time Complexity => 0(n)
 * Space Complexity => 0(1)
 * 
 */

const sumZero = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        }else if(sum > 0){
            right--
        }else{
            left++
        }
    }
}
console.log(sumZero([-3,-2,-1,0,1,2,3]))


/**
 * Implement a function called count Unique Values, Which accepts a sorted array, and counts the unique
 * values in the array. the can be negative number in the array, but it will always be sorted.
 * 
 * Example:
 * --------------
 * 
 * [1,1,1,1,1,1,2] => 2
 * [] => 0
 * [-2,-1,-1,0,1] => 4
 * 
 * Time Complexity => 0(n)
 * Space Complexity => 0(1)
 * 
 */

const checkUniqueValue = (arr) => {

    // arr = arr.sort();   //if array not sorted

    let i = 0;
    if(arr.length === 0){
        return 0;
    }
    for (let x = 1; x < arr.length; x++) {
        if (arr[i] !== arr[x]) {
            i++;
            arr[i] = arr[x];
        }
    }
    return i + 1;
}

console.log(checkUniqueValue([1, 1, 1, 2, 3, 3, 4, 4, 4, 5, 5, 6, 6]));

