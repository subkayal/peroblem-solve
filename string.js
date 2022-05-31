
let s = "Ab#z"
let t = "az#z"

const buildString = (str) => {
    str = str.split('');
    const str1_map = []
   for(let x=0; x<str.length; x++){
       if(str[x] === '#'){
           str1_map.pop()
       }else{
           str1_map.push(str[x])
       }
   }
   return str1_map;
};

const matchToString = (str1, str2) => {
    const buildString1 = buildString(str1);
    const buildString2 = buildString(str2);
    
    if(buildString1.length !== buildString2.length){
        return false
    }
    
    if(buildString1.join() === buildString2.join()){
        return true;
    }
    return false;
}

console.log(matchToString(s,t))