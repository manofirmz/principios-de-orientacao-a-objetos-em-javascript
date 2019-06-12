
;(function(){
    'use strict';

    // Objetos em sua forma literal

    var object = {
        name: 'Rafael', 
        age: 24, 
        getName: function getName() {
            return this.name;
        }
    }; // { 'name': 'Rafael', 'age': 24 }
    var array = [1, 2, 3, 4, 5];
    var regex = /\d+/g;
    function reflect(value) {
        return value;
    } // new Function('value', 'return value;');

    // Acessando propriedades

    var property = 'name';
    var method = 'getName';
    
    console.log(object[property]);
    console.log(object[method]());

    /** 
        Identificando tipos de referência
        Os tipos de referência herdam de Object
    */

    console.log('array:', array instanceof Array);
    console.log('object:', object instanceof Object);
    console.log('function:', reflect instanceof Function);
    console.log('regex:', regex instanceof RegExp);
    console.log('array object?', array instanceof Object);
    console.log('function object?', reflect instanceof Object);
    console.log('regex object?', regex instanceof Object);

    // Identificando Array
    console.log('is Array?', Array.isArray(array));

}());
