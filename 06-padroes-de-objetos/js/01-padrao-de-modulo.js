'use strict';

// Padrão de módulo (module pattern)

var person = (function() {
    var age = 24;

    return {
        name: 'Rafael', 
        
        getAge: function getAge() {
            return age;
        }, 

        growOlder: function growOlder() {
            age++;
        }
    };
}());

console.log(person);
console.log(person.getAge());
person.growOlder();
console.log(person.age); // undefined
console.log(person.getAge());

/**
 * O padrão de módulo também pode ser implementado da 
 * seguinte forma (também conhecido como Revealing module pattern)
 */

var person = (function() {
    var age = 25;

    function getAge() {
        return age;
    }

    function growOlder() {
        age++;
    }

    return {
        name: 'Felipe', 
        getAge: getAge, 
        growOlder: growOlder
    };
}());

// Importando e exportando módulos

var calculator = (function() {
    return {
        sum: function() {
            var notANumber = Array.prototype.some.call(
                arguments, 
                function(arg) {
                    return typeof arg !== 'number';
                }
            );
            
            if (notANumber)
                throw new TypeError('Should only receive numbers!');
            
            return Array.prototype.reduce.call(
                arguments, 
                function(accumulated, actual) {
                    return accumulated + actual;
                }, 0
            );
        }
    };

    /**
     * Exportando global:
     * window.calculator = calculator;
     */

}());

// console.log(calculator.sum(1, 2, 3, 4));
// console.log(calculator.sum(1, 2, 3, '4'));

var otherModule = (function(calc) {

    var rafael = { age: 24 };
    var felipe = { age: 24 };

    return {
        sumAges: function sumAges() {
            return calc.sum(rafael.age, felipe.age);
        }
    };
}(calculator)); // importando o módulo calculator

console.log('sumAges', otherModule.sumAges());
