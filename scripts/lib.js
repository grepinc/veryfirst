var min = 0;
var max = 10;

var internal = 5;

function isOk(value){
   return value >= min && value <= max;
}

module.exports.min = min;
module.exports.max = max;
module.exports.isOk = isOk;
