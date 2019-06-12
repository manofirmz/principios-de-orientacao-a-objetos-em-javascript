
;(function(){
    'use strict';

    // Atributos de propriedades de acesso

    // Forma literal
    var person1 = {
        _name: 'Felipe', 
        get name() {
            return this._name;
        }, 
        set name(name) {
            return this._name;
        }
    };

    console.log(person1);

    var person2 = {
        _name: 'Rafael'
    };

    Object.defineProperty(person2, 'name', {
        get: function() {
            return this._name;
        }, 
        set: function(name) {
            this._name = name;
        }
    });

    console.log(person2);

    // Definindo várias propriedades simultâneamente

    var person3 = {};

    Object.defineProperties(person3, {
        _name: {
            value: 'Rafael Felipe', 
            enumerable: true, 
            configurable: true, 
            writable: true
        }, 
        name: {
            get: function() {
                return this._name;
            }, 
            set: function(name) {
                this._name = name;
            }, 
            configurable: true, 
            enumerable: true
        }
    });

    console.log(person3);

    var person4 = {
        name: 'Rafael'
    };

    // Obtendo os atributos de propriedades
    console.log(Object.getOwnPropertyDescriptor(person4, 'name'));

}());
