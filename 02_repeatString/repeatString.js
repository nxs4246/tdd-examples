const repeatString = function(text, number) {
    let result = "";

    if(number == 0) {
        return result;
    } else if(number < 0) {
        return "ERROR";
    } else {
        for(let i = 1; i <= number; i++) {
            result += text;
        }
        return result;
    }
};

// Do not edit below this line
module.exports = repeatString;
