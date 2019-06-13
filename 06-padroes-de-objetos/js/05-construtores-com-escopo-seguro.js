'use strict';

/**
 * Construtores com escopo seguro (sem usar new), 
 * evitando problemas como criar variáveis em escopo global
 */

function Person(name) {
    if (!(this instanceof Person))
        return new Person(name);
    this._name = name;
}

var rafael = new Person('rafael');
var felipe = Person('Felipe');

console.log(rafael, felipe);
