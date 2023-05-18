const sumAll = function(...numbers) {
numbers.sort(function(a, b){return a - b});
first = numbers[0];
last = numbers[1];
let n = first;
let x = first;


if ((typeof numbers[0] !== 'number') || (typeof numbers[1] !== 'number')){
    return "ERROR";
}else if (first >= 0){
        while (n < last) {
        n++;
        x += n;
        }
}else {
    return "ERROR";
}

total = x;
return total;
};

// Do not edit below this line
module.exports = sumAll;
