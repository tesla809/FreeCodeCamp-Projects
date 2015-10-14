function palindrome(str) {
    var revStr = null;
    var shortStr = null;
    var holderStr = null;
    
    holder = str.toLowerCase();
    shortStr = holder.replace(/\W+/g, '');
    revStr = holder.split('').reverse().join('').replace(/\W+/g, '');

    if (shortStr === revStr){
        return true;
    }
    return false;
}

palindrome("a man, a plan, a canal.");

