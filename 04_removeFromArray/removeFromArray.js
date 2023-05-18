const removeFromArray = function(array, ...theArgs) {
    let length = array.length;
    let arglength = theArgs.length;
    arr = array;
  
    for (i = 0; i < length; i++){
        for (j = 0; j < arglength; j++)   
            if (theArgs[j] === arr[i]){
            arr.splice(i, 1), i--;
        }
    }
    return arr;
};

//import array
//check rem to subject array
//remove if match


// Do not edit below this line
module.exports = removeFromArray;
