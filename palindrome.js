const isPalindrome = function (x) {
    let split_txt = String(x).split('');
    let strArrReverse = [...split_txt].reverse();

    if (JSON.stringify(split_txt.join('')) === JSON.stringify(strArrReverse.join(''))) {
      return true;
    } else {
        return false;
    }
};

console.log(isPalindrome('101'))