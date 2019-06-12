
;(function(){
    'use strict';

    // Atributos das propriedades de dados

    var person = {};

    Object.defineProperty(person, 'name', {
        value: 'Rafael', 
        writable: true, 
        enumerable: true, 
        configurable: true
    });

    console.log(person);

    // Apenas leitura

    var person2 = {};

    Object.defineProperty(person2, 'name', {
        value: 'Felipe'
    });

    console.log('name' in person2); // true
    console.log('name propertyIsEnumerable?', person2.propertyIsEnumerable('name')); // false
    // delete person2.name; // Cannot delete property 'name' of #<Object>
    console.log(person);
    person2.name = 'felipe rafael'; // Cannot assign to read only property 'name' of object '#<Object>'
    console.log(person);

}());
