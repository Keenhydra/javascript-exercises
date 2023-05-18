const palindromes = function (word) {
    const regex = /!,. /g;
    stripped = word.toLowerCase("").replaceAll(regex, "");
    inverse = stripped.split("").reverse().join("");
    console.log(regex);
    if (stripped === inverse){
        return true;
    }else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
