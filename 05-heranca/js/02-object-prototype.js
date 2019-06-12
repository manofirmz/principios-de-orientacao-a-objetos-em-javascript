'use strict';

// Alterar o prototype de Object é muito grave!

Object.prototype.add = function add(value) {
    return this + value;
};

var book = {
    title: 'Princípios de Orientação à Objetos em Javascript'
};

/**
 * Output: [object Object]5
 * valueOf retorna uma referência para o objeto book, 
 * toString é chamado como fallback e exibe uma representação 
 * do objeto em formato de string: [object Object], 
 * valueOf avalia o proximo valor para descobrir seu tipo e 
 * realiza a conversão implicita para string: neste caso 5 
 * se transforma em '5'
 */
console.log(book.add(5));
console.log('title'.add(5)); // title5

// Propriedades enumeráveis são exibidas em loops for in
for (var property in book) {
    console.log(property);
}

// É aconselhado user hasOwnProperty em loops for in
for (var property in book) {
    if (book.hasOwnProperty(property))
        console.log(property);
}
