'use strict';

/**
    Prototype:
    Quando objetos são congelados, lhe é restrito a criação de propriedades próprias, 
    a extensão do objeto a partir do seu protótipo continua disponível

    É recomendável a criação de métodos no prótotipo, já que não faz sentido um objeto 
    possuir um método exclusivo por instância
*/

// function Person(name) {
//     Object.defineProperty(this, 'name', {
//         get: function() {
//             return name;
//         }, 
//         set: function(newName) {
//             name = newName;
//         }
//     });
//     this.getName = function getName() {
//         return this.name;
//     }
// }

// var person = new Person('Rafael');

// console.log(person.getName());

function Person(name) {
    this._name = name;
}

Person.prototype = {
    constructor: Person, // do contrário, Person instanceof Object === true
    getName: function getName() {
        return this._name;
    }, 
    setName: function setName(name) {
        this._name = name;
    }
};

var rafa = new Person('Rafael');

console.log(rafa);

// Extendendo objetos nativos (não recomendado)

Array.prototype.sum = function() {
    return this.reduce(function(accumulated, actual) {
        return accumulated + actual;
    });
};

var numbers = [1, 2, 3, 4, 5];

console.log(numbers.sum());
