'use strict';

// Membros privados de construtores (propriedades/atributos privados)

function Person(name) {
    var age = 24; // private
    
    this._name = name;
    
    this.getAge = function getAge() {
        return age;
    };

    this.growOlder = function growOlder() {
        age++;
    };
}

var rafael = new Person('Rafael');

console.log(rafael);
console.log(rafael.getAge());
rafael.growOlder();
console.log(rafael.getAge());

// Compartilhando propriedades privadas através do protótipo

var Person = (function() {
    var age = 24; // Compartilhado entre todas as instâncias

    function InnerPerson(name) {
        this._name = name;
    }

    InnerPerson.prototype.getAge = function getAge() {
        return age;
    };

    InnerPerson.prototype.growOlder = function growOlder() {
        age++;
    };

    return InnerPerson;
}());

var rafael = new Person('Rafael');
var felipe = new Person('Felipe');

console.log(rafael);
console.log(felipe);

rafael.growOlder();

console.log(rafael.getAge());
console.log(felipe.getAge());
