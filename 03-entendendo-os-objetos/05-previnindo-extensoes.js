
;(function(){
    'use strict';

    /**
        Previnindo que objetos possam ser extendidos
        Object.preventExtension() // Object.isExtensible()
        Object.seal() // Object.isSealed()
        Object.freeze() // Object.isFrozen()
    */

    var person1 = {
        name: 'Rafael'
    };

    console.log('person1:', Object.isExtensible(person1));
    Object.preventExtensions(person1);
    console.log('person1', Object.isExtensible(person1));

    var person2 = {
        name: 'Rafael'
    };

    console.log('person2:', Object.isExtensible(person2));
    console.log('person2:', Object.isSealed(person2));
    Object.seal(person2);
    console.log('person2:', Object.isSealed(person2));

    var person3 = {
        name: 'Rafael'
    };

    console.log('person3:', Object.isExtensible(person3));
    console.log('person3:', Object.isSealed(person3));
    console.log('person3:', Object.isFrozen(person3));
    Object.freeze(person3);
    console.log('person3:', Object.isFrozen(person3));

    console.log(Object.getOwnPropertyDescriptor(person1, 'name'));
    console.log(Object.getOwnPropertyDescriptor(person2, 'name'));
    console.log(Object.getOwnPropertyDescriptor(person3, 'name'));

}());
