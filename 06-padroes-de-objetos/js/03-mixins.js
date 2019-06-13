'use strict';

/**
 * Mixins básicamente são usados para realizar herança entre objetos 
 * sem alterar a cadeia de protótipos, sem utilizar herança pseudoclássica 
 * ou furto de construtor
 */

// copia propriedades enumeráveis (shallow)
function mixin(receiver, supplier) {
    for (var property in supplier)
        if (supplier.hasOwnProperty(property))
            receiver[property] = supplier[property];

    return receiver;
}

var person = {
    names: [] // cuidado ao copiar objetos
};

var person2 = {
    get name() {
        return this._name;
    }, 
    set name(name) {
        this._name = name;
    }
}

var rafael = mixin({}, person);
rafael.names.push('Rafael', 'Felipe'); // altera a referência!

console.log(person.names);

var felipe = mixin({}, person2);
felipe.name = 'Felipe';

console.log(felipe);
