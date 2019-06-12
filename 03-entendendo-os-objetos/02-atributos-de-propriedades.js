
;(function(){
    'use strict';

    // Atributos comuns em propriedades de dados e acesso

    var person = {
        name: 'Rafael'
    };

    // Não iterável
    Object.defineProperty(person, 'name', {
        enumerable: false
    });

    console.log('name' in person);
    console.log('name: propertyIsEnumerable?', person.propertyIsEnumerable('name'));
    console.log(Object.keys(person).length);

    // Sem resultado
    for (var prop in person) {
        console.log(prop, person[prop]);
    }

    // Não pode ser deletado
    Object.defineProperty(person, 'name', {
        configurable: false
    });

    delete person.name; // Cannot delete property 'name' of #<Object>

}());
