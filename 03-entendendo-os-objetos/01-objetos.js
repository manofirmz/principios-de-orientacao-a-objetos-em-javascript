
;(function(){
    'use strict';

    // Entendendo os objetos

    var person = {
        name: 'Rafael', 
        age: 24, 
        work: 'front end developer'
    };

    // Deletando propriedades próprias do objeto
    // delete person.work; // true


    // Iterando sobre as propriedades do objeto
    for (var property in person) {
        console.log(property, person[property]);
    }

    console.log('name: propertyIsEnumerable?', person.propertyIsEnumerable('name'));

    // Obtendo propriedades próprias do objeto
    var keys = Object.keys(person); // Retorna um Array

    for (var i = 0, len = keys.length; i < len; i++) {
        console.log(keys[i], person[keys[i]]);
    }

    // Descobrindo se o objeto possui tal propriedade

    console.log('name' in person);
    console.log(person.hasOwnProperty('name'));

    // Propriedades de dados e acesso

    var rafa = {
        _name: 'Rafael', 
        get name() {
            console.log('Reading name...');
            return this._name;
        },

        set name(name) {
            console.log('Set name...');
            this._name = name;
        }
    };

    console.log(rafa);
    console.log(rafa.name);
    rafa.name = 'rafael';
    console.log(rafa.name);

}());
