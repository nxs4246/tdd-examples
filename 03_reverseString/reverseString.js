const reverseString = function(string) {
    let len_string = string.length;
    let rev_array = "";

    for(let i = (len_string - 1); i >= 0; i--) {
        rev_array += string[len_string - 1];
        len_string--;
    }

    return rev_array;
};

// Do not edit below this line
module.exports = reverseString;
