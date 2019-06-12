'use strict';

// Por padrão todos objetos herdam de Object.prototype

var defaultObject = Object.create(Object.prototype, {
    name: {
        enumerable: true, 
        writable: true, 
        configurable: true, 
        value: 'Default'
    }
});

var rafael = {
    name: 'Rafael', 
    getName: function getName() {
        return this.name;
    }
};

console.log(rafael.name);

// Herdando de outros objetos

var felipe = Object.create(rafael, {
    name: {
        enumerable: true, 
        writable: true, 
        configurable: true, 
        value: 'Felipe'
    }
});

console.log(rafael.isPrototypeOf(felipe)); // true
console.log('getName' in rafael); // true
console.log(rafael.hasOwnProperty('getName')); // true
console.log(felipe.hasOwnProperty('getName')); // false
console.log(rafael.getName());
console.log(felipe.getName());
