'use strict';

// Herança de construtores

function YourConstructor() {}

// O que a engine do JS faz

YourConstructor.prototype = Object.create(Object.prototype, {
    constructor: {
        enumerable: true, 
        writable: true, 
        configurable: true, 
        value: YourConstructor
    }
});

// Exemplo de herança entre construtores

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

// function Square(size) {
//     this.width = size;
//     this.lenght = size;
// }

// Square.prototype = new Rectangle();
// Square.prototype.constructor = Square;

// Square.prototype.toString = function toString() {
//     return '[Square: ' + this.width + ' x ' + this.lenght + ']';
// };


/**
 * A herança também poderia ser escrita usando Object.create 
 * sem correr o risco de esquecer de passar qualquer parâmetro 
 * ao construtor, evitando erros durante a criação do objeto
 */

function Square(size) {
    this.width = size;
    this.lenght = size;
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
    return '[Square: ' + this.width + ' x ' + this.lenght + ']';
};

var rect = new Rectangle(2, 5);
var square = new Square(3);

console.log(rect);
console.log(square);

console.log(rect.getArea());
console.log(square.getArea());

console.log(rect.toString());
console.log(square.toString());

// instanceof percorre entre a cadeia de protótipos

console.log(rect instanceof Rectangle);
console.log(rect instanceof Object);

console.log(square instanceof Square);
console.log(square instanceof Rectangle);
console.log(square instanceof Object);
