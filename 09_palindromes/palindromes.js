const palindromes = function (word) {
    stripped = word.toLowerCase("").replaceAll(" ","").replaceAll("!","").replaceAll(",","").replaceAll(".","");
    inverse = stripped.split("").reverse().join("");
    if (stripped === inverse){
        return true;
    }else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
