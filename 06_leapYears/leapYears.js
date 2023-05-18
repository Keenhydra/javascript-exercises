const leapYears = function(year) {

if((year%4) == 0){
    if(year%100 == 0){
        if((year%400 == 0) && (year%100 == 0)){
            return true
        }else{
            return false
        }
    } else {
        return true
    }
} else {
    return false;
}

};

//year must %4
//if year %100 > year must %400 => true

// Do not edit below this line
module.exports = leapYears;
