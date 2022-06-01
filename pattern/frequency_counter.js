/**
 * Given two string, write a function to determine if the second string in an anagram of the first string.
 * 
 * Example:
 * --------------
 * 
 * s = "", t=""  ==>> true;
 * s = "anagram", t = "nagaram"  ==>> true;
 * s = "aaz", t = "zza"  ==>> false;
 * 
 * Time Complexity => 0(n)
 * Space Complexity => 0(1)
 * 
 */

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