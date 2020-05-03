var add = require('./math').add;
var a = 7;
var increment = function (val) {
    return add(val, 1);
};
console.log(increment(a));
