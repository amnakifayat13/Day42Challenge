/*  Modify a method in an object to use the this keyword to access another property in the same object.*/


let volume = {
    length: 10,
    width: 5,
    height : 6,
    calculateAre: function (){
        return this.length * this.width * this.height;

    },

};
console.log(volume.calculateAre());


