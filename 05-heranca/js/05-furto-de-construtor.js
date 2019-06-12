'use strict';

/**
 * Furto de construtor, também conhecido como herança pseudoclássica 
 * por realizar a herança como linguagens que tem suporte a classes!
 */

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

// Geralmente usado para herdar/reescrever propriedades
function Square(size) {
    Rectangle.apply(this, [size, size]); // ou call(this, size, size)
}

// Geralmente usado para herdar métodos
Square.prototype = Object.create(Rectangle.prototype, {
    constructor: {
        enumerable: true, 
        writable: true, 
        configurable: true, 
        value: Square
    }
});

Square.prototype.toString = function toString() {
    return '[Square: ' + this.width + ' x ' + this.lenght + ']';
};

var rect = new Rectangle(2, 5);
var square = new Square(3);

console.log(rect, square);

console.log(rect.getArea());
console.log(rect.toString());

console.log(square.getArea());
console.log(square.toString());
