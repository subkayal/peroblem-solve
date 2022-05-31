

const arr = [1,3,7,9,2];
const target = 11;

const findSum = function (nums, target){
    const numsMap = {};
    for(let i=0; i<nums.length; i++){
        let currentValue = numsMap[nums[i]];
        if(currentValue >=0){
            return [currentValue, i]
        }else{
            const numberFind = target - nums[i];
            numsMap[numberFind] = i;
        }
    };
    return null;
}
//findSum(arr, target)
console.log(findSum(arr, target));



//Return Larget area
const array = [7,1,2,3,9];

const findArea = function(arr){
    let lergestArea = { 'area': 0, 'value 1': 0, 'value 1 Index': 0, 'value 2': 0, 'value 2 Index': 0 } ;
    
    for(let a=0; a<arr.length; a++){
       for(let b = a + 1; b < arr.length; b++){
           const height = Math.min(arr[a], arr[b]);
           const width = (b - a);
           const area = height * width;
            if(lergestArea['area']  < area ){
                lergestArea = {
                    'area': area,
                    'value 1': arr[a],
                    'value 1 Index': a,
                    'value 2': arr[b],
                    'value 2 Index': b,
                };
            }
       }
    }
    return lergestArea;
    
};

console.log(findArea(array));


