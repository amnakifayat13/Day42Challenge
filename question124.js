/* Create a function inside an object that returns the object's own name property using the this keyword. */
var person = {
    name: " Amna",
    getName: function () {
        return this.name;
    },
};
console.log(person.getName());
