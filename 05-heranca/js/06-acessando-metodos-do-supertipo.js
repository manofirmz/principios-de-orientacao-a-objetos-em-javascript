'use strict';

// Acessando métodos os supertipo usando call ou apply

function Rectangle(width, lenght) {
    this.width = width;
    this.lenght = lenght;
}

Rectangle.prototype.getArea = function getArea() {
    return this.width * this.lenght;
};

Rectangle.prototype.toString = function toString() {
    return '[Rectangle: ' + this.width + ' x ' + this.lenght + ']';
};

function Square(size) {
    Rectangle.apply(this, [size, size]);
}

Square.prototype = Object.create(Rectangle.prototype, {
    constructor: {
        enumerable: true, 
        writable: true, 
        configurable: true, 
        value: Square
    }
});

Square.prototype.toString = function toString() {
    var toString = Rectangle.prototype.toString.call(this);
    return toString.replace('Rectangle', 'Square');
};

var rect = new Rectangle(2, 5);
var square = new Square(3);

console.log(rect, square);

console.log(rect.getArea());
console.log(rect.toString());

console.log(square.getArea());
console.log(square.toString());
