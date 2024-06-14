const sumAll = function(left, right) {
    let result = 0;
    let max;
    let min;

    if (left < 0 || right < 0 || typeof left !== 'number' || typeof right !== 'number' || isNaN(left) || isNaN(right)) {
        return 'ERROR';
    }

    if(left <= right) {
        min = left;
        max = right;
    } else {
        max = left;
        min = right;
    }

    for(let i = min; i <= max; i++) {
        result = result + i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
