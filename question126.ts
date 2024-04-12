/*  Explain how the this keyword changes its value when used inside a nested function within a method.*/

let myObject = {
    property: "Value",
    outerMethod: function() {
        console.log(this.property);
       let innerMethod = () => {
        console.log(this.property);
        
       }
       innerMethod();
        
    }
}
myObject.outerMethod();