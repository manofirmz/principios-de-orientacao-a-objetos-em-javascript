'use strict';

// graças ao valueOf é possível comparar datas

var now = new Date();
var earlier = new Date(2018, 10, 1);

console.log(earlier > now); // false


/**
 * Representação do valor do objeto em formato de string
 * Funciona como fallback, quando valueOf retorna uma referência
 */
console.log('Earlier:', earlier.toString());

var book = {
    title: 'Princípios de Orientação à Objetos em Javascript', 
    toString: function() {
        return '[Book: ' + this.title + ']';
    }
};

console.log(book.toString()); // por default [object Object]
