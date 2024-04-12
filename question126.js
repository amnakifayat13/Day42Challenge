/*  Explain how the this keyword changes its value when used inside a nested function within a method.*/
var myObject = {
    property: "Value",
    outerMethod: function () {
        var _this = this;
        console.log(this.property);
        var innerMethod = function () {
            console.log(_this.property);
        };
        innerMethod();
    }
};
myObject.outerMethod();
