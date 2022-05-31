const validAnagram = (str1, str2) => {
    if(str1.length !== str2.length){
        return false;
    }
    let lookup = {};
    
    for(let x=0; x<str1.length; x++){
       lookup[str1[x]] ? lookup[str1[x]] +=1 : lookup[str1[x]] = 1
    };
    for(let i=0; i<str2.length; i++){
        if(!lookup[str2[i]]){
            return false;
        }
        lookup[str2[i]] -= 1;
        
    }
    return true;
}

console.log(validAnagram('anagram','nagaram'))