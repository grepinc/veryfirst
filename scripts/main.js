var lib = require("./lib");
var min = require("./lib").min;

console.log(lib.min);
console.log(lib.max);
console.log(min);
console.log(lib.internal);

console.log(lib.isOk(-2));
console.log(lib.isOk(2));
console.log(lib.isOk(12));

for(var prop in lib){
   console.log(prop);
}
