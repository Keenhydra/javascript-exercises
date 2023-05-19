const fibonacci = function(num) {
    if (num < 0){
        return "OOPS";
    }
    sequence=1;
    number = Number(num);
    n1 = 0;
    n2 = 1;
    for (i=1; i < number; i++){
        sequence = n1 + n2;
        n1 = n2;
        n2 = sequence;
    }
    return sequence;
};

// Do not edit below this line
module.exports = fibonacci;
