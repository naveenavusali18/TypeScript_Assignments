var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Animal1 = {
    name: "Tiger",
    colour: "Greeen"
};
var Animal2 = {
    colour: "Orange",
    fly: true
};
var Animal3 = {
    fly: false,
    eat: true
};
var ResultAnimal = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return __assign(__assign(__assign({}, Animal1), Animal2), Animal3);
};
console.log(ResultAnimal(Animal1, Animal2, Animal3));
